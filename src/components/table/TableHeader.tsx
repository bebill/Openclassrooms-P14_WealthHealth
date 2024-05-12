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
              <i className="fa-solid fa-sort-up"></i>
            )}
            {sortedColumn === header && sortOrder === "desc" && (
              <i className="fa-solid fa-sort-down"></i>
            )}
            {(sortedColumn === header && sortOrder === "original") ||
            sortedColumn !== header ? (
              <i className="fa-solid fa-sort"></i>
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

// interface HeaderProps {
//   headers: string[];
// }

// export const tableHeaders = [
//   "First Name",
//   "Last Name",
//   "Start Date",
//   "Department",
//   "Date of Birth",
//   "Street",
//   "City",
//   "State",
//   "Zip Code",
// ];

// export const TableHeader = ({ headers }: HeaderProps) => {
//   return (
//     <thead>
//       <tr>
//         {headers.map((header, index) => (
//           <th key={index} className="table-header">
//             {header}
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };
