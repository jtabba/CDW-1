import { useState, ChangeEvent, FC } from 'react';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
import { useNavigate } from 'react-router-dom';
import { Field, MenteeInfo } from '../types';
import { useForm } from 'react-hook-form';

const MenteeForm: FC<{ menteeFields: Field[] }> = ({ menteeFields }) => {
  const { register, watch } = useForm();
  
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

  const onSubmit = () => {
    //POST request logic goes here
    console.log('learningGoals',watch('learningGoals'));
    console.log('bio', watch('bio'));
    console.log('experience', watch('experience'));
    console.log('jobTitle', watch('jobTitle'));
    console.log('interests', watch('interests'));
    navigate('/');
  };
  
  return (
    <FormContainer isForm={true} heading='Mentee' onSubmit={onSubmit}>
            {menteeFields.map((field: Field) => (
              <FormRow 
                register={register}
                key={field.name}
                inputType={field.inputType}
                label={field.label}
                name={field.name}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                value={menteeInfo[field.name as keyof MenteeInfo]}
                onChange={handleChange}
              />
            ))}
    </FormContainer>
  );
};

export default MenteeForm;
