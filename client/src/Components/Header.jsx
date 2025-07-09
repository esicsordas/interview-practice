import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import { LiaDiceD6Solid } from "react-icons/lia";
import CategoryInput from "./CategoryInput";
import RandomButton from "./RandomButton";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldHideButton = location.pathname == "/random";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-cyan-400 px-4 lg:px-6 py-2.5 z-20">
      <nav>
          <div className="flex flex-row">
            {isMobile && (
              <div className="flex-1">
                <CategoryInput  />
              </div>
            )}
            {!isMobile && (
              <div className={`flex-1 ${shouldHideButton ? 'invisible' : '' }`}>
                <RandomButton text={"Random Question"}/>
              </div>
            )}
            {!isMobile && (
              <div className="flex-6 text-center">
                <CategoryInput  />
              </div>
            )}
            <div className="flex flex-none sm:flex-1 mt-2 sm:mr-5 justify-end ">
              {isMobile && (
                <LiaDiceD6Solid
                  className={`w-7 h-7 cursor-pointer flex-1 ml-1 mr-1 ${shouldHideButton ? 'invisible' : '' }`}
                  onClick={() => navigate("/random")}
                />
              )}
            <FaHeart
              className="w-6 h-6 ml-1 mr-1 cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={() => navigate("/favourites")}
            />
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
