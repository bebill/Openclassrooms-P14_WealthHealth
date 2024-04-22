import { ChangeEvent } from "react";

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const FormDropdown = ({
  label,
  name,
  value,
  options,
  handleOnChange,
}: DropdownProps) => {
  return (
    <div>
      <label>{label}</label>
      <select
        aria-label={label}
        name={name}
        value={value}
        onChange={handleOnChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
