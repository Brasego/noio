import React from "react";

import "./text-area-input.scss";

const TextAreaInput = ({
  className,
  onChange,
  label,
  name,
  type,
  ...otherProps
}) => (
  /*onChange: function to execute when the input is changed (fnct)
    label: label to display (string)
    name: name of the input (string)
    type: type of input (string)
    otherProps:
  */
  <div className="group">
    <textarea
      className={`text-area-input ${className}`}
      onChange={onChange}
      name={name}
      autoComplete={label}
    />
    {label ? (
      <label
        className={`${otherProps.value ? "shrink" : ""} text-area-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default TextAreaInput;
