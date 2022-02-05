import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  minWidth,
  isGoogleSignin,
  ...otherProps
}) => (
  <button
    style={{ minWidth: minWidth }}
    className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
