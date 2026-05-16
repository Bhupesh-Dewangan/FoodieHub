import React from "react";
import CategoryList from "./Category_object";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function Category() {
  const filter = useContext(FilterContext);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-6 mb-10 px-4">
      {CategoryList.map((item) => {
        const isActive = filter.activeCategory === item.name;
        return (
          <button
            key={item.name}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md
              ${isActive
                ? "bg-[var(--color-primary)] text-white scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-100 hover:scale-105"}
            `}
            onClick={() => filter.filterByCategory(item.name)}
          >
            <span className={` ${isActive ? "text-white" : "text-[var(--color-primary)]"}`}>
              {item.icon}
            </span>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
