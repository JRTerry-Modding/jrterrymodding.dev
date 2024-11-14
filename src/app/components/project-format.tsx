import { Mods } from "@/app/components/mods";
import React from "react";
import { Button, Flex, Grid, Icon, Text } from "@/once-ui/components";
import Image from "next/image";

export const ProjectFormat = () => {
  return (
    <Grid
      columns="repeat(3, 1fr)"
      gap="104"
      padding={"32"}
      mobileColumns="1col"
    >
      {Mods.map(async (mod) => {
        const data = await fetch(
          `https://jrterrymodding.dev/datagen?modrinthid=${mod.modrinthid}`,
          { method: "GET" },
        ).then((res) => res.json());

        const title = data.title;
        const description = data.description;
        const icon = data.icon;
        const links = data.links;
        const downloads = data.downloads;
        const slug = data.slug;

        return (
          <Flex
            key={mod.id}
            padding={"24"}
            borderStyle={"solid-1"}
            border={"brand-strong"}
            alignItems="center"
            direction="column"
            radius="m"
          >
            <Flex
              padding={"s"}
              background={"brand-strong"}
              radius="s"
              fillWidth
              justifyContent="space-between"
            >
              <Text variant={"code-default-l"}>{title}</Text>

              <Flex>
                {
                  <a href={links.modrinth} target="_blank" rel="noreferrer">
                    <Icon name={"modrinth"} size={"m"}></Icon>
                  </a>
                }
                {<Flex padding={"xs"} />}
                {
                  <a href={links.curseforge} target="_blank" rel="noreferrer">
                    <Icon name={"curseforge"} size={"m"}></Icon>
                  </a>
                }
              </Flex>
            </Flex>
            <Flex padding={"4"} />
            <Flex
              gap={"24"}
              padding={"s"}
              background={"info-medium"}
              radius="xl"
            >
              <Image src={icon} alt={`${slug} icon`} width={180} height={180} />
            </Flex>
            <Flex padding={"4"} />
            <Flex
              gap={"104"}
              padding={"s"}
              background={"brand-medium"}
              radius="s"
              fillWidth
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text variant={"code-default-m"}>Minecraft Mod</Text>

              <Button href={`${links.internal}`}>More -&gt;</Button>
            </Flex>
            <Flex padding={"4"} />
            <Flex
              gap={"104"}
              padding={"s"}
              background={"info-medium"}
              radius="s"
              fillWidth
              align={"center"}
            >
              <Text variant={"code-default-m"}>{description}</Text>
            </Flex>
            <Flex padding={"4"} />
            <Flex
              gap={"104"}
              padding={"s"}
              background={"info-strong"}
              radius="s"
              fillWidth
              align={"center"}
              justifyContent={"space-between"}
            >
              <Text variant={"code-default-m"}>Downloads:</Text>
              <Text variant={"code-default-m"}>{downloads}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Grid>
  );
};
