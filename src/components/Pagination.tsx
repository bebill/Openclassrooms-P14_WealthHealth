import React, { useState } from "react";

interface PaginationProps {
  entriesPerPage: number;
  totalEntries: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  entriesPerPage,
  totalEntries,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const startIndex = (currentPage - 1) * entriesPerPage + 1;
  const endIndex =
    currentPage * entriesPerPage < totalEntries
      ? currentPage * entriesPerPage
      : totalEntries;

  const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPage = parseInt(event.target.value);
    onPageChange(selectedPage);
    setIsDropdownOpen(false);
  };

  return (
    totalEntries > 0 && (
      <div className="pagination">
        <span className="pagination-info">
          {startIndex} - {endIndex} of {totalEntries} employees
        </span>
        <div className="pagination-system">
          <button
            className="pagination-btn"
            title="Previous page"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <span>
            Page{" "}
            <select
              className="pagination-dropdown"
              value={currentPage}
              onChange={handleDropdownChange}
              title="Select a page"
            >
              {Array.from(Array(totalPages).keys()).map((page) => (
                <option key={page + 1} value={page + 1}>
                  {page + 1}
                </option>
              ))}
            </select>{" "}
            / {totalPages}
          </span>
          <button
            className="pagination-btn"
            title="Next page"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    )
  );
};
