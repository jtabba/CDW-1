import { useState, ChangeEvent, FC } from 'react';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
import { Flex, InputGroup, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Field, MentorInfo } from '../types';
import { useForm } from 'react-hook-form';

const MentorForm: FC<{ mentorFields: Field[] }> = ({ mentorFields }) => {
  const { watch } = useForm();
  const navigate = useNavigate();

  let [mentorInfo, setMentorInfo] = useState<MentorInfo>({
    role: 'mentor',
    bio: '',
    expertise: '',
    experience: '',
    jobTitle: '',
    interests: '',
    hourlyRate: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMentorInfo({ ...mentorInfo, [e.target.name]: e.target.value });

  const onSubmit = (  /*e: React.FormEvent<HTMLFormElement>*/) => {
    //POST request logic goes here
    // e.preventDefault();
    console.log('WATCHOBJ-MENTOR', watch('test'));
    navigate('/');
  };

  const { register, handleSubmit } = useForm();

  return (
    <FormContainer heading='Mentor'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection='column' gap={10}>
          <InputGroup flexDirection='column' gap={10}>
            {mentorFields.map((field: Field, index: number) => (
              <FormRow
                register={register}
                key={index}
                inputType={field.inputType}
                label={field.label}
                name={field.name}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                value={mentorInfo[field.name as keyof MentorInfo]}
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

export default MentorForm;
