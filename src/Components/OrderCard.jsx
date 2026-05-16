import React from "react";
import { useDispatch } from "react-redux";
import { AddItem, IncrementQty, DecrementQty, RemoveItem } from "../redux/cartSlice.js";
import { ImBin } from "react-icons/im";

function OrderCard({ name, price, type, image, id, qty }) {
  let dispatch = useDispatch();

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex gap-4 items-center group hover:shadow-md transition-all">
      {/* Image */}
      <div className="w-[80px] h-[80px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div className="flex justify-between items-start">
          <div className="text-[16px] font-bold text-gray-800 leading-tight pr-2 line-clamp-2">
            {name}
          </div>
          <button
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
            onClick={() => dispatch(RemoveItem(id))}
            title="Remove item"
          >
            <ImBin className="w-[16px] h-[16px]" />
          </button>
        </div>

        <div className="flex justify-between items-end mt-2">
          {/* Price & Type */}
          <div>
            <div className="font-bold text-gray-900">₹{price}</div>
            <div className={`text-[11px] font-bold uppercase tracking-wider ${type === "veg" ? "text-green-600" : "text-red-500"}`}>
              {type}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg h-[32px] overflow-hidden">
            <button 
              className="w-[32px] h-full flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 transition-colors active:bg-gray-300"
              onClick={() => dispatch(DecrementQty(id))}
            >
              -
            </button>
            <span className="w-[32px] h-full flex items-center justify-center text-sm font-bold text-gray-800 bg-white">
              {qty}
            </span>
            <button 
              className="w-[32px] h-full flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 transition-colors active:bg-gray-300"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
