import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function CardContainer() {
  const filter = useContext(FilterContext);

  if (!filter.filteredItems || filter.filteredItems.length === 0) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full py-20 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-gray-800 mb-3">
            No items found
          </div>
          <div className="text-lg text-gray-500">
            Try selecting a different category or change your search term.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-5 pb-10">
      {filter.filteredItems.map((item) => (
        <Card
          key={item.id}
          name={item.food_name}
          id={item.id}
          price={item.price}
          type={item.food_type}
          image={item.food_image}
        />
      ))}
    </div>
  );
}

export default CardContainer;
