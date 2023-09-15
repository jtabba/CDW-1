import { FC } from 'react';
import FormContainer from './FormContainer';
import FormBody from './FormBody';
import { Heading } from '@chakra-ui/react';
import { MENTOR_DEFAULT_VALUES, MENTOR_FIELDS } from '../../constants';

const MentorForm: FC<{}> = () => {
  return (
    <FormContainer>
      <Heading fontSize='clamp(1.5rem, -0.875rem + 8.333vw, 3rem)'>
        Mentee
      </Heading>
      <FormBody fields={MENTOR_FIELDS} defaultValues={MENTOR_DEFAULT_VALUES}/>
    </FormContainer>
  );
};

export default MentorForm;
