import { Flex, Input, FormLabel, Textarea, StyleProps } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import { useForm, FieldValues, UseFormRegister } from 'react-hook-form';



interface FormRowProps {
  register: UseFormRegister<FieldValues>;
  inputType: string;
  label: string;
  flexDirection: StyleProps['flexDirection'];
  fontSize: StyleProps['fontSize'];
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

//if I can get this component to work, then I can map form rows in the form element of the onboarding page
const FormRow: FC<FormRowProps> = ({
  inputType,
  label,
  flexDirection,
  fontSize,
  name,
  value,
  onChange,
}) => {
const { register, handleSubmit } =  useForm();

  return (
    <Flex flexDirection={flexDirection}>
      <FormLabel fontSize={fontSize}>{label}</FormLabel>
      {inputType === 'textArea' ? (
        <Textarea name={name} value={value} onChange={onChange} />
      ) : (
        <Input {...register('test')} name={name} value={value} onChange={onChange}></Input>
      )}
    </Flex>
  );
};

export default FormRow;
