import Home from "./Components/Home";
import Success from "./Components/Success";
import React from "react";
import { FilterProvider } from "./Context/FilterContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
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
    </BrowserRouter>
  );
};

export default App;
