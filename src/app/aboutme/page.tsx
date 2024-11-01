"use client";

import React from "react";

import { Flex, Heading, Icon, Logo, Text } from "@/once-ui/components";
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
          <Flex mobileDirection="column" fillWidth gap="24">
            <Flex position="relative" flex={2} paddingTop="56" paddingX="xl">
              <Logo
                size="custom"
                icon={true}
                wordmark={false}
                style={{ zIndex: "1" }}
              />
            </Flex>
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
              <Text>
                I'm Josh, a solo and self taught developer, working together
                with my partner, Emily, for ideas and graphics.
              </Text>
              <></>
              <Text>
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
              <Text>
                At the time of writing this, I have 1 Minecraft mod published
                with 189 downloads. It isn't many, but its a massive achievement
                for me as my first published project!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
