import { useState, ChangeEvent, FC } from 'react';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
import { Flex, InputGroup, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Field, MentorInfo } from '../types';

const MentorForm: FC<{ mentorFields: Field[] }> = ({ mentorFields }) => {
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setMentorInfo({ ...mentorInfo, [e.target.name]: e.target.value});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //POST request logic goes here
    e.preventDefault();
    navigate('/home');
  };

  return (
    <FormContainer heading='Mentor'>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection='column' gap={10}>
          <InputGroup flexDirection='column' gap={10}>
            {mentorFields.map((field: Field, index: number) => (
              <FormRow
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
