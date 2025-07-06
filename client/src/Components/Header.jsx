import { FaHeart } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryInput from "./CategoryInput";
import RandomButton from "./RandomButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shouldHideButton = location.pathname == "/random";
  return (
    <header className="fixed top-0 left-0">
      <nav className="bg-cyan-400 w-screen px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <div className={ shouldHideButton ? "invisible" : ""}>
            <RandomButton text={"Random Question"}/>
          </div>
          <CategoryInput />
          <FaHeart className="w-6 h-6 mr-16 cursor-pointer hover:scale-110 transition-transform duration-200" onClick={() => navigate('/favourites')}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
