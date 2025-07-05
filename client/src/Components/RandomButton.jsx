import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../AppContext';

const RandomButton = ({ text }) => {
  const navigate = useNavigate();
  const { pickRandomQuestion } = useContext(AppContext);

  function handleClick(){
    navigate('/random');
    pickRandomQuestion();
  }

  return (
    <button
      className="
    bg-white
    text-gray-700 text-sm font-semibold
    border border-gray-300
    px-4 py-2
    rounded-md
    transition duration-150 ease-in-out
    hover:bg-cyan-500 hover:text-white
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
    cursor-pointer"
    onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default RandomButton;
