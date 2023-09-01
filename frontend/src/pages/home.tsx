import { Flex, GridItem } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import SubFeatureSection from "../components/SubFeatureSection";
import MetricSection from "../components/MetricSection";


interface SubFeatureProps {
	headline: string;
	content: string | JSX.Element; // Updated type to allow both string and JSX.Element
	linkLabel: string;
	url: string;
}

const Home = () => {
	//Props stored here until we start implementing an appropriate store
	const heroProps = {
		headline: "Set Sail for Coding Excellence",
		content:
			"Embark on a transformative journey in software development with MentorShip, where experienced captains mentor aspiring cadets through real-world projects, turning learning into an exhilarating voyage.",
		buttonLabel: "Get Started",
		buttonUrl: "/loremipsum"
	};

	const featureProps = {
		headline: "Find a mentor and get ready to sail",
		content:
			"Whether you're navigating a career transition, striving to elevate your developer prowess, or seeking enhanced efficiency in your programming journey, we're your catalyst for success. Our platform serves as the bridge, connecting you with seasoned developers and accomplished engineers. Together, we unlock the power of mentorship and pave the way for more effective, empowered learning experiences.",
		buttonLabel: "Our Mentors",
		buttonUrl: "/loremipsum"
	};

	const subFeaturesProps = [
		{
			headline: "Mentorship that Guides, Learning that Thrives",
			content:
				"Programming can seem overwhelming, given the abundance of learning materials, and finding a reliable mentor isn't always straightforward. At MentorShip, our goal is to make learning and improvement accessible to all. We achieve this by matching mentees with mentors who suit their specific needs. Our aim is to empower individuals from diverse locations, helping them enhance their programming skills and confidently embark on their professional journey.",
			linkLabel: "Lorem Ipsum 1 >",
			url: "/loremipsum1"
		},
		{
			headline: "How MentorShip Works:",
			content:"trying to set this as a jsx element",
			linkLabel: "Lorem Ipsum 2 >",
			url: "/loremipsum2"
		},
		{
			headline: "How MentorShip Works:",
			content:
			(
				<ol>
				  <li>Sign up or Log In.</li>
				  <li>Complete your profile.</li>
				  <li>Choose your role: 
					<ul>
						<li>Captains are here to share their knowledge & skills, leading their crew to glory.</li>
						<li>Crew members are looking to learn and gain experience by helping their Ship complete its assignments.</li>
					</ul>
				  </li>
				  <li>Find a Ship recruiting for your role.</li>
				  <li>Find a Ship looking for your role.</li>
				</ol>
			  ),			
			linkLabel: "Lorem Ipsum 3 >",
			url: "/loremipsum3"
		}
	];

	const metricProps = [
		{
			statNumber: "10k",
			statText: "Lorem ipsum dolor sit amet",
			id: "1"
		},
		{
			statNumber: "1000+",
			statText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			id: "2"
		},
		{
			statNumber: "10k+",
			statText: "Lorem ipsum dolor",
			id: "3"
		}
	];

	return (
		<>
			<GridItem className="main" paddingBottom="48px">
				<Flex maxWidth="60%" margin="auto">
					<Hero {...heroProps} />
				</Flex>
				<Flex flexDirection="column" alignItems="center" rowGap={20}>
					<FeatureSection {...featureProps} />
					<SubFeatureSection subFeatureProps={subFeaturesProps} />
					<MetricSection metricsProps={metricProps} />
				</Flex>
			</GridItem>
			<GridItem className="footer">
				<Footer />
			</GridItem>
		</>
	);
};

export default Home;
