"use client";

import React, {
  Dispatch,
  SetStateAction,
  use,
  useEffect,
  useState,
} from "react";
import { Flex, Heading, Icon } from "@/once-ui/components";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import Markdown from "react-markdown";
import Loading from "@/app/components/Loading";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use client";
  const slug = use(params).slug;

  const [data, setData]: [any, Dispatch<SetStateAction<any>>] = useState("");

  useEffect(() => {
    const setInfo = async () => {
      const data = await fetch(
        `http://localhost:3000/datagen?modrinthid=${slug}`,
        { method: "GET" },
      ).then((res) => res.json());
      setData(data);
    };

    setInfo();
  }, []);

  if (!data) return <Loading />;

  const title = data.title;
  const icon = data.icon;
  const links = data.links;
  const downloads = data.downloads;
  const body = data.body;

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
                    <Icon name={"modrinth"} size={"l"}></Icon>
                  </a>
                }
                {<Flex padding={"xs"} />}
                {
                  <a href={links.curseforge} target="_blank" rel="noreferrer">
                    <Icon name={"curseforge"} size={"l"}></Icon>
                  </a>
                }
                {<Flex padding={"xs"} />}
                {
                  <a href={links.git} target="_blank" rel="noreferrer">
                    <Icon name={"github"} size={"l"}></Icon>
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
