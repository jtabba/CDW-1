import { Flex, Box, Text, Link, Divider } from "@chakra-ui/react";

const Footer = () => {
  const footerLinks: { page: string; url: string }[] = [
    { page: "Help", url: "/help" },
    { page: "Propsective Mentors", url: "/mentors" },
    { page: "Terms", url: "/terms" },
    { page: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <Box flexWrap="wrap" height="10vh">
      <Divider margin="10px" />
      <Flex justifyContent="space-between">
        <Text fontSize="10px">Copyright © 2023 Lorem Ipsum</Text>
        <Flex gap="5px">
          {footerLinks.map((element, index) => {
            return (
              <>
                <Link key={element.page} fontSize="10px" href={element.url}>
                  {element.page}
                </Link>
                <Text key={element.page + "div"} fontSize="10px">
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
