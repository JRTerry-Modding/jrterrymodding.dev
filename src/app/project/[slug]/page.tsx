"use client";

import React, { use } from "react";
import { DataGen } from "@/app/components/dataGen";
import { Flex, Heading, Icon } from "@/once-ui/components";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import Markdown from "react-markdown";

export default function ClientProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = use(params).slug;
  const data = DataGen(slug);

  const title = data.title;

  const icon = data.icon;
  const links = data.links;
  const downloads = data.downloads;
  const body = data.body;
const git = data.git;

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Nav />

      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex
            mobileDirection="column"
            fillWidth
            fillHeight
            gap="24"
            alignItems="center"
          >
            <Flex padding={"32"}></Flex>
            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
              alignItems="center"
              align={"center"}
            >
              <Heading
                wrap="balance"
                variant="display-strong-s"
                align={"center"}
              >
                {title}
              </Heading>
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
{<Flex padding={"xs"} />}
{
                  <a href={git} target="_blank" rel="noreferrer">
                    <Icon name={"github"} size={"m"}></Icon>
                  </a>
                }

              </Flex>

              <Flex padding={"4"} />
              <Image src={icon} alt={`${slug} icon`} width={180} height={180} />
              <Flex>Downloads: {downloads}</Flex>

              <Flex padding={"2"} />

              <Markdown>{body}</Markdown>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
