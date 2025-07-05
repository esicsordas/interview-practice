import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { storage } from "./storage";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CardBox from "./Pages/CardBox";

function App() {

  useEffect(() => {
    const initializeLocalStorage = () => {
      if (!storage.getAll()) {
        storage.createFaveQuestions();
      }
    };
    initializeLocalStorage();
  }, []);

  return (
    <div className="relative h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<CardBox />} />
      </Routes>
    </div>
  );
}

export default App;
