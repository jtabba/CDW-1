import {
  Box,
  Text,
  Stack,
  useColorModeValue,
  useDisclosure,
  Flex,
  MenuList,
  Menu,
  MenuButton,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import { FC } from "react";
import { NAV_ITEMS, NavItem } from "./DesktopNav";
import { AuthButtons } from "../authentication/SignInOrOut";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        textAlign={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          fontSize={"lg"}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

interface NavBarProps {}

export const MobileNav: FC<NavBarProps> = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton as={Button} rounded={"sm"} isActive={isOpen}>
            {isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />}
          </MenuButton>
          <MenuList>
            <Flex justifyContent={"center"} py={1}>
              <AuthButtons />
            </Flex>
            <MenuDivider />
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
