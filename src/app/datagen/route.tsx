import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const modrinthid = request.nextUrl.searchParams.get("modrinthid");

  if (!modrinthid) {
    return NextResponse.json({ error: "ModrinthId needed." }, { status: 404 });
  }

  const modrinthData = modrinthid
    ? await fetch(`https://api.modrinth.com/v2/project/${modrinthid}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch(() => null)
    : null;

  if (!modrinthData)
    return NextResponse.json(
      { error: "ModrinthId not found." },
      { status: 404 },
    );

  const curseApiKey = process.env.NEXT_PUBLIC_CURSEFORGE_API_KEY
    ? process.env.NEXT_PUBLIC_CURSEFORGE_API_KEY.split(",").join("$")
    : "";

  const cursePreData = modrinthData
    ? await fetch(
        `https://api.curseforge.com/v1/mods/search?gameId=432&slug=${modrinthData.slug}`,
        {
          method: "GET",
          headers: { Accept: "application/json", "X-API-Key": curseApiKey },
        },
      )
        .then((res) => res.json())
        .catch(() => null)
    : null;

  const curseData = cursePreData?.data[0];

  const downloads =
    (modrinthData ? modrinthData.downloads : 0) +
    (curseData ? curseData.downloadCount : 0);
  const links = {
    modrinth: modrinthData
      ? `https://modrinth.com/mod/${modrinthData.slug}`
      : "",
    curseforge: curseData ? curseData.links.websiteUrl : "",
    internal: modrinthData ? `/project/${modrinthData.slug}` : "",
    git: modrinthData ? modrinthData.source_url : "",
  };

  const icon = modrinthData ? modrinthData.icon_url : "/trademark/icon-dark";
  const title = modrinthData ? modrinthData.title : "";
  const description = modrinthData ? modrinthData.description : "";
  const slug = modrinthData ? modrinthData.slug : "";
  const body = modrinthData ? modrinthData.body : "";

  return NextResponse.json({
    id: modrinthid,
    title: title,
    description: description,
    icon: icon,
    downloads: downloads,
    links: links,
    slug: slug,
    body: body,
    status: 200,
  });
}
