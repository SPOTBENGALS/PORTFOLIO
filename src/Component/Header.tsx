import { useEffect, useState } from "react";
import menuScrolling from "./menuScrolling";

function Header() {
  const [onWhite, setOnWhite] = useState(false);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const scroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition >= 200) {
        setOnWhite(true);
      } else {
        setOnWhite(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div
      className="Header flex justify-center fixed z-30 w-screen text-white px-5 pt-3 pb-2 md:px-3 sm:pt-2 border-solid border-b-2"
      style={onWhite ? { backgroundColor: "white" } : { backgroundColor: "unset" }}
    >
      <div
        className="flex md:flex-col sm:flex-col items-center justify-between w-10/12"
        style={onWhite ? { color: "black" } : { color: "white" }}
      >
        <div onClick={scrollTop} className="Logo flex text-2xl md:text-lg sm:text-lg px-3 py-2 cursor-pointer">
          <div className="Logotip"></div>
          <h1>
            SimJiYeong <span className="text-xs md:hidden sm:hidden">심지영</span>
          </h1>
        </div>
        <ul className="flex px-5 py-2 sm:py-1">
          <li onClick={(e) => menuScrolling(e)}>Project</li>
          <li onClick={(e) => menuScrolling(e)}>History</li>
          <li onClick={(e) => menuScrolling(e)}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
