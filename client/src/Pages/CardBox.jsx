import { useContext } from "react";
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
  const { currentQuestion } = useContext(AppContext);

  const handleNextClick = async () => {
  };

  const handlePreviousClick = () => {};

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4 mt-20">
      <div className="md:hidden mb-25">
        <IoIosArrowUp
          className="text-4xl cursor-pointer hover-text-cyan-500"
          onClick={() => handlePreviousClick()}
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <div className="hidden md:flex mr-4">
          <IoIosArrowBack
            className="text-4xl cursor-pointer hover:text-cyan-500"
            onClick={() => handlePreviousClick()}
          />
        </div>

        {currentQuestion && <QuestionCard />}

        <div className="hidden md:flex ml-4">
          <IoIosArrowForward
            className="text-4xl cursor-pointer hover:text-cyan-500"
            onClick={() => handleNextClick()}
          />
        </div>
      </div>
      <div className="mt-6">
        <RandomButton text={"Next Random Question!"} />
      </div>

      <div className="md:hidden mt-25">
        <IoIosArrowDown
          className="text-4xl cursor-pointer hover:text-cyan-500"
          onClick={() => handleNextClick()}
        />
      </div>
    </div>
  );
};

export default CardBox;
