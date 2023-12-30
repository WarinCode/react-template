import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Button from "./Button";

const Slide1 = () => (
  <section
    className="flex flex-col items-start justify-center font-poppins px-[70px]"
    id="bgHero1"
  >
    <div className="text-white w-[450px] px-4 cursor-default">
      <h1 className="text-4xl">lEa mollit magna labore eu ex tempor.</h1>
      <p className="text-sm leading-1 mt-6">
        Consequat reprehenderit in aliqua cillum sint officia non est duis. Duis
        quis reprehenderit deserunt magna ea consectetur mollit. Eu magna
        pariatur reprehenderit aute sunt nulla veniam exercitation sit culpa
      </p>
    </div>
    <div className="inline-flex w-[450px] px-4 mt-9">
      <Button text={"get started"} style={"w-36 h-12 rounded-md text-center text-slate-50 capitalize font-bold bg-gradient-to-r from-cyan-500 to-blue-500 me-7 duration-150 ease-linear active:scale-95"}/>
      <Button text={"learn more"} style={"w-36 h-12 rounded-md text-center text-slate-50 capitalize bg-transparent border-2 border-slate-50 hover:bg-slate-50 hover:text-black duration-150 ease-linear  active:scale-95 "}/>
    </div>
  </section>
);

const Slide2 = () => (
  <section
    className="flex flex-col items-center justify-center font-poppins px-[70px] text-center"
    id="bgHero2"
  >
    <div className="text-white w-[650px] px-4 cursor-default">
      <h1 className="text-4xl text-cyan-500">lEa mollit magna labore eu ex tempor.</h1>
      <p className="text-sm leading-1 mt-6">
        Consequat reprehenderit in aliqua cillum sint officia non est duis. Duis
        quis reprehenderit deserunt magna ea consectetur mollit. Eu magna
        pariatur reprehenderit aute sunt nulla veniam
      </p>
    </div>
    <div className="w-[450px] px-4 mt-9">
      <Button text={"get started"} style={"w-60 h-12 rounded-md text-center text-slate-50 capitalize font-bold bg-gradient-to-r from-cyan-500 to-blue-500 me-7 duration-150 ease-linear active:scale-95"}/>
    </div>
  </section>
);

const Slide3 = () => (
  <section
    className="flex flex-col items-start justify-center font-poppins px-[70px]"
    id="bgHero3"
  >
    <div className="text-white w-[450px] px-4 cursor-default">
      <h1 className="text-4xl">
        Sint consequat esse veniam cupidatat eu est cupidatat aliquip deserunt
        consectetur.
      </h1>
    </div>
    <div className="text-white w-[690px] px-4 cursor-default">
    <p className="text-sm leading-1 mt-6">
        Consequat reprehenderit in aliqua cillum sint officia non est duis. Duis
        quis reprehenderit deserunt magna ea consectetur mollit. Eu magna
        pariatur reprehenderit aute sunt nulla veniam exercitation sit culpa
        Dolore enim anim esse consectetur excepteur aute et exercitation ad
        nostrud non minim laboris velit. Velit esse id adipisicing labore
        eiusmod. Do officia nulla quis consequat qui sunt sit sunt amet quis ea
        aliquip qui. Pariatur anim eiusmod minim cillum ipsum tempor et commodo
        tempor ut ullamco minim. Amet ullamco cillum sit exercitation quis
        excepteur duis irure deserunt. Ad culpa culpa aliqua aliquip minim.
      </p>
    </div>
  </section>
);

const Slide4 = () => (
  <section
    className="flex flex-col items-start justify-center font-poppins px-[70px]"
    id="bgHero4"
  >
    <div className="text-white w-[450px] px-4 cursor-default">
      <h1 className="text-4xl">
        Sint consequat esse veniam cupidatat eu est cupidatat aliquip deserunt
        consectetur.
      </h1>
    </div>
    <div className="text-white w-[690px] px-4 cursor-default">
    <p className="text-sm leading-1 mt-6">
        Consequat reprehenderit in aliqua cillum sint officia non est duis. Duis
        quis reprehenderit deserunt magna ea consectetur mollit. Eu magna
        pariatur reprehenderit aute sunt nulla veniam exercitation sit culpa
        Dolore enim anim esse consectetur excepteur aute et exercitation ad
        nostrud non minim laboris velit. Velit esse id adipisicing labore
        eiusmod. Do officia nulla quis consequat qui sunt sit sunt amet quis ea
      </p>
    </div>
  </section>
);

const Slide5 = () => (
  <section
    className="flex flex-col items-start justify-center font-poppins px-[70px]"
    id="bgHero5"
  >
    <div className="text-white w-[450px] px-4 cursor-default">
      <h1 className="text-4xl">
        Sint consequat esse veniam cupidatat eu est cupidatat aliquip deserunt
        consectetur.
      </h1>
    </div>
    <div className="text-white w-[690px] px-4 cursor-default">
    <p className="text-sm leading-1 mt-6">
        Consequat reprehenderit in aliqua cillum sint officia non est duis. Duis
        quis reprehenderit
      </p>
    </div>
  </section>
);

const Hero = () => (
  <>
    <div id="home"></div>
    <Fade
      indicators={false}
      arrows={false}
      pauseOnHover={false}
      transitionDuration={1600}
      duration={6000}
    >
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4/>
      <Slide5/>
    </Fade>
  </>
);

export default Hero;
