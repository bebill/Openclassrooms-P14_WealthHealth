import { ChangeEvent } from "react";

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
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};
