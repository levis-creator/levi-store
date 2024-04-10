import React, { ButtonHTMLAttributes, ReactElement } from "react";

type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  type?: string;
  buttonTitle: any;
  className?: string;
};

const TextButton: React.FC<TextButtonProps> = ({
  buttonTitle,
  icon,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={`flex items-center space-x-2 dark:text-slate-50 text-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 ${className}`}
    >
      {icon}
      <span>{buttonTitle}</span>
    </button>
  );
};

export default TextButton;
