import { Flex, GridItem } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import SubFeatureSection from "../components/SubFeatureSection";
import MetricSection from "../components/MetricSection";

const Home = () => {
	//Props stored here until we start implementing an appropriate store
	const heroProps = {
		headline: "We ship coders.",
		content:
			"Embark on a learning voyage unlike any other in the world of software development.",
		buttonLabel: "Get Started",
		buttonUrl: "/loremipsum"
	};

	const featureProps = {
		headline: "About Us",
		content:
			"Introducing MentorShip, where experienced senior developers and engineers guide aspiring developers, all while navigating the seas of real-world projects.Step into our maritime-themed platform where real tech projects become 'Ships,' assignments become thrilling 'Voyages,' and developers form close-knit 'Crews' of junior developers to conquer coding challenges together.",
		buttonLabel: "Learn more...",
		buttonUrl: "/loremipsum"
	};

	const subFeaturesProps = [
		{
			headline: "Tutorial Expeditions",
			content:
				"Every voyage begins with a tutorial expedition. Prove your skills as a 'Captain' or showcase your dedication as a 'Cadet' by completing these starter assignments. Get acquainted with our platform and learn the ropes of MentorShip.",
			linkLabel: "Learn more... >",
			url: "/loremipsum1"
		},
		{
			headline: "Craft Your Ship",
			content:
				"As a 'Captain,' take charge by creating a 'Ship' and crafting your unique 'Mission.' Design the challenges, set the deadlines, and guide your 'Crew' through uncharted coding waters towards your goal.",
			linkLabel: "Learn more... >",
			url: "/loremipsum2"
		},
		{
			headline: "Assemble or Join a Crew",
			content:
				"Captains can browse a pool of motivated 'Cadets' who have completed the tutorials. Choose your crew wisely and embark on your voyage. On the flip side, 'Cadets' can explore 'Ships' and join projects that resonate with their aspirations.",
			linkLabel: "Learn more... >",
			url: "/loremipsum3"
		},		
		{
			headline: "Set Sail Together",
			content:
				"The voyage begins! Collaborate with your 'Crew' to tackle tasks and challenges that mimic the real software development world. Peer code reviews, pull requests, and teamwork become second nature as you navigate your 'Mission.'",
			linkLabel: "Learn more...>",
			url: "/loremipsum3"
		},
		{
			headline: "Advancement and Rank",
			content:
				"As you navigate the development seas, gain experience and rise through the ranks. Both 'Captains' and 'Cadets' can unlock new features, making the journey even more rewarding.",
			linkLabel: "Learn more... >",
			url: "/loremipsum3"
		},
		{
			headline: "Community and Support",
			content:
				"MentorShip is more than a platform—it's a community of passionate developers, united by a love for coding and learning. Forge lasting connections, share insights, and contribute to the growth of fellow developers.",
			linkLabel: "Learn more... >",
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
