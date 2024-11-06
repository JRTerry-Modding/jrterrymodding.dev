"use client";

import React from "react";

import { Flex, Heading, Icon, Text } from "@/once-ui/components";
import { Footer } from "@/app/components/footer";
import { Nav } from "@/app/components/nav";
import Link from "next/link";

export default function Contact() {
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
                Contact Us
              </Heading>
              <Icon name="chevronDown" />
              <Text variant={"code-default-xl"}>
                Want to contact us? For what ever reason it is, feel free!
              </Text>
              <Flex padding={"24"} />
              <Text variant={"display-default-xs"}>Email us at:</Text>

              <Link href={"mailto:josh@jrterrymodding.dev"}>
                <Text variant={"body-strong-l"}>josh@jrterrymodding.dev</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
