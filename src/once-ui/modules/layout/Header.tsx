"use client";

import {
  Button,
  Flex,
  Logo,
  SmartLink,
  ToggleButton,
  UserMenu,
} from "@/once-ui/components";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {
  authenticated: boolean;
  avatar?: string;
  name?: string;
  subline?: string;
}

const Header: React.FC<HeaderProps> = ({
  authenticated,
  avatar,
  name,
  subline,
}) => {
  const pathname = usePathname() ?? "";

  return (
    <Flex
      style={{
        borderBottom: "1px solid var(--neutral-border-medium)",
      }}
      as="header"
      fillWidth
      paddingX="xs"
      height="56"
      alignItems="center"
      background="surface"
    >
      <Flex hide={"s"}>
        <Logo />
      </Flex>
      <Flex show={"s"}>
        <Logo wordmark={false} />
      </Flex>
      {authenticated ? (
        <Flex fillWidth alignItems="center" justifyContent="space-between">
          <Flex fillWidth>
            <Flex hide="s" fillWidth gap="4" paddingX="l" alignItems="center">
              <ToggleButton selected={true} href="" label="Dashboard" />
              <ToggleButton
                selected={pathname === "/apps"}
                href=""
                label="Apps"
              />
              <ToggleButton
                selected={pathname === "/resources"}
                href=""
                label="Resources"
              />
            </Flex>
          </Flex>
          <Flex as="nav">
            <Flex hide="s">
              <UserMenu
                name={name}
                subline={subline}
                avatarProps={{
                  empty: !avatar,
                  src: avatar,
                }}
                dropdownOptions={[
                  {
                    label: "Profile",
                    value: "profile",
                  },
                  {
                    label: "Settings",
                    value: "settings",
                  },
                  {
                    label: "Log out",
                    value: "logout",
                  },
                ]}
              />
            </Flex>
            <Flex show="s">
              <UserMenu
                avatarProps={{
                  empty: !avatar,
                  src: avatar,
                }}
                dropdownOptions={[
                  {
                    label: "Profile",
                    value: "profile",
                  },
                  {
                    label: "Settings",
                    value: "settings",
                  },
                  {
                    label: "Log out",
                    value: "logout",
                  },
                ]}
              />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex fillWidth alignItems="center" justifyContent="flex-end">
          <Flex
            textVariant="label-default-s"
            fillWidth
            gap="4"
            paddingX="l"
            alignItems="center"
          >
            <SmartLink href="/">Home</SmartLink>
            <SmartLink href="/aboutme">About Me</SmartLink>
            <SmartLink href="/projects">Projects</SmartLink>
          </Flex>
          <Flex alignItems="center" gap="8">
            <Button
              size="s"
              variant="secondary"
              label="Contact Us"
              href="/contact"
            />
            <Button size="s" variant="primary" label="Donate?" href="/donate" />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

Header.displayName = "Header";
export { Header };
