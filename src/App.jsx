import Home from "./Components/Home";
import React from "react";
import { FilterProvider } from "./Context/FilterContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <FilterProvider>
      <Home />
      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        toastStyle={{ borderRadius: '12px', fontWeight: 'bold' }}
      />
    </FilterProvider>
  );
};

export default App;
