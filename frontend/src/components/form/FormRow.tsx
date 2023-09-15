import { Flex, Input, FormLabel, Textarea, StyleProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface FormRowProps {
  // errors: FieldErrors<FieldErrors>
  register: UseFormRegister<FieldValues>;
  inputType: string;
  label: string;
  flexDirection: StyleProps['flexDirection'];
  fontSize: StyleProps['fontSize'];
  name: string;
}

//if I can get this component to work, then I can map form rows in the form element of the onboarding page
const FormRow: FC<FormRowProps> = ({
  inputType,
  label,
  flexDirection,
  fontSize,
  name,
  register,
  // errors
}) => {
  return (
    <Flex flexDirection={flexDirection}>
      <FormLabel fontSize={fontSize}>{label}</FormLabel>
      {inputType === 'textArea' ? (
        <Textarea
        {...register(name)}
        />
      ) : (
        <Input
          {...register(name)}
        />
      )}
    </Flex>
  );
};

export default FormRow;
