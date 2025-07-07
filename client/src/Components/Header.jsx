import { FaHeart } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryInput from "./CategoryInput";
import RandomButton from "./RandomButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shouldHideButton = location.pathname == "/random";
  return (
    <header className="fixed top-0 left-0 w-screen bg-cyan-400 px-4 lg:px-6 py-2.5 z-20">
      <nav>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className={shouldHideButton ? "invisible" : ""}>
            <RandomButton text={"Random Question"} />
          </div>
          <div className="flex-grow max-w-md mx-auto">
            <CategoryInput />
          </div>
          <FaHeart
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={() => navigate("/favourites")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
