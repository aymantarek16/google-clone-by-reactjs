import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
