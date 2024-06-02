import React from 'react';

const InputField = ({ type, id, placeholder, label, onChange }) => (
    <div className="form-floating mb-3">
        <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
    </div>
);

export default InputField;
