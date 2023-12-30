import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { users } from "../data/data";

const Testimonial = () => {
  return (
    <section
      className="flex flex-col justify-center h-[500px] w-full bg-no-repeat bg-center saturate-150 mt-20"
      id="testimonial"
    >
      <Slide
        autoplay={true}
        arrows={false}
        indicators={true}
        pauseOnHover={false}
        duration={3400}
        transitionDuration={700}
        easing={"ease"}
      >
        {users.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center saturate-100"
          >
            <div className="mt-8 w-32 h-32">
              <img
                src={item.img}
                alt={item.alt}
                className="border-8 border-slate-50 border-opacity-10 rounded-full h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center font-poppins -mt-6 w-3/4 px-12 pt-12 md:px-8 md:pt-8 sm:px-8 sm:pt-8 capitalize cursor-default">
              <h2 className="font-bold text-3xl lg:text-2xl md:texl-xl sm:text-lg text-slate-100 mb-4">
                {item.name}
              </h2>
              <blockquote className=" italic text-lg md:text-sm sm:text-sm text-slate-100 opacity-80">
                "{item.quotes}"
              </blockquote>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default Testimonial;
