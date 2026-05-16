import React from "react";

function BillPrint({ subtotal, deliveryFee, taxes, total }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Subtotal</span>
        <span className="font-semibold text-gray-800">₹{subtotal}</span>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Delivery Fee</span>
        <span className="font-semibold text-gray-800">₹{deliveryFee}</span>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Taxes</span>
        <span className="font-semibold text-gray-800">₹{taxes}</span>
      </div>

      <div className="w-full h-[1px] bg-gray-200 my-1"></div>

      <div className="flex justify-between items-center text-lg font-bold text-gray-900">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}

export default BillPrint;
