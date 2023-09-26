import { ChangeEvent, FocusEvent, SelectHTMLAttributes } from "react";

interface CustomizeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  htmlFor?: string;
  showLabel?: boolean;
  id?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClass?: string;
  error?: any;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void | any;
  onBlur: (event: FocusEvent<HTMLSelectElement>) => void;
  containerClass?: string;
  value: string | any;
}

const CustomizeSelect = ({
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
  containerClass,
  value,
  ...props
}: CustomizeSelectProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <div className={`flex flex-col gap-1 w-full h-full ${inputClassName}`}>
        <select
          {...props}
          className={`${className} ${error ? "border !border-red-400" : ""}`}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
        {error && (
          <p className={`text-xs text-red-600 ${errorClass}`}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default CustomizeSelect;
