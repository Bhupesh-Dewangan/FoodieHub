import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-sm">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">You ordered successfully!</h1>
        <p className="text-gray-500 mb-8">
          Your delicious food is being prepared and will be delivered to you shortly. Thank you for choosing FoodieHub!
        </p>
        <button 
          onClick={() => navigate('/')}
          className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl text-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Success;
