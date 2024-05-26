import React from "react";

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
  };

  const selectPage = Array.from(Array(totalPages).keys()).map((page) => (
    <option key={page + 1} value={page + 1}>
      {page + 1}
    </option>
  ));

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
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              <path fill="none" d="M0 0h20v20H0z" />
            </svg>
          </button>
          <span>
            Page{" "}
            <select
              className="pagination-dropdown"
              name="Select a page"
              aria-label="Select page number"
              value={currentPage}
              onChange={handleDropdownChange}
            >
              {selectPage}
            </select>{" "}
            / {totalPages}
          </span>
          <button
            className="pagination-btn"
            title="Next page"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <svg width="19" height="19" viewBox="0 0 20 20">
              <path d="M10 17l5-5-5-5 1.41-1.41L17.83 12l-6.42 6.42L10 17z" />
              <path fill="none" d="M0 0h20v20H0V0z" />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
