import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  className,
  onChange,
  label,
  name,
  type,
  ...otherProps
}) => (
  /*
    onChange: function to execute when the input is changed (fnct)
    label: label to display (string)
    name: name of the input (string)
    type: type of input (string)
    otherProps:
  */
  <div className={`group ${className}`}>
    <input
      className={`form-input`}
      onChange={onChange}
      name={name}
      type={type}
      autoComplete={label}
    />
    {label ? (
      <label className={`${otherProps.value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
