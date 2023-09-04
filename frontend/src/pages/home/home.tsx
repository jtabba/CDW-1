import { Flex, GridItem } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import SubFeatureSection from "../../components/SubFeatureSection";
import Mission from "../../components/Mission";
import { subFeaturesProps, heroProps, featureProps, missionSectionProps } from "./constants";

const Home = () => {

	return (
		<>
			<GridItem className="main" paddingBottom="48px">
				<Flex maxWidth="60%" margin="auto">
					<Hero {...heroProps} />
				</Flex>
				<Flex flexDirection="column" alignItems="center" rowGap={20}>
					<FeatureSection {...featureProps} />
					<Mission {...missionSectionProps}/>
					<SubFeatureSection subFeatureProps={subFeaturesProps} />

				</Flex>
			</GridItem>
			<GridItem className="footer">
				<Footer />
			</GridItem>
		</>
	);
};

export default Home;
