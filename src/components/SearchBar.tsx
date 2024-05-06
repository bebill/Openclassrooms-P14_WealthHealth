import { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>{" "}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
