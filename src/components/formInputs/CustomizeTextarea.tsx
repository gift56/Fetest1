import React, { ChangeEvent, FocusEvent, TextareaHTMLAttributes } from "react";

interface CustomizeTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlFor?: string;
  showLabel?: boolean;
  id?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClass?: string;
  error?: any;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  containerClass?: string;
  value: string | undefined | number | any;
}

const CustomizeTextarea = ({
  htmlFor,
  id,
  label,
  className,
  labelClassName,
  inputClassName,
  error,
  errorClass,
  onChange,
  onBlur,
  containerClass,
  showLabel,
  value,
  ...props
}: CustomizeTextareaProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <div className={`flex flex-col gap-1 w-full h-full ${inputClassName}`}>
        <textarea
          {...props}
          className={`${className} ${error ? "border !border-red-500" : ""}`}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        ></textarea>
        {error && (
          <p className={`text-xs text-red-600 ${errorClass}`}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default CustomizeTextarea;
