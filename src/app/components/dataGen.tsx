import { useEffect, useState } from "react";

export const DataGen = (modrinthid: any) => {
  const [downloads, setDownloads] = useState(0);
  const [links, setLinks] = useState({
    modrinth: "",
    curseforge: "",
    internal: "",
  });
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [git, setGit] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const setInfo = async () => {
      const modrinthData = modrinthid
        ? await fetch(`https://api.modrinth.com/v2/project/${modrinthid}`, {
            method: "GET",
            headers: {},
          })
            .then((res) => res.json())
            .catch(() => null)
        : null;

      const curseapikeyparts =
        process.env.NEXT_PUBLIC_CURSEFORGE_API_KEY?.split(",");
      const curseapikey = curseapikeyparts?.join("$");
      const curseforgePreData = modrinthid
        ? await fetch(
            `https://api.curseforge.com/v1/mods/search?gameId=432&slug=${modrinthData.slug}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "X-Api-Key": curseapikey ? curseapikey : "",
              },
            },
          )
            .then((res) => res.json())
            .catch(() => null)
        : null;

      const curseforgeData = curseforgePreData.data[0];

      setDownloads(
        (modrinthData ? modrinthData.downloads : 0) +
          (curseforgeData ? curseforgeData.downloadCount : 0),
      );
      setLinks({
        modrinth: modrinthData
          ? `https://modrinth.com/mod/${modrinthData.slug}`
          : "",
        curseforge: curseforgeData ? curseforgeData.links.websiteUrl : "",
        internal: modrinthData ? `/project/${modrinthData.slug}` : "",
      });
      setIcon(modrinthData ? modrinthData.icon_url : "");
      setTitle(modrinthData ? modrinthData.title : "");
      setDescription(modrinthData ? modrinthData.description : "");
      setGit(modrinthData ? modrinthData.source_url : "");
      setSlug(modrinthData ? modrinthData.slug : "");
    };
    setInfo();
  }, []);

  return {
    title: title,
    description: description,
    icon: icon,
    git: git,
    downloads: downloads,
    links: links,
    slug: slug,
  };
};
