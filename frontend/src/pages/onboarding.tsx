import { useState } from 'react';
import { Button, Heading, ButtonGroup, Flex } from '@chakra-ui/react';
import FormContainer from '../components/form/FormContainer';
import MenteeForm from '../components/form/MenteeForm';
import MentorForm from '../components/form/MentorForm';

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
      <FormContainer>
        <Heading>Are you joining MentorShip as a mentor or mentee?'</Heading>
        <ButtonGroup size='lg' flexWrap='wrap' justifyContent='center'>
          <Button onClick={() => setPersona({ role: 'mentor' })}>Mentor</Button>
          <Button onClick={() => setPersona({ role: 'mentee' })}>Mentee</Button>
        </ButtonGroup>
      </FormContainer>
      {/* I tink I can bring down the field constants to mentee and metor form components */}
      {role === 'mentee' && <MenteeForm/>}
      {role === 'mentor' && <MentorForm/>}
    </Flex>
  );
};

export default Onboarding;
