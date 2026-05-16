import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice.js";
import { toast } from "react-toastify";

function Card({ name, price, type, image, id }) {
  let dispatch = useDispatch();
  return (
    <div className="bg-white w-[300px] rounded-2xl flex flex-col shadow-sm border border-gray-100 m-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      <div className="w-full h-[220px] overflow-hidden bg-gray-100 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          {type === "veg" ? (
            <GiThreeLeaves className="text-green-500 w-4 h-4" />
          ) : (
            <RiKnifeBloodLine className="text-red-500 w-4 h-4" />
          )}
          <span className={`text-xs font-bold capitalize ${type === "veg" ? "text-green-600" : "text-red-600"}`}>
            {type}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-1" title={name}>{name}</h3>
        
        <div className="flex justify-between items-end mt-auto">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-medium">Price</span>
            <span className="text-2xl font-bold text-gray-900">₹{price}</span>
          </div>

          <button
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95"
            title="Add to Cart"
            onClick={() => {
              dispatch(AddItem({id:id, name:name, price:price, type:type, image:image, qty:1}));
              toast.success(`${name} added to cart!`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
              });
            }}
          >
            <FaCartPlus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
