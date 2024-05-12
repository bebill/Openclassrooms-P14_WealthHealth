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

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <i className="fa-solid fa-magnifying-glass"></i>{" "}
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            className="clear-button"
            title="Clear Search"
            onClick={handleClear}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};
