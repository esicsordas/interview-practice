import { useContext, useEffect, useState } from "react";
import { TbRotate360 } from "react-icons/tb";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import AppContext from "../AppContext";
import { storage } from "../storage";

const QuestionCard = ({question, size}) => {
  const { addToFaves, removeFromFaves } = useContext(AppContext);
  const [content, setContent] = useState();
  const [isFlipped, setIsFlipped] = useState();
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    setContent(question.question);
    setIsFavorite(storage.isQuestionInFaves(question));
  }, [question]);

  const cardSize = {
    "small": "w-72 h-72 p-4 text-sm",
    "large": "w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] p-6 sm:p-8 md:p-10 text-lg"
  };

  const handleFlipClick = () => {
    setIsFlipped(true);
    setTimeout(() => {
      const switchedContent =
        content == question.question
          ? question.answer
          : question.question;
      setContent(switchedContent);
      setIsFlipped(false);
    }, 600);
  };

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite)
    if(!isFavorite) {
      addToFaves(question);
    } else {
      removeFromFaves(question);
    }
  };

  return (
    <div
      className={`flex items-center justify-center transition-transform duration-600 ${isFlipped ? "rotate-y-90" : ""} `}
      style={{ perspective: 1000 }}
    >
      <div className="relative border border-gray-300 rounded-xl shadow-lg bg-white">
        <div
          className={`
        flex items-center justify-center
        text-gray-700 font-semibold
        text-center ${cardSize[size]}`}
        >
          {question && Object.keys(question).length > 0 ? (
            <h2>{content}</h2>
          ) : (
            <h2>No question available</h2>
          )}
        </div>
        {!isFavorite && <FaRegHeart className="
        absolute top-4 right-4 
        text-gray-500 text-2xl 
        hover:text-cyan-500 
        cursor-pointer 
        transition-colors
        hover:scale-115
        transition-transform
        duration-200" 
          onClick={() => handleHeartClick()}
        />}
        {isFavorite && <FaHeart className="
        absolute top-4 right-4 
        text-gray-500 text-2xl 
        hover:text-cyan-500 
        cursor-pointer 
        transition-colors
        hover:scale-115
        transition-transform
        duration-200" 
          onClick={() => handleHeartClick()}
        />}
        <TbRotate360 
          className="
        absolute bottom-4 right-4
        text-gray-500 hover:text-cyan-500
        text-2xl
        cursor-pointer
        transition-colors
        hover:scale-115
        transition-transform
        duration-200"
          onClick={() => handleFlipClick()}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
