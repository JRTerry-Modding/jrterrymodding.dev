import {Arrow, Button, Flex, Text} from "@/once-ui/components";
import Link from "next/link";
import React from "react";


export const Footer = () => {

return (


        <Flex
            as="footer"
            position="relative"
            fillWidth paddingX="l" paddingY="m"
            justifyContent="space-between">
            <Text
                variant="body-default-s" onBackground="neutral-weak">
                © 2024 JRTerry Modding, <Link href="https://github.com/JRTerry-Modding/Licence/tree/main?tab=MIT-1-ov-file">MIT License</Link>
            </Text>
            <Flex
                gap="12">
                <Button
                    id='github'
                    href="https://github.com/JRTerry-Modding"
                    prefixIcon="github" size="s" variant="tertiary">
                    <Flex>
                        GitHub
                        <Arrow trigger="#github"/>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
)
}
