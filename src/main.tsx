import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HowItWorks from "./pages/HowItWorks.tsx";

//TODO: : 1. githun actions for vitest
//2. look for spelling errors
//3. update read me

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
