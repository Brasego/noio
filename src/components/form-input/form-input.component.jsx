import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ onChange, label, name, type, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={onChange}
      name={name}
      type={type}
      autoComplete={label}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
