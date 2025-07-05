import { FaHeart} from "react-icons/fa6";
import CategoryInput from "./CategoryInput";
import RandomButton from "./RandomButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0">
      <nav className="bg-cyan-400 w-screen px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <RandomButton />
          <CategoryInput />
          < FaHeart  className="w-6 h-6 mr-16 cursor-pointer"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
