import { Flex, Heading, Box } from '@chakra-ui/react';
import VerticalCard from './VerticalCard';
import { FC } from 'react';
import { HOW_HEADLINE } from '../pages/home/constants';

interface SubFeatureProps {
  howHeading: string;
  howContent: string;
  howLinkLabel: string;
  howUrl: string;
}

interface Props {
  subFeatureProps: SubFeatureProps[]; 
}

const SubFeatureSection: FC<Props> = ({ subFeatureProps }) => {

  return (
    <Flex bgColor="green" pb={16} height="100%">
      <Box maxWidth={{ base: '90%', md: '70%' }} ml="auto" mr="auto" pt="70px">
      <Flex 
        flexDirection='column'> 
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>{HOW_HEADLINE}</Heading>
  
          {subFeatureProps.map((prop, index) => (
            <VerticalCard
              howHeading={prop.howHeading}
              howContent={prop.howContent}
              howLinkLabel={prop.howLinkLabel}
              howUrl={prop.howUrl}
              key={index}
            />
          ))
          }
      </Flex>
      </Box>
    </Flex>
  );
};

export default SubFeatureSection;
