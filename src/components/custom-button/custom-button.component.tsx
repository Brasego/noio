import React from "react";

import "./custom-button.styles.scss";
interface CustomButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    minWidth?: string;
    isGoogleSignin?: boolean;
}

const CustomButton: React.FC<CustomButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
    children,
    minWidth,
    type = 'button',
    isGoogleSignin,
    ...otherProps
}) => (
    <button
        type={type}
        style={{ minWidth: minWidth }}
        className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);
export default CustomButton;
