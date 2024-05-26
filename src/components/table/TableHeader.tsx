import React from "react";

interface HeaderProps {
  headers: string[];
  onSort: (header: string) => void;
  sortedColumn: string | null;
  sortOrder: "asc" | "desc" | "original";
}

export const tableHeaders = [
  "First Name",
  "Last Name",
  "Start Date",
  "Department",
  "Date of Birth",
  "Street",
  "City",
  "State",
  "Zip Code",
];

export const TableHeader = ({
  headers,
  onSort,
  sortedColumn,
  sortOrder,
}: HeaderProps) => {
  const handleSort = (header: string) => {
    onSort(header);
  };

  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className="table-header"
            onClick={() => handleSort(header)}
          >
            {header}{" "}
            {sortedColumn === header && sortOrder === "asc" && (
              <svg width="12" height="12" viewBox="0 0 600 400">
                <path
                  fill="white"
                  d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                />
              </svg>
            )}
            {sortedColumn === header && sortOrder === "desc" && (
              <svg width="12" height="12" viewBox="0 0 600 400">
                <path
                  fill="white"
                  d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                />
              </svg>
            )}
            {(sortedColumn === header && sortOrder === "original") ||
            sortedColumn !== header ? (
              <svg width="12" height="12" viewBox="0 0 600 400">
                <path
                  fill="white"
                  d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
                />
              </svg>
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};
