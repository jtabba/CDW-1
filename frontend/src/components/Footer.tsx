import { Flex, Box, Text, Link, Divider, useColorModeValue } from "@chakra-ui/react";
import { themeBlue, themeGrey, themeDarkBlue,themeDarkGrey } from "../theme/theme";

const Footer = () => {
  const footerLinks: { page: string; url: string }[] = [
    { page: "Help", url: "/help" },
    { page: "Propsective Mentors", url: "/mentors" },
    { page: "Terms", url: "/terms" },
    { page: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <Box flexWrap="wrap" height="6vh" bgColor={themeDarkGrey} color="white">
      {/* <Divider p="10px" /> */}
      <Flex pt="20px" justifyContent="space-between" maxWidth="90%" ml="auto" mr="auto">
        <Text fontSize="1em">Copyright © 2023 MentorShip </Text>
        <Flex gap="6px">
          {footerLinks.map((element, index) => {
            return (
              <>
                <Link key={element.page} fontSize="1em" href={element.url}>
                  {element.page}
                </Link>
                <Text key={element.page + "div"} fontSize="1em">
                  {index !== footerLinks.length - 1 ? "|" : ""}
                </Text>
              </>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
