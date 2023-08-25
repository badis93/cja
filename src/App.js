import { Route, Routes } from "react-router-dom";
import Layout from "./view/layout";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/*" />
    </Routes>
  );
}
