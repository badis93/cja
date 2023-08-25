import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/*" />
    </Routes>
  </BrowserRouter>
);
