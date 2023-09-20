import { Flex, Input, FormLabel, Textarea, StyleProps, Select } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import FormOption from './FormOption';
import { Field } from '../types';

interface FormRowProps {
  inputType: string ;
  label: string;
  flexDirection: StyleProps['flexDirection'];
  fontSize: StyleProps['fontSize'];
  name: string;
  value: string;
  array?: Field[];
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
  array,
  onChange,
}) => {

  const getInputType = (inputType: string) => {
    switch(inputType){
      case 'textArea':
        return <Textarea name={name} value={value} onChange={onChange} />;
      case 'input':
        return <Input name={name} value={value} onChange={onChange}></Input>;
      case 'other':
        return <Select placeholder="Select one option" value={value} name={name} onChange={onChange}>
          <FormOption name={name} array={array}/>
          </Select>;
      default:
        return null;
    }
  }
  return (
    <Flex flexDirection={flexDirection}>
      <FormLabel fontSize={fontSize}>{label}</FormLabel>
        {getInputType(inputType)}
    </Flex>
  );
};

export default FormRow;
