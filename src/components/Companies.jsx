import { Slide } from "react-slideshow-image";

import { logos } from "../data/data";

const Companies = () => {
  return (
    <Slide slidesToShow={4} duration={3300} transitionDuration={400} autoplay={true} arrows={false} pauseOnHover={false} infinite={true} canSwipe={false}>
      {logos.map((item) => (
        <div key={item.id} className="w-[190px] h-[110px] flex items-center justify-center cursor-default">
          <img
            src={item.src}
            alt={item.alt}
            className=" w-[170px] h-[90px] object-contain mx-auto saturate-0 hover:saturate-100 duration-200 ease-linear cursor-pointer hover:scale-110"
            loading="lazy"
          />
        </div>
      ))}
    </Slide>
  );
};

export default Companies;
