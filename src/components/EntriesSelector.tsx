import React from "react";

interface EntriesSelectorProps {
  onChange: (entriesPerPage: number) => void;
}

export const EntriesSelector = ({ onChange }: EntriesSelectorProps) => {
  const options = [10, 25, 50, 100];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const entriesPerPage = parseInt(event.target.value);
    onChange(entriesPerPage);
  };

  return (
    <div className="entries-per-page-selector">
      <label htmlFor="entries-per-page">Show</label>
      <select id="entries-per-page" onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
};
