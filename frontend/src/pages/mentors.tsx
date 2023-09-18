import {
  Card,
  CardBody,
  Text,
  Heading,
  Image,
  Stack,
  SimpleGrid,
  Tag,
  Select,
  Box,
} from "@chakra-ui/react";
import DefaultProfile from "../assets/default_profile.png";
import { useState } from "react";

import { mentors } from "./dummyMentors";

export interface Mentor {
  name?: string;
  email?: string;
  dateOfBirth?: string;
  yearsOfExperience?: number;
  currentJobTitle?: string;
  AreasOfExpertise?: string[];
  rate?: number;
  interests?: string[];
  aboutMe?: string;
  id: string;
}

export default function Mentors() {
  const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>(mentors);

  const areasArray: string[] = mentors
    .flatMap((mentor) => mentor.AreasOfExpertise ?? [])
    .filter((area, index, self) => self.indexOf(area) === index);

  const filterMentors = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setDisplayedMentors(mentors);
    } else {
      const filteredMentors: Mentor[] = mentors.filter((mentor) =>
        mentor.AreasOfExpertise?.includes(e.target.value)
      );
      setDisplayedMentors(filteredMentors);
    }
  };

  return (
    <div>
      <Heading textAlign={"center"} padding={8}>
        <Text>Meet the Mentors</Text>
      </Heading>
      <Box m={"4em auto"} width={"fit-content"}>
        <Select onChange={filterMentors}>
          <option value={"All"}>-- All --</option>
          {areasArray.map((area) => (
            <option value={area}>{area}</option>
          ))}
        </Select>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        m={{ base: 4, sm: "auto" }}
        flexWrap={"wrap"}
        maxW={"900px"}
      >
        {displayedMentors.map((person) => (
          <Card
            maxW={"sm"}
            textAlign={"center"}
            _hover={{ boxShadow: "outline" }}
          >
            <CardBody>
              <Stack alignContent={"space-between"} height={"100%"}>
                <Image
                  src={DefaultProfile}
                  alt={person.name}
                  borderRadius="full"
                  width={"50%"}
                  m={"auto"}
                />
                <Heading size={"md"}>{person?.name}</Heading>
                <Text>{person?.currentJobTitle}</Text>
                <Text>{person?.aboutMe}</Text>
                <Stack
                  flexDirection={"row"}
                  m={"auto"}
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                >
                  {person.AreasOfExpertise?.map((area) => (
                    <Tag width={"fit-content"}>{area}</Tag>
                  ))}
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
