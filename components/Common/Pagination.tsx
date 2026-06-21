"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5;

    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-white text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-stroke disabled:hover:bg-white disabled:hover:text-body-color dark:border-dark-3 dark:bg-dark dark:text-body-color-dark dark:hover:bg-primary dark:hover:text-white"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
      </button>

      {getPageNumbers().map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="flex h-10 w-10 items-center justify-center text-body-color dark:text-body-color-dark">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border font-semibold transition-all duration-300 ${
                currentPage === page
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-stroke bg-white text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-body-color-dark dark:hover:bg-primary dark:hover:text-white"
              }`}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-white text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-stroke disabled:hover:bg-white disabled:hover:text-body-color dark:border-dark-3 dark:bg-dark dark:text-body-color-dark dark:hover:bg-primary dark:hover:text-white"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
      </button>
    </div>
  );
};

export default Pagination;
