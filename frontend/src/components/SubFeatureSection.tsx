import { Flex } from '@chakra-ui/react';
import VerticalCard from './VerticalCard';

interface SubFeatureProps {
  headline: string;
  content: string;
  linkLabel: string;
  url: string;
}

interface Props {
  subFeatureProps: SubFeatureProps[]; 
}

const SubFeatureSection = ({ subFeatureProps }: Props): JSX.Element => {
  const verticalCards: JSX.Element[] = subFeatureProps.map((prop, index) => (
    <VerticalCard
      headline={prop.headline}
      content={prop.content}
      linkLabel={prop.linkLabel}
      url={prop.url}
      key={index}
    />
  ));

  return (
    <Flex 
      flexDirection='row' 
      maxWidth='65%'
      columnGap={8}
    >
        {verticalCards}
    </Flex>
  );
};

export default SubFeatureSection;
