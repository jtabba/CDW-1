import { Flex, Heading } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

interface FormContainerProps {
  children: ReactNode;
  heading: string;
}

const FormContainer: FC<FormContainerProps> = ({ heading, children }) => {
  return (
    <Flex
      border='1px'
      borderRadius='10'
      borderColor='lightgray'
      flexDirection='column'
      rowGap={10}
      textAlign='center'
      p={5}>
      <Heading fontSize='clamp(1.5rem, -0.875rem + 8.333vw, 3rem)'>
        {heading}
      </Heading>
      {children}
    </Flex>
  );
};

export default FormContainer;
