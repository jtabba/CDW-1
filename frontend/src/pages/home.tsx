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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		buttonLabel: "Lorem Ipsum",
		buttonUrl: "/loremipsum"
	};

  const featureProps = {
    headline: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonLabel: "Lorem Ipsum",
    buttonUrl: "/loremipsum",
  };

  const subFeaturesProps = [
    {
      headline: "Lorem Ipsum 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkLabel: "Lorem Ipsum 1 >",
      url: "/loremipsum1",
    },
    {
      headline: "Lorem Ipsum 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkLabel: "Lorem Ipsum 2 >",
      url: "/loremipsum2",
    },
    {
      headline: "Lorem Ipsum 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkLabel: "Lorem Ipsum 3 >",
      url: "/loremipsum3",
    },
  ];

  const metricProps = [
    {
      statNumber: "10k",
      statText: "Lorem ipsum dolor sit amet",
      id: "1",
    },
    {
      statNumber: "1000+",
      statText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      id: "2",
    },
    {
      statNumber: "10k+",
      statText: "Lorem ipsum dolor",
      id: "3",
    },
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
