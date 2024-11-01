"use client";

import React from "react";

import {
  Arrow,
  Button,
  Flex,
  Heading,
  InlineCode,
  LetterFx,
  Logo,
} from "@/once-ui/components";

export default function Broken() {
  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
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
                icon={false}
                wordmark
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
              <InlineCode
                className="shadow-m"
                style={{
                  width: "fit-content",
                  padding: "var(--static-space-8) var(--static-space-16)",
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                Josh, Owner of{" "}
                <span className="brand-on-background-medium">
                  JRTerry Modding
                </span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s"
                align={"center"}
              >
                <span className="font-code">
                  <LetterFx trigger="hover" speed={"slow"}>
                    A Solo Developer, 100% Self-Taught
                  </LetterFx>
                </span>
              </Heading>
              <Button id="aboutme" href="/broken" variant="primary">
                <Flex alignItems="center">
                  About Me
                  <Arrow trigger="#aboutme" />
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <Heading>Please! Fix Me!</Heading>
          <Button id="fix" href="/">
            <Flex alignItems="center">
              FIX
              <Arrow trigger="#fix" />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
