import { Flex, Box, Text, Link, Divider } from "@chakra-ui/react";

const Footer = () => {
  const footerProps: { page: string; url: string }[] = [
    { page: "Help", url: "/help" },
    { page: "Propsective Mentors", url: "/mentors" },
    { page: "Terms", url: "/terms" },
    { page: "Privacy Policy", url: "/privacy" },
  ];

  const links: JSX.Element[] = [];

  footerProps.forEach((element, index) => {
    links.push(
      <Link key={element.page} fontSize="10px" href={element.url}>
        {element.page}
      </Link>
    );
    if (index !== footerProps.length - 1)
      links.push(
        <Text key={element.page + "div"} fontSize="10px">
          {" "}
          |{" "}
        </Text>
      );
  });

  return (
    <Box flexWrap="wrap" height="10vh">
      <Divider margin="10px" />
      <Flex justifyContent="space-between">
        <Text fontSize="10px">Copyright © 2023 Lorem Ipsum</Text>
        <Flex gap="5px">
          {footerProps.map((element, index) => {
            return (
              <>
                <Link key={element.page} fontSize="10px" href={element.url}>
                  {element.page}
                </Link>
                <Text key={element.page + "div"} fontSize="10px">
                  {" "}
                  {index !== footerProps.length - 1 ? "|" : ""}
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
