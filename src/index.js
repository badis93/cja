import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
