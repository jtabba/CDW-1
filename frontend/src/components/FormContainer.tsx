import { Flex, Heading, InputGroup, Button } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';
import { useForm } from 'react-hook-form';

interface FormContainerProps {
  children: ReactNode;
  heading: string;
  onSubmit?: () => void;
  isForm: boolean;
}

const FormContainer: FC<FormContainerProps> = ({
  heading,
  children,
  onSubmit,
  isForm,
}) => {
  const { handleSubmit } = useForm();
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
      {isForm ? (
        <form onSubmit={handleSubmit(onSubmit!)}>
          <Flex flexDirection='column' gap={10}>
            <InputGroup flexDirection='column' gap={10}>
              {children}
            </InputGroup>
          </Flex>
          <br />
          <Button size='lg' type='submit'>
            Submit
          </Button>
        </form>
      ) : (
        children
      )}
    </Flex>
  );
};

export default FormContainer;
