import { Controller, Control } from "react-hook-form";
import { Input, Alert, InputProps } from "antd";
import { ErrorMessage } from "@hookform/error-message";

type KJSelectTypes = InputProps & {
  name: string;
  type?: string;
  control: Control<any>;
  label?: React.ReactNode;
  error?: any;
  parentClass?: string;
  labelClass?: string;
  inputClass?: string;
  optionArray?: any;
  placeholder?: string;
  required?: boolean;
  rules?: any;
  value?: any;
  register: any;
};

const KJSelect = ({
  name,
  control,
  label,
  error,
  value,
  register,
  parentClass,
  inputClass,
  labelClass,
  optionArray,
  placeholder,
  type,
  required = false,
  showCount,
  rules = null,
  ...rest
}: KJSelectTypes) => {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        {label}
        {required && "*"}
      </label>
      <select
        className={inputClass}
        id={name}
        placeholder={placeholder}
        {...register(`${name}`)}
      >
        <option value="">Category</option>
        {optionArray?.map((item: any, index: any) => {
          return (
            <option key={index} value={`${item._id}`}>
              {item.title}
            </option>
          );
        })}
      </select>
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

export default KJSelect;
