import { Flex, Heading, Box } from '@chakra-ui/react';
import VerticalCard from './VerticalCard';
import { FC } from 'react';
import { HOW_HEADLINE } from '../pages/home/constants';
import { themeBlue, themeDarkBlue, themeLightBlue, themeGrey, themeLightGrey } from "../theme/theme";

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
    <Flex bgGradient="linear(to-t,#47007A, #0060DF)" pb={16} height="100%" w="100%">
      <Box maxWidth={{ base: '90%', md: '70%', xl: '55%' }} ml="auto" mr="auto" pt="70px">
      <Flex 
        flexDirection='column'> 
        <Heading color="white" fontSize={{ base: '2xl', md: '4xl' }} mb={8}>{HOW_HEADLINE}</Heading>
  
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
