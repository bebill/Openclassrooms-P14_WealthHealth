import { ChangeEvent } from "react";

interface DatePickerProps {
  label: string;
  name: string;
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormDatePicker = ({
  label,
  name,
  value,
  handleOnChange,
}: DatePickerProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};
