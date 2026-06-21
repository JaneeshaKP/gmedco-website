"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="mb-8">
      <div className="relative mx-auto max-w-2xl">
        <input
          type="text"
          placeholder="Search by name, brand, category, or subcategory..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-full border border-stroke bg-white px-6 py-4 pr-12 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-dark-3 dark:bg-dark dark:text-body-color-dark dark:focus:border-primary"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          {searchQuery ? (
            <button
              onClick={() => onSearchChange("")}
              className="text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              aria-label="Clear search"
            >
              <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
            </button>
          ) : (
            <FontAwesomeIcon
              icon={faSearch}
              className="h-5 w-5 text-body-color dark:text-body-color-dark"
            />
          )}
        </div>
      </div>
      {searchQuery && (
        <p className="mt-3 text-center text-sm text-body-color dark:text-body-color-dark">
          Searching for: <span className="font-semibold text-primary">"{searchQuery}"</span>
        </p>
      )}
    </div>
  );
};

export default SearchBar;
