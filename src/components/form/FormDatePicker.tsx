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
    <div className="form-date-picker">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-date-picker-field"
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};
