import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CardBox from "./Pages/CardBox";
import CardList from "./Pages/CardList";
import { useContext } from "react";
import AppContext from "./AppContext";

function App() {

  const { favQuestions, currentCategoryQuestions } = useContext(AppContext);

  return (
    <div className="relative h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<CardBox />} />
        <Route path="/favourites" element={<CardList questions={favQuestions} />} />
        <Route path="/category" element={<CardList questions={currentCategoryQuestions} />} />
      </Routes>
    </div>
  );
}

export default App;
