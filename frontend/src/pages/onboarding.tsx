import { useState } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import FormContainer from '../components/FormContainer';
import MenteeForm from '../components/MenteeForm';
import MentorForm from '../components/MentorForm';

interface Persona {
  role: string;
}

const Onboarding = () => {
  let [persona, setPersona] = useState<Persona>({
    role: '',
  });

  const menteeFields = [
    {
      inputType: 'textArea',
      label: 'Tell us a little about yourself!',
      name: 'bio',
    },
    {
      inputType: 'textArea',
      label: 'What are you looking to learn?',
      name: 'learningGoals',
    },
    {
      inputType: 'input',
      label: 'How many years of experience do you have as a software engineer?',
      name: 'experience',
    },
    {
      inputType: 'input',
      label: 'What is your current job title?',
      name: 'jobTitle',
    },
    {
      inputType: 'textArea',
      label: 'What are your interests?',
      name: 'interests',
    },
  ];

  const mentorFields = [
    {
      inputType: 'textArea',
      label: 'Tell us a little about yourself!',
      name: 'bio',
    },
    {
      inputType: 'textArea',
      label: 'What are your areas of expertise?',
      name: 'expertise',
    },
    {
      inputType: 'input',
      label: 'How many years of experience do you have as a software engineer?',
      name: 'experience',
    },
    {
      inputType: 'input',
      label: 'What is your current job title?',
      name: 'jobTitle',
    },
    {
      inputType: 'textArea',
      label: 'What are your interests?',
      name: 'interests',
    },
    {
      inputType: 'textArea',
      label: 'What is your hourly rate? Leave as 0 for free mentoring.',
      name: 'hourlyRate',
    },
  ];

  const { role } = persona;

  return (
    <Flex
      maxWidth={{ base: '100%', sm: '90%', md: '80%', lg: '60%', xl: '40%' }}
      rowGap={5}
      flexDirection='column'
      margin='auto'
      marginTop={[30, 50, 100]}>
      <FormContainer heading='Are you joining MentorShip as a mentor or mentee?'>
        <ButtonGroup size='lg' flexWrap='wrap' justifyContent='center'>
          <Button onClick={() => setPersona({ role: 'mentor' })}>Mentor</Button>
          <Button onClick={() => setPersona({ role: 'mentee' })}>Mentee</Button>
        </ButtonGroup>
      </FormContainer>
      {role === 'mentee' && <MenteeForm menteeFields={menteeFields}/>}
      {role === 'mentor' && <MentorForm mentorFields={mentorFields}/>}
    </Flex>
  );
};

export default Onboarding;
