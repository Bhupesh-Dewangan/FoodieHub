import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "./OrderCard.jsx";
import BillPrint from "./BillPrint.jsx";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "../redux/cartSlice.js";

function CartCard() {
  let { setShowCards, showCards } = useContext(FilterContext);
  let items = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = subtotal > 0 ? 20 : 0;
  let taxes = (subtotal * 5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  // Prevent scrolling on body when cart is open
  useEffect(() => {
    if (showCards) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCards]);

  const handleCheckout = () => {
    dispatch(EmptyCart());
    setShowCards(false);
    navigate('/success');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-all duration-300 ${showCards ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setShowCards(false)}
      />

      {/* Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-full md:w-[450px] bg-white shadow-2xl z-[101] flex flex-col transition-transform duration-300 ease-in-out ${showCards ? "translate-x-0" : "translate-x-full"}`}
      >
        
        <header className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <p className="text-sm text-gray-500">{items.length} items</p>
          </div>
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            onClick={() => setShowCards(false)}
          >
            <RxCross1 className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 custom-scrollbar">
          {items.length > 0 ? (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <OrderCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
              <button 
                className="mt-6 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                onClick={() => setShowCards(false)}
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-6 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
            <BillPrint
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              taxes={taxes}
              total={total}
            />
            <button 
              onClick={handleCheckout}
              className="w-full mt-4 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl text-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartCard;
