import { Field } from '../types';
import { FC } from 'react';

interface Option {
  name: string;
  array?: Field[];
}

const FormOption: FC<Option> = ({name, array}) => {

  let arr = array && array.find(a => a.name === name);
  let options = arr && arr.options;

  return (
    <>
      {options && options.map(a => a && <option value={a}>{a}</option>)}
    </>
  )
}

export default FormOption;