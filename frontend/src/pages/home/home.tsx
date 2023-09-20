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
      <GridItem className="main" width="100%">
        <Flex maxWidth="100%" margin={"auto"}
        >
          <Hero {...HERO_PROPS} />
        </Flex>
        <Flex flexDirection="column" alignItems="center" rowGap={20}>
          <FeatureSection {...FEATURE_PROPS} />
          <Mission {...MISSION_PROPS} />
          <SubFeatureSection subFeatureProps={SUB_FEATURES_PROPS} />
        </Flex>
      </GridItem>
    </>
  );
};

export default Home;
