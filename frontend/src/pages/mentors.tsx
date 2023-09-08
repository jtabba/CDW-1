import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Image,
  Stack,
  HStack,
  Grid,
  SimpleGrid,
  Tag,
  Select,
  Box,
} from "@chakra-ui/react";
import DefaultProfile from "../assets/default_profile.png";
import { useEffect, useState } from "react";

interface Mentor {
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
  // Dummy data for now until DB hook is implemented
  const mentors: Mentor[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      dateOfBirth: "1990-05-15",
      yearsOfExperience: 5,
      currentJobTitle: "Software Engineer",
      AreasOfExpertise: ["Web Development", "JavaScript", "React"],
      rate: 50,
      interests: ["Hiking", "Reading", "Coding"],
      aboutMe: "I love coding and helping others learn programming.",
      id: "1",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      dateOfBirth: "1985-09-22",
      yearsOfExperience: 8,
      currentJobTitle: "Data Scientist",
      AreasOfExpertise: ["Machine Learning", "Python", "Data Analysis"],
      rate: 60,
      interests: ["Traveling", "Cooking", "Data Science"],
      aboutMe: "I am passionate about data and analytics.",
      id: "2",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      dateOfBirth: "1988-03-10",
      yearsOfExperience: 6,
      currentJobTitle: "UX Designer",
      AreasOfExpertise: ["User Experience", "Usability", "Prototyping"],
      rate: 55,
      interests: ["Painting", "Photography", "Design"],
      aboutMe: "I create user-friendly and intuitive designs.",
      id: "3",
    },
    {
      name: "Bob Wilson",
      email: "bob.wilson@example.com",
      dateOfBirth: "1995-12-05",
      yearsOfExperience: 4,
      currentJobTitle: "Marketing Specialist",
      AreasOfExpertise: ["Digital Marketing", "SEO", "Content Strategy"],
      rate: 45,
      interests: ["Golf", "Travel", "Marketing"],
      aboutMe: "I help businesses grow through effective marketing strategies.",
      id: "4",
    },
    {
      name: "Eva Anderson",
      email: "eva.anderson@example.com",
      dateOfBirth: "1993-07-20",
      yearsOfExperience: 7,
      currentJobTitle: "Project Manager",
      AreasOfExpertise: ["Project Management", "Agile", "Team Leadership"],
      rate: 70,
      interests: ["Skiing", "Cooking", "Leadership"],
      aboutMe: "I ensure projects are delivered on time and within budget.",
      id: "5",
    },
    {
      name: "David Brown",
      email: "david.brown@example.com",
      dateOfBirth: "1980-01-30",
      yearsOfExperience: 12,
      currentJobTitle: "Senior Software Engineer",
      AreasOfExpertise: [
        "Java",
        "Backend Development",
        "Software Architecture",
      ],
      rate: 80,
      interests: ["Cycling", "Chess", "Coding", "Reading"],
      aboutMe: "I have a strong background in software development.",
      id: "6",
    },
    {
      name: "Grace Taylor",
      email: "grace.taylor@example.com",
      dateOfBirth: "1987-06-18",
      yearsOfExperience: 9,
      currentJobTitle: "Financial Analyst",
      AreasOfExpertise: ["Financial Modeling", "Investment Analysis", "Excel"],
      rate: 65,
      interests: ["Hiking", "Investing", "Finance"],
      aboutMe: "I analyze financial data to make informed decisions.",
      id: "7",
    },
    {
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      dateOfBirth: "1992-11-12",
      yearsOfExperience: 5,
      currentJobTitle: "Graphic Designer",
      AreasOfExpertise: [
        "Graphic Design",
        "Illustration",
        "Adobe Creative Suite",
        "Design",
      ],
      rate: 50,
      interests: ["Drawing", "Movies", "Design", "Cooking"],
      aboutMe: "I create visually stunning designs for various media.",
      id: "8",
    },
  ];

  const areasArray: string[] = [];
  mentors.forEach((mentor) => {
    mentor.AreasOfExpertise?.forEach((area) => {
      if (!areasArray.includes(area)) {
        areasArray.push(area);
      }
    });
  });

  const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    setDisplayedMentors((prev) => mentors);
  }, []);

  const filterMentors = (e: any): Mentor[] => {
    console.log(e.target.value);
    // This needs to return an array of only the mentors whose interesting match the value
    let filteredMentors: Mentor[] = [];

    mentors.forEach((mentor) => {
      if (mentor.AreasOfExpertise?.includes(e.target.value)) {
        filteredMentors.push(mentor);
      }
    });
    setDisplayedMentors(filteredMentors);
    return filteredMentors;
  };
  return (
    <div>
      <Heading textAlign={"center"} padding={8}>
        <Text>Mentors Page</Text>
      </Heading>
      <Box m={8}>
        <Select onChange={filterMentors}>
          {areasArray.map((area) => (
            <option value={area}>{area}</option>
          ))}
        </Select>
      </Box>{" "}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        m={{ base: 4, sm: "auto" }}
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
