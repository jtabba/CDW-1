import { useState } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import FormContainer from '../components/FormContainer';
import MenteeForm from '../components/MenteeForm';
import MentorForm from '../components/MentorForm';
import { MENTEE_FIELDS, MENTOR_FIELDS } from '../constants';

interface Persona {
  role: string;
}

const Onboarding = () => {
  let [persona, setPersona] = useState<Persona>({
    role: '',
  });

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
      {role === 'mentee' && <MenteeForm menteeFields={MENTEE_FIELDS}/>}
      {role === 'mentor' && <MentorForm mentorFields={MENTOR_FIELDS}/>}
    </Flex>
  );
};

export default Onboarding;
