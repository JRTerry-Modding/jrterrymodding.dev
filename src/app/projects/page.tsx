"use client";

import React from "react";

import { Flex, Heading, Icon } from "@/once-ui/components";
import { Footer } from "@/app/components/footer";
import { Nav } from "@/app/components/nav";
import { ProjectFormat } from "@/app/components/project-format";

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
                Projects
              </Heading>
              <Icon name="chevronDown" />
              <Flex>
                <Flex
                  position="relative"
                  flex={4}
                  gap="24"
                  marginBottom="104"
                  direction="column"
                  alignItems="center"
                >
                  <ProjectFormat />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
