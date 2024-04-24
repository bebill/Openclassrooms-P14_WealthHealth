import { ChangeEvent } from "react";
import { FormLabel } from "./FormLabel";

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
    <div className="form-dropdown">
      <FormLabel text={label} />
      <select
        className="form-dropdown-field"
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
