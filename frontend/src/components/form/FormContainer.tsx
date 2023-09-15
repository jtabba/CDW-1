import { Flex } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = ({
  children,
}) => {
  return (
    <Flex
      border='1px'
      borderRadius='10'
      borderColor='lightgray'
      flexDirection='column'
      rowGap={10}
      textAlign='center'
      p={5}>
      {children}
      {/* <DevTool control={control} /> */}
    </Flex>
  );
};

export default FormContainer;
