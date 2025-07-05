import { useContext, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import AppContext from "../AppContext";
import QuestionCard from "../Components/QuestionCard";
import RandomButton from "../Components/RandomButton";

const CardBox = () => {
  const { currentQuestion, getPreviousQuestion, getNextQuestion, questionHistory, currentIndex } = useContext(AppContext);

  useEffect(() => {

  }, [currentQuestion]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4 mt-20">
      <div className="md:hidden mb-25">
        <IoIosArrowUp
          className="text-4xl cursor-pointer hover-text-cyan-500"
          onClick={() => getPreviousQuestion()}
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <div className="hidden md:flex mr-4">
          { currentIndex > 0 && <IoIosArrowBack
            className="text-4xl cursor-pointer hover:text-cyan-500"
            onClick={() => getPreviousQuestion()}
          />}
        </div>

        {currentQuestion && <QuestionCard />}

        <div className="hidden md:flex ml-4">
          {currentIndex < questionHistory.length - 1 && <IoIosArrowForward
            className="text-4xl cursor-pointer hover:text-cyan-500"
            onClick={() => getNextQuestion()}
          />}
        </div>
      </div>
      <div className="mt-6">
        <RandomButton text={"Next Random Question!"} />
      </div>

      <div className="md:hidden mt-25">
        <IoIosArrowDown
          className="text-4xl cursor-pointer hover:text-cyan-500"
          onClick={() => getNextQuestion()}
        />
      </div>
    </div>
  );
};

export default CardBox;
