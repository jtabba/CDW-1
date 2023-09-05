import { useState, ChangeEvent, FC } from 'react';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
import { Flex, InputGroup, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Field, MenteeInfo } from '../types';
import { useForm } from 'react-hook-form';


const MenteeForm: FC<{ menteeFields: Field[] }> = ({ menteeFields }) => {
  const {watch} = useForm();
  
  const navigate = useNavigate();

  let [menteeInfo, setMenteeInfo] = useState<MenteeInfo>({
    role: 'mentee',
    bio: '',
    learningGoals: '',
    experience: '',
    jobTitle: '',
    interests: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMenteeInfo({ ...menteeInfo, [e.target.name]: e.target.value });

  const onSubmit = (/*e: React.FormEvent<HTMLFormElement>*/) => {
    //POST request logic goes here
    // e.preventDefault();
    console.log('WATCHOBJ',watch('test'));
    navigate('/home');
  };

  const { register, handleSubmit } = useForm();
  return (
    <FormContainer heading='Mentee'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection='column' gap={10}>
          <InputGroup flexDirection='column' gap={10}>
            {menteeFields.map((field: Field, index: number) => (
              <FormRow 
                register={register}
                key={index}
                inputType={field.inputType}
                label={field.label}
                name={field.name}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                value={menteeInfo[field.name as keyof MenteeInfo]}
                onChange={handleChange}
              />
            ))}
          </InputGroup>
        </Flex>
        <br />
        <Button size='lg' type='submit'>
          Submit
        </Button>
      </form>
    </FormContainer>
  );
};

export default MenteeForm;
