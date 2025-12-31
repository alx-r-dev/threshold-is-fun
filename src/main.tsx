import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HowItWorks from "./pages/HowItWorks.tsx";

//TODO: : make clear data work and weird calculations now
//add github actions for tests

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
