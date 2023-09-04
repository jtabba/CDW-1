import { Flex, Heading, Box } from '@chakra-ui/react';
import VerticalCard from './VerticalCard';
import { FC } from 'react';

interface SubFeatureProps {
  HOW_IT_WORKS_HEADING: string;
  HOW_IT_WORKS_CONTENT: string;
  HOW_IT_WORKS_LINK_LABEL: string;
  HOW_IT_WORKS_URL: string;
}

interface Props {
  subFeatureProps: SubFeatureProps[]; 
}

const SubFeatureSection: FC<Props> = ({ subFeatureProps }) => {

  return (
    <Box maxWidth={{ base: '90%', md: '90%' }}>
    <Flex 
      flexDirection='column'> 
      <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>How MentorShip Works</Heading>
 
        {subFeatureProps.map((prop, index) => (
          <VerticalCard
            HOW_IT_WORKS_HEADING={prop.HOW_IT_WORKS_HEADING}
            HOW_IT_WORKS_CONTENT={prop.HOW_IT_WORKS_CONTENT}
            HOW_IT_WORKS_LINK_LABEL={prop.HOW_IT_WORKS_LINK_LABEL}
            HOW_IT_WORKS_URL={prop.HOW_IT_WORKS_URL}
            key={index}
          />
        ))
        }
    </Flex>
    </Box>
  );
};

export default SubFeatureSection;
