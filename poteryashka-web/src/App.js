import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register.js'
import GetPet from './GetPet.js'
import React from "react";


export default function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/get_pet" element={<GetPet />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
