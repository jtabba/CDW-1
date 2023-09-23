import { Flex, GridItem } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import SubFeatureSection from "../../components/SubFeatureSection";
import Mission from "../../components/Mission";
import {
  HERO_PROPS,
  FEATURE_PROPS,
  MISSION_PROPS,
  SUB_FEATURES_PROPS,
} from "./constants";

const Home = () => {
  return (
    <>
      <GridItem width="100%" bg="red" className="main" height="100%">
        <Flex maxWidth="100%" margin="auto">
          <Hero {...HERO_PROPS} />
        </Flex>
        <Flex flexDirection="column" alignItems="center" rowGap={0}>
          <FeatureSection {...FEATURE_PROPS} />
          <Mission {...MISSION_PROPS} />
          <SubFeatureSection subFeatureProps={SUB_FEATURES_PROPS} />
        </Flex>
      </GridItem>
    </>
  );
};

export default Home;
