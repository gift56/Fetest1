import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: String | ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomizeButton = ({
  type,
  text,
  disabled,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} py-2 px-2 text-base font-medium cursor-pointer transition-all duration-300 outline-none flex items-center justify-center border hover:opacity-90`}
    >
      {text}
    </button>
  );
};

export default CustomizeButton;
