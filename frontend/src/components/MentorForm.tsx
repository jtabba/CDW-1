import { useState, ChangeEvent, FC } from 'react';
import FormContainer from './FormContainer';
import FormRow from './FormRow';
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

  const onSubmit = () => {
    //POST request logic goes here
    console.log('bio', watch('bio'));
    console.log('experience', watch('experience'));
    console.log('jobTitle', watch('jobTitle'));
    console.log('interests', watch('interests'));
    console.log('hourlyRate', watch('hourlyRate'));
    console.log('expertise', watch('expertise'));

    navigate('/');
  };

  const { register } = useForm();

  return (
    <FormContainer isForm={true} heading='Mentor' onSubmit={onSubmit}>
            {mentorFields.map((field: Field) => (
              <FormRow
                register={register}
                key={field.name}
                inputType={field.inputType}
                label={field.label}
                name={field.name}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                value={mentorInfo[field.name as keyof MentorInfo]}
                onChange={handleChange}
              />
            ))}
    </FormContainer>
  );
};

export default MentorForm;
