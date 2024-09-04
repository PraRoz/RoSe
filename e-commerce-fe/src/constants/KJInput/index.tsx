import { Controller, Control } from "react-hook-form";
import { Input, Alert, InputProps } from "antd";
import { ErrorMessage } from "@hookform/error-message";

type KJInputTypes = InputProps & {
  name: string;
  type?: string;
  control: Control<any>;
  label?: React.ReactNode;
  error?: any;
  parentClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  required?: boolean;
  rules?: any;
  value?: any;
  register: any;
};

const KJInput = ({
  name,
  control,
  label,
  error,
  value,
  register,
  parentClass,
  inputClass,
  labelClass,
  placeholder,
  type,
  required = false,
  showCount,
  rules = null,
  ...rest
}: KJInputTypes) => {
 

  return (
    <div className="mb-4">
      <label className={labelClass}>
        {label}
        {required && "*"}
      </label>
      <input
        className={inputClass}
        id={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register(`${name}`)}
      />
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => (
          <Alert message={message} type="error" className="mt-2 text-center" />
        )}
      />
    </div>
  );
};

export default KJInput;
