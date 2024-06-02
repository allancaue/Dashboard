import React from 'react';
import InputField from './InputField';

const createInputField = (type, id, placeholder, label, onChange) => (
    <InputField type={type} id={id} placeholder={placeholder} label={label} onChange={onChange} />
);

export default createInputField;
