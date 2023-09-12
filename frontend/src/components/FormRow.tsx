import { Flex, Input, FormLabel, Textarea, StyleProps, Select } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import FormOption from './FormOption';

interface FormRowProps {
  inputType: string ;
  label: string;
  flexDirection: StyleProps['flexDirection'];
  fontSize: StyleProps['fontSize'];
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
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

  return (
    <Flex flexDirection={flexDirection}>
      <FormLabel fontSize={fontSize}>{label}</FormLabel>
      {inputType === 'textArea' ? (
        <Textarea name={name} value={value} onChange={onChange} />
      ) : inputType === 'input' ? (
        <Input name={name} value={value} onChange={onChange}></Input>
      ): (<Select placeholder="Select one option" name={name} onChange={onChange}><FormOption name={name}/></Select>)}
    </Flex>
  );
};

export default FormRow;
