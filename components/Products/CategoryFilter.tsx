"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSyringe } from "@fortawesome/free-solid-svg-icons";

interface CategoryFilterProps {
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSubcategoryChange: (subcategory: string | null) => void;
}

const CategoryFilter = ({
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFilterProps) => {
  const categories = [
    { name: "Machines", icon: faLayerGroup, subcategories: ["Aesthetic", "Facial", "Laser", "Slimming", "Support"] },
    { name: "Aesthetic", icon: faSyringe, subcategories: ["Aesthetic", "Breast Implants", "HA Fillers", "Professional - Retail Products"] },
  ];

  const getSubcategories = () => {
    const category = categories.find(cat => cat.name === selectedCategory);
    return category?.subcategories || [];
  };

  return (
    <div className="mb-12">
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => {
            onCategoryChange(null);
            onSubcategoryChange(null);
          }}
          className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
            selectedCategory === null
              ? "bg-primary text-white shadow-lg"
              : "bg-white text-body-color hover:bg-primary hover:text-white dark:bg-dark dark:text-body-color-dark dark:hover:bg-primary"
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => {
              onCategoryChange(category.name);
              onSubcategoryChange(null);
            }}
            className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
              selectedCategory === category.name
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-body-color hover:bg-primary hover:text-white dark:bg-dark dark:text-body-color-dark dark:hover:bg-primary"
            }`}
          >
            <FontAwesomeIcon icon={category.icon} />
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onSubcategoryChange(null)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              selectedSubcategory === null
                ? "border-primary bg-primary/10 text-primary"
                : "border-stroke bg-white text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark"
            }`}
          >
            All {selectedCategory}
          </button>
          {getSubcategories().map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => onSubcategoryChange(subcategory)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedSubcategory === subcategory
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stroke bg-white text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
