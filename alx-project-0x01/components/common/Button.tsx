import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    disabled = false,

}) => {
    const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
        primary : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500"
    };
    const disabledStyles= "opacity-50 cursor-not-allowed";

    return (
        <button
        className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles: ''}`}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
        </button>   
    );


};

export default Button;
