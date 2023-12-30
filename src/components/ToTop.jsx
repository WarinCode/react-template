import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const [y, setY] = useState(0);

  window.addEventListener("scroll", () => {
    setY(window.scrollY);
  });

  return (
    <div
      className={`fixed bottom-7 right-7 w-12 h-12 z-10 bg-black rounded-md cursor-pointer hover:bg-sky-400 duration-200 ease-in-out ${
        y >= 900 ? "block" : "hidden"
      } animate-bounce`}
    >
      <FaArrowUp
        className="text-gray-200 text-center text-2xl mx-auto mt-[10px]"
        onClick={() => scrollTo(0, 0)}
      />
    </div>
  );
};

export default ToTop;
