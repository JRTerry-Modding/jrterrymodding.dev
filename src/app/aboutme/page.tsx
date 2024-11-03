"use client";

import React from "react";

import { Flex, Heading, Icon, Text } from "@/once-ui/components";
import { Footer } from "@/app/components/footer";
import { Nav } from "@/app/components/nav";

export default function AboutMe() {
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
                About Me
              </Heading>
              <Icon name="chevronDown" />
              <Text variant={"code-default-s"}>
                I'm Josh, a solo and self taught developer, working together
                with my partner, Emily, for ideas and graphics.
              </Text>
              <></>
              <Text variant={"code-default-s"}>
                Ive been teaching myself how to code since 2022, learning
                multiple languages and frameworks.
              </Text>
              <Flex gap="24">
                <Icon name="html" />
                <Icon name="css" />
                <Icon name="js" />
                <Icon name="nextjs" />
                <Icon name="java" />
                <Icon name="kotlin" />
                <Icon name="flutter" />
              </Flex>
              <Text variant={"code-default-s"}>
                At the time of writing this, I have 1 Minecraft mod published
                with 189 downloads. It isn't many, but its a massive achievement
                for me as my first published project!
              </Text>
              <Flex></Flex>
              <Heading
                wrap="balance"
                variant="display-default-xs"
                align={"center"}
              >
                IDE of choice
              </Heading>

              <Text variant={"code-default-s"}>IntelliJ Ultimate</Text>
              <Flex></Flex>
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
