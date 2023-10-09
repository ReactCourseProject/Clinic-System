import "./App.css";
import Payment from "./Payment"
import Completion from "./Completion";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};