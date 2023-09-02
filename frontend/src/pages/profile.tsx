import { Flex, Avatar, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";


const Profile: React.FC = () => {

	const { user, isAuthenticated } = useAuth0();

	if (!isAuthenticated) {
		return null;
	}


export default function Profile() {

	return (
		<Flex justify="center" w="80%" ml="auto" mr="auto" direction="column">
			<Flex
				mt={20}
				mb={6}
				wrap="wrap"
				justify="flex-start"
				maxWidth="900px"
			>
				<Avatar
					mt={7}
					mr={10}
					size="2xl"
					name={user?.name}
					src={user?.picture}
				></Avatar>
				<Flex direction="column" wrap="wrap">
					<Text fontSize="4xl" mt={6}>
						{user?.name}
					</Text>
					<Text fontSize="l" mt={""}>
						Location: {user?.location || "Unknown"}
					</Text>
					<Text fontSize="m" mt={2}>
						Email: {user?.email}
					</Text>
					<Text fontSize="m" mt={2}>
						Username: {user?.nickname}

					</Text>
				</Flex>
			</Flex>

			<Flex
				mb={6}
				maxWidth="900px"
				justify="flex-start"
				direction="column"
			>
				<Text fontSize="2xl" borderBottom="2px" mb={2}>
					About me
				</Text>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati voluptatem error dolores nemo pariatur quae
					tempora est adipisci reprehenderit nulla at impedit
					veritatis debitis molestiae reiciendis, consectetur
					blanditiis incidunt! Eum?
				</p>
			</Flex>

			<Flex
				mb={6}
				maxWidth="900px"
				justify="flex-start"
				direction="column"
			>
				<Text fontSize="2xl" borderBottom="2px" mb={2}>
					My skills
				</Text>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						Assumenda, quia temporibus eveniet a libero incidunt
						suscipit
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						Quidem, ipsam illum quis sed voluptatum quae eum fugit
						earum
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						Quidem, ipsam illum quis sed voluptatum quae eum fugit
						earum
					</ListItem>
				</List>
			</Flex>

			<Flex
				mb={6}
				maxWidth="900px"
				justify="flex-start"
				direction="column"
			>
				<Text fontSize="2xl" borderBottom="2px" mb={2}>
					Experience
				</Text>
				<Flex justify="space-between">
					<Text fontSize="xl">Job Title</Text>
					<Text fontSize="xl">Location</Text>
				</Flex>
				<Flex justify="space-between">
					<Text fontSize="l">Company Name</Text>
					<Text fontSize="l">Duration</Text>
				</Flex>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Deserunt ipsam, ex, voluptas veniam eveniet eligendi
					exercitationem ea omnis maiores ad amet alias voluptatem
					dolore sint optio odit esse voluptate tempore!
				</p>
			</Flex>

			<Flex
				mb={6}
				maxWidth="900px"
				justify="flex-start"
				direction="column"
			>
				<Text fontSize="2xl" borderBottom="2px" mb={2}>
					My goals
				</Text>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={ArrowForwardIcon} color="green.500" />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
					<ListItem>
						<ListIcon as={ArrowForwardIcon} color="green.500" />
						Assumenda, quia temporibus eveniet a libero incidunt
						suscipit
					</ListItem>
					<ListItem>
						<ListIcon as={ArrowForwardIcon} color="green.500" />
						Quidem, ipsam illum quis sed voluptatum quae eum fugit
						earum
					</ListItem>
					<ListItem>
						<ListIcon as={ArrowForwardIcon} color="green.500" />
						Quidem, ipsam illum quis sed voluptatum quae eum fugit
						earum
					</ListItem>
				</List>
			</Flex>
		</Flex>
	);

};

export default Profile;
