"use client";

import React from "react";
import { DataGen } from "@/app/components/dataGen";
import { Flex, Heading, Text } from "@/once-ui/components";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import Test from "./md.mdx";

export default function Project({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = DataGen(slug);

  const title = data.title;
  const description = data.description;
  const icon = data.icon;
  const links = data.links;
  const downloads = data.downloads;

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
            >
              <Heading
                wrap="balance"
                variant="display-strong-s"
                align={"center"}
              >
                {title}
              </Heading>
              <Test />
              <Flex padding={"4"} />
              <Image src={icon} alt={`${slug} icon`} width={180} height={180} />
              <Flex padding={"4"} />
              <Text variant={"code-default-s"}>
                Ive been teaching myself how to code since 2022, learning
                multiple languages and frameworks.
              </Text>

              <Text variant={"code-default-s"}>
                At the time of writing this, I have 1 Minecraft mod published
                with 189 downloads. It isn't many, but its a massive achievement
                for me as my first published project!
              </Text>
              <Flex padding={"4"} />
              <Heading
                wrap="balance"
                variant="display-default-xs"
                align={"center"}
              >
                IDE of choice
              </Heading>

              <Text variant={"code-default-s"}>IntelliJ Ultimate</Text>
              <Flex padding={"4"} />
              <Heading
                wrap="balance"
                variant="display-default-xs"
                align={"center"}
              >
                Games I play
              </Heading>

              <Text variant={"code-default-s"}>Minecraft</Text>
              <Text variant={"code-default-s"}>Terraria</Text>
              <Text variant={"code-default-s"}>Satisfactory</Text>
              <Text variant={"code-default-s"}>BeatSaber</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
