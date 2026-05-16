import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FilterContext } from "../Context/FilterContext.jsx";
import { food_items } from "../../food.js";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

function Nav() {
  let items = useSelector((state) => state.cart);
  let {
    searchTerm,
    setSearchTerm,
    filteredItems,
    setFilteredItems,
    setShowCards,
    showCards,
  } = useContext(FilterContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(newList);
  }, [searchTerm]);

  return (
    <nav className="w-full h-[90px] backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 border-b border-gray-100 shadow-sm transition-all">
      {/* Logo */}
      <div className=" flex items-center justify-center rounded-xl  text-[var(--color-primary)] cursor-pointer hover:bg-primary/20 transition-colors">
        <img src={logo} alt="logo" className="w-[60px] h-[60px] " />
      </div>

      {/* Search Bar */}
      <form
        className="bg-white flex-1 max-w-2xl h-[55px] mx-4 md:mx-8 flex items-center px-5 gap-3 rounded-full border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-primary)]/50 focus-within:border-[var(--color-primary)] transition-all"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[22px] h-[22px] text-gray-400" />
        <input
          type="text"
          placeholder="Search for delicious food..."
          className="w-full h-full outline-none text-[16px] text-gray-700 bg-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>

      {/* Cart Icon */}
      <div
        className="w-[60px] h-[60px] flex items-center justify-center rounded-xl relative transition-all duration-300 cursor-pointer  hover:-translate-y-1 group"
        onClick={() => setShowCards(true)}
      >
        <FaCartPlus className="w-[28px] h-[28px] text-slate-500 group-hover:text-[var(--color-primary)] transition-colors" />

        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md animate-bounce">
            {items.length}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Nav;
