import { useState } from "react";
import { navMenu } from "../data/data";
import { LuLogIn } from "react-icons/lu";
import { MdTableRows } from "react-icons/md";
import { MdClose } from "react-icons/md";
import reactLogo from "../assets/react.svg";

import ProgressBar from "@ramonak/react-progress-bar";
import ToTop from "../components/ToTop";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const maxHeight = 100;
  const differentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  const ProgressBarProps = {
    completed: height,
    maxCompleted: maxHeight,
    borderRadius: "0px",
    bgColor: "rgb(34 211 238)",
    height: "10px",
    isLabelVisible: false,
    animateOnRender: true,
  };

  // https://www.30secondsofcode.org/css/s/scroll-progress-bar/
  window.addEventListener("scroll", () => {
    setHeight((scrollTop / differentHeight) * maxHeight);
  });

  return (
    <div className="sticky top-0 w-full z-10">
      <nav className="w-full h-[85px] bg-stone-950 flex flex-row justify-between items-center p-6 shadow-lg select-none border-none">
        <div className="flex items-center">
          <img
            src={reactLogo}
            alt="logo"
            className="h-[40px] w-[40px] rounded-full ms-4 animate-spin-slow inline"
          />
          <h1 className="text-xl md:text-lg sm:text-lg  inline font-poppins font-bold capitalize text-slate-50 ms-3 cursor-default">
            react project
          </h1>
        </div>
        <ul className="font-poppins list-none flex items-center text-center me-[40px] p-4 lg:hidden md:hidden">
          {navMenu.map((item) => (
            <li
              key={item.id}
              className="flex-auto m-auto text-center cursor-pointer text-white hover:text-sky-400 me-4 duration-150 ease-linear capitalize"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li className="flex-auto m-auto cursor-pointer text-white font-bold text-2xl hover:text-sky-400 me-4 duration-150 ease-linear">
            <LuLogIn />
          </li>
        </ul>
        <div className=" 2xl:hidden xl:hidden lg:block md:block">
          {isOpen ? (
            <MdClose className="text-3xl text-slate-100 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <MdTableRows className="text-3xl text-slate-100 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
          )}
        </div>
      </nav>
        <ul className={`w-full bg-stone-950 p-6 flex flex-col items-center justify-center ${isOpen ? "block" : "hidden"} z-10 border-none -mt-2`}>
          {navMenu.map((item) => (
            <li
              key={item.id}
              className="text-center cursor-pointer text-white hover:text-sky-400 me-4 duration-150 ease-linear capitalize mb-3"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          </ul>
      <ProgressBar {...ProgressBarProps} />
      <ToTop />
    </div>
  );
};

export default Navbar;
