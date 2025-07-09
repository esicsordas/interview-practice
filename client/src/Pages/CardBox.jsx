import { useContext, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import AppContext from "../AppContext";
import QuestionCard from "../Components/QuestionCard";
import RandomButton from "../Components/RandomButton";

const CardBox = () => {
  const {
    currentQuestion,
    isLoading,
    questionHistory,
    currentIndex,
    remainingQuestions,
    getPreviousQuestion,
    getNextQuestion,
    pickRandomQuestion,
  } = useContext(AppContext);

  useEffect(() => {
    if (!currentQuestion && !isLoading) {
      pickRandomQuestion();
    }
  }, [currentQuestion, isLoading]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4 mt-20">
        <>
          <div className="flex flex-row items-center justify-center gap-4">
            <IoIosArrowBack
              className={`${currentIndex === 0 ? "invisible" : ""} hidden md:flex mr-4 text-4xl cursor-pointer hover:text-cyan-500`}
              onClick={() => getPreviousQuestion()}
            />

            {currentQuestion && (
              <QuestionCard question={currentQuestion} size={"large"} />
            )}

            <IoIosArrowForward
              className={`${currentIndex === questionHistory.length - 1 ? "invisible" : ""} hidden md:flex ml-4 text-4xl cursor-pointer hover:text-cyan-500`}
              onClick={() => getNextQuestion()}
            />
          </div>

          <div className="flex flex-row items-center justify-center gap-4 mt-10">
            <IoIosArrowBack
              className={`${currentIndex === 0 ? "invisible" : ""} md:hidden sm:flex mr-4 text-4xl cursor-pointer hover:text-cyan-500`}
              onClick={() => getPreviousQuestion()}
            />
            <div
              className={`${remainingQuestions === 0 ? "invisible" : ""}`}
            >
              <RandomButton text={"Next Question"} />
            </div>
            <IoIosArrowForward
              className={`${currentIndex === questionHistory.length - 1 ? "invisible" : ""} md:hidden sm:flex ml-4 text-4xl cursor-pointer hover:text-cyan-500`}
              onClick={() => getNextQuestion()}
            />
          </div>
        </>
    </div>
  );
};

export default CardBox;
