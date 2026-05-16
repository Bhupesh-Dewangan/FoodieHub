import React from "react";
import Nav from "./Nav";
import Category from "./Category";
import CardContainer from "./CardContainer";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext.jsx";
import CartCard from "./CartCard.jsx";
import OrderCard from "./OrderCard.jsx";
import heroBanner from "../assets/hero_banner.png";

function Home() {
  let { searchTerm, showCards, setShowCards } = useContext(FilterContext);

  return (
    <div className="w-full min-h-screen bg-slate-50 relative">
      <Nav />

      {/* Hero Section */}
      {!searchTerm && (
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-8">
          <img
            src={heroBanner}
            alt="Delicious Pizza"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Satisfy Your Cravings
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl drop-shadow-md">
              Discover the best food and drinks, delivered fast directly to your door.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {!searchTerm ? <Category /> : null}
        <CardContainer />
      </div>

      <CartCard />
    </div>
  );
}

export default Home;
