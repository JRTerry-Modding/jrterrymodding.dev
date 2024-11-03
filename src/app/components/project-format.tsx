import { Mods } from "@/app/components/mods";
import React, { useEffect, useState } from "react";
import { Flex, Grid, Icon, Text } from "@/once-ui/components";

export const ProjectFormat = () => {
  return (
    <Grid
      columns="repeat(3, 1fr)"
      gap="104"
      padding={"32"}
      mobileColumns="1col"
    >
      {Mods.map((mod) => {
        const [downloads, setDownloads] = useState(0);
        const [links, setLinks] = useState({
          modrinth: "",
          curseforge: "",
        });

        useEffect(() => {
          const setInfo = async () => {
            const modrinthData = mod.modrinthid
              ? await fetch(
                  `https://api.modrinth.com/v2/project/${mod.modrinthid}`,
                  { method: "GET", headers: {} },
                )
                  .then((res) => res.json())
                  .catch(() => null)
              : null;

            const curseapikeyparts =
              process.env.NEXT_PUBLIC_CURSEFORGE_API_KEY?.split(",");
            const curseapikey = curseapikeyparts?.join("$");
            const curseforgeData = mod.curseforgeid
              ? await fetch(
                  `https://api.curseforge.com/v1/mods/${mod.curseforgeid}`,
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

            setDownloads(
              (modrinthData ? modrinthData.downloads : 0) +
                (curseforgeData ? curseforgeData.data.downloadCount : 0),
            );
            setLinks({
              modrinth: modrinthData
                ? `https://modrinth.com/mod/${modrinthData.slug}`
                : "",
              curseforge: curseforgeData
                ? curseforgeData.data.links.websiteUrl
                : "",
            });
          };
          setInfo();
        }, []);

        return (
          <Flex
            key={mod.id}
            padding={"24"}
            borderStyle={"solid-1"}
            border={"brand-strong"}
            alignItems="center"
            direction="column"
          >
            <Flex gap={"24"}>
              <Text>{mod.name}</Text>

              <Flex>
                {links.modrinth && (
                  <a href={links.modrinth} target="_blank" rel="noreferrer">
                    <Icon name={"modrinth"} size={"m"}></Icon>
                  </a>
                )}
                {links.curseforge && (
                  <a href={links.curseforge} target="_blank" rel="noreferrer">
                    <Icon name={"curseforge"} size={"m"}></Icon>
                  </a>
                )}
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Grid>
  );
};
