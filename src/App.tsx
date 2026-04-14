import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Routes>
        {/* ✅ HOME PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* Other pages
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<ItemDetail />} /> */}
      </Routes>
    </div>
  );
}


export default App
