import {
  Arrow,
  Button,
  Flex,
  GlitchFx,
  Heading,
  LetterFx,
} from "@/once-ui/components";
import React from "react";
import { Footer } from "@/app/components/footer";

export default function NotFound() {
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
                  <GlitchFx speed="slow" interval={100}>
                    <Flex direction="column" padding="24" gap="8">
                      <LetterFx trigger="hover" speed={"slow"}>
                        Something went wrong!!
                      </LetterFx>
                      <LetterFx trigger="hover" speed={"slow"}>
                        Consider going back before something breaks!
                      </LetterFx>
                    </Flex>
                  </GlitchFx>
                </span>
              </Heading>
              <GlitchFx speed={"slow"} interval={100}>
                <Button id="home" href="/broken" variant="primary">
                  <Flex alignItems="center">
                    Go Home!
                    <Arrow trigger="#home" />
                  </Flex>
                </Button>
              </GlitchFx>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
