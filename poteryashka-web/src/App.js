import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register.js'
import GetPet from './GetPet.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/get_pet" element={<GetPet />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
