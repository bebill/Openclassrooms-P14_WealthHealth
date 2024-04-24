import { ChangeEvent } from "react";
import { FormLabel } from "./FormLabel";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleOnChange,
}: InputProps) => {
  return (
    <div className="form-input">
      <FormLabel text={label} />
      <input
        className="form-input-field"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};
