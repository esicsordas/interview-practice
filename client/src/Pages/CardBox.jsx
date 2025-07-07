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

  const setClassName = (condition, attributes) => {
    return condition ? `${attributes} invisible` : attributes;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4 mt-20">
      {isLoading ? (
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          <div className="md:hidden mb-25">
            <IoIosArrowUp
              className="text-4xl cursor-pointer hover-text-cyan-500"
              onClick={() => getPreviousQuestion()}
            />
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <div
              className={setClassName(currentIndex == 0, "hidden md:flex mr-4")}
            >
              <IoIosArrowBack
                className="text-4xl cursor-pointer hover:text-cyan-500"
                onClick={() => getPreviousQuestion()}
              />
            </div>

            {currentQuestion && <QuestionCard question={currentQuestion} size={'large'} />}

            <div
              className={setClassName(
                currentIndex == questionHistory.length - 1,
                "hidden md:flex ml-4"
              )}
            >
              <IoIosArrowForward
                className="text-4xl cursor-pointer hover:text-cyan-500"
                onClick={() => getNextQuestion()}
              />
            </div>
          </div>

          <div className={setClassName(remainingQuestions == 1, "mt-6")}>
            <RandomButton text={"Next Random Question!"} />
          </div>

          <div className="md:hidden mt-25">
            <IoIosArrowDown
              className="text-4xl cursor-pointer hover:text-cyan-500"
              onClick={() => getNextQuestion()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardBox;
