import { Flex, Heading, InputGroup, Input, Button } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';
import { useForm, FieldValues, } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { joiResolver } from '@hookform/resolvers/joi';
import { MenteeSchema } from '../schemas/schemas';
import { useNavigate } from 'react-router-dom';
import FormRow from './FormRow';

interface FormContainerProps {
  children: ReactNode;
  heading: string;
  // onSubmit?: (data:object) => void;
  isForm: boolean;
}

const FormContainer: FC<FormContainerProps> = ({
  heading,
  children,
  // onSubmit,
  isForm,
}) => {
  const { register, watch, handleSubmit, control, formState:{ errors } } = useForm<FieldValues>({
    defaultValues: {
      bio: '',
      learningGoals: '',
      experience: '',
      jobTitle: '',
      interests: '',
    },
    mode:'onBlur',
    resolver: joiResolver(MenteeSchema)
  });

  const navigate = useNavigate();

  const onSubmit = (data:object) => {
    //POST request logic goes here
    console.log(watch('input'));
    console.log(watch('formRow'));
    console.log('data', data);
    // console.log('learningGoals', watch('learningGoals'));
    // console.log('bio', watch('bio'));
    // console.log('experience', watch('experience'));
    // console.log('jobTitle', watch('jobTitle'));
    // console.log('interests', watch('interests'));
    navigate('/');
  };
  console.log('errors', errors);
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
              <Input {...register('input', {required: true})}/>
              <FormRow 
                name={'formRow'}
                inputType={'input'}
                label={'formRow'}
                register={register}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
              />
              {/* // {children} */}
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
      <DevTool control={control} /> {/* set up the dev tool */}
    </Flex>
  );
};

export default FormContainer;
