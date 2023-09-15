import { FC } from 'react';
import FormContainer from './FormContainer';
import FormBody from './FormBody';
import { Heading } from '@chakra-ui/react';
import { MENTEE_DEFAULT_VALUES, MENTEE_FIELDS } from '../../constants';

const MenteeForm: FC<{}> = () => {
  return (
    <FormContainer>
      <Heading fontSize='clamp(1.5rem, -0.875rem + 8.333vw, 3rem)'>
        Mentee
      </Heading>
      <FormBody fields={MENTEE_FIELDS} defaultValues={MENTEE_DEFAULT_VALUES}/>
    </FormContainer>
  );
};

export default MenteeForm;