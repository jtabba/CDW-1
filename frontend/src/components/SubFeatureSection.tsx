import { Flex } from '@chakra-ui/react';
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
    <Flex 
      flexDirection='row' 
      maxWidth='65%'
      columnGap={8}
    >
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
  );
};

export default SubFeatureSection;
