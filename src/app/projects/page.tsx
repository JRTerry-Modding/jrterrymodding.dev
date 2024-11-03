"use client";

import React from "react";

import { Flex } from "@/once-ui/components";
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
        fillWidth
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
              direction="column"
              alignItems="center"
            >
              <Flex>
                <Flex
                  position="relative"
                  flex={4}
                  gap="24"
                  marginBottom="104"
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
