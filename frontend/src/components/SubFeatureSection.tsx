import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import VerticalCard from './VerticalCard';
import { FC } from 'react';

interface SubFeatureProps {
  headline: string;
  content: string;
  linkLabel: string;
  url: string;
}

interface Props {
  subFeatureProps: SubFeatureProps[]; 
}

const SubFeatureSection: FC<Props> = ({ subFeatureProps }) => {

  return (
    <Box maxWidth={{ base: '90%', md: '90%' }}>
    <Flex 
      flexDirection='column' 
      // maxWidth='90%'
      // columnGap={8}
    >
      {/* <Text fontSize={{ base: '2xl', md: '4xl' }} mb={4}> */}
      <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>How MentorShip Works</Heading>
      {/* </Text> */}
        {subFeatureProps.map((prop, index) => (
          <VerticalCard
            headline={prop.headline}
            content={prop.content}
            linkLabel={prop.linkLabel}
            url={prop.url}
            key={index}
          />
        ))
        }
    </Flex>
    </Box>
  );
};

export default SubFeatureSection;
