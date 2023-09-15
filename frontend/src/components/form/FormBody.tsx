import { FC } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { MenteeSchema } from '../../schemas/schemas';
import { useNavigate } from 'react-router-dom';
import { Flex, InputGroup, Button } from '@chakra-ui/react';
import FormRow from './FormRow';
import { useForm, FieldValues } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Field } from '../../types';

const FormBody: FC<{ fields: Field[], defaultValues: FieldValues}> = ({ fields, defaultValues }) => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: defaultValues,
    mode: 'onBlur',
    resolver: joiResolver(MenteeSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: object) => {
    //POST request logic goes here
    console.log(watch('bio'));
    console.log(watch('experience'));
    console.log(watch('learningGoals'));
    console.log(watch('jobTitle'));
    console.log(watch('interests'));
    console.log(watch('hourlyRate'));
    console.log(watch('expertise'));
    console.log('errors', errors);
    console.log('data', data);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit!)}>
        <Flex flexDirection='column' gap={10}>
          <InputGroup flexDirection='column' gap={10}>
            {fields.map((field: Field) => (
              <FormRow
                // errors={errors}
                register={register}
                key={field.name}
                inputType={field.inputType}
                label={field.label}
                name={field.name}
                flexDirection='column'
                fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
              />
            ))}
          </InputGroup>
        </Flex>
        <br />
        <Button size='lg' type='submit'>
          Submit
        </Button>
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};

export default FormBody;