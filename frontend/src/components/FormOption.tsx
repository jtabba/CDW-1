import { FC } from 'react';
import { OptionList } from '../types';
import { LISTS } from '../constants';

const FormOption: FC<OptionList> = ({name}) => {

    return (
        <>
            {
        LISTS
        .filter(list => list.name === name) 
        .map((list, idx) => 
            <option key={idx} value={list.values}>{list.values}</option>)
        }
        </>
)
}

export default FormOption;