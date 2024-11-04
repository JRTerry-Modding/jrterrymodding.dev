"use client";

import React, { Fragment, use, useEffect, useState } from "react";
import { DataGen } from "@/app/components/dataGen";
import { Flex, Heading } from "@/once-ui/components";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import { compile, run } from "@mdx-js/mdx";

import * as runtime from "react/jsx-runtime";
import { Content } from "next/dist/compiled/@next/font/dist/google";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = use(params).slug;
  const data = DataGen(slug);

  const title = data.title;
  const description = data.description;
  const icon = data.icon;
  const links = data.links;
  const downloads = data.downloads;

  //
  //
  const [mdxModule, setMdxModule] = useState();
  const Body = mdxModule ? mdxModule.default : Fragment;

  useEffect(
    function () {
      (async function () {
        setMdxModule(await run(body, { ...runtime, baseUrl: import.meta.url }));
      })();
    },
    [body],
  );

  //fix doesnt work in use client
  // https://mdxjs.com/guides/mdx-on-demand/
  const body = String(
    await compile(data.body, {
      outputFormat: "function-body",
      /* …otherOptions */
    }),
  );

  //
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

              <Flex padding={"4"} />
              <Image src={icon} alt={`${slug} icon`} width={180} height={180} />
              <Flex padding={"4"} />
              <Content />

              <Flex padding={"4"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
