import { Flex, Heading } from "@/once-ui/components";
import React from "react";
import { Footer } from "@/app/components/footer";

export default function Loading() {
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
                <span className="font-code">
                  <Flex direction="column" padding="24" gap="8">
                    Loading...
                  </Flex>
                </span>
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
