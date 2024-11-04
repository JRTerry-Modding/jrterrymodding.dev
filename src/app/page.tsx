"use client";

import React from "react";

import {
  Badge,
  Flex,
  Grid,
  Heading,
  Icon,
  InlineCode,
  LetterFx,
  Logo,
  Text,
} from "@/once-ui/components";
import Link from "next/link";
import { Footer } from "@/app/components/footer";

export default function Home() {
  const links = [
    {
      href: "/projects",
      title: "Projects",
      description: "View our projects.",
    },
    {
      href: "/contact",
      title: "Contact Us",
      description: "Contact us for any questions.",
    },
    {
      href: "/donate",
      title: "Donate?",
      description: "Consider donating to help keep things alive.",
    },
  ];

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
            <Flex
              position="relative"
              flex={2}
              paddingTop="56"
              paddingX="xl"
              align={"center"}
              alignItems="center"
              justifyContent={"center"}
            >
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
              height={"160"}
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
                wrap="wrap"
                variant="display-strong-s"
                align={"center"}
                padding={"s"}
                gap={"s"}
              >
                <Text variant="display-strong-s">
                  <LetterFx trigger="instant" speed={"slow"}>
                    A Solo Developer, 100% Self-Taught
                  </LetterFx>
                </Text>
              </Heading>
              <Badge arrow={true} href="/aboutme">
                About Me
              </Badge>
            </Flex>
          </Flex>
          <Grid
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
          >
            {links.map((link) => (
              <Link
                target="_self"
                style={{ padding: "var(--responsive-space-l)" }}
                key={link.href}
                href={link.href}
              >
                <Flex
                  paddingY="8"
                  gap="8"
                  direction="column"
                  padding={"24"}
                  borderStyle={"solid-1"}
                  border={"brand-strong"}
                  radius="m"
                  alignItems="center"
                >
                  <Flex gap="12" alignItems="center">
                    <Text variant="body-strong-m">{link.title}</Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
