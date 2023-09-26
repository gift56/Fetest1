import { ChangeEvent, FocusEvent, InputHTMLAttributes } from "react";

interface CustomizeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  showLabel?: boolean;
  defaultChecked?: boolean;
  id?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClass?: string;
  error?: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  containerClass?: string;
  value: String | Boolean | any;
}

const CustomizeInput = ({
  htmlFor,
  showLabel,
  id,
  label,
  className,
  labelClassName,
  inputClassName,
  error,
  errorClass,
  onChange,
  onBlur,
  accept,
  containerClass,
  defaultChecked,
  value,
  disabled,
  ...props
}: CustomizeInputProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <div className={`flex flex-col gap-1 w-full h-full ${inputClassName}`}>
        <input
          {...props}
          className={`${className} ${
            error ? "border !border-red-400" : ""
          } outline-none text-sm font-medium md:text-base`}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          accept={accept}
          value={value}
          checked={defaultChecked}
          disabled={disabled}
        />
        {error && (
          <p className={`text-xs text-red-600 ${errorClass}`}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default CustomizeInput;
