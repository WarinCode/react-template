import { FaStar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdGeneratingTokens } from "react-icons/md";

const getStars = (n) => {
  let starts = [];
  for (let i = 1; i <= 5; i++) {
    starts.push(
      <FaStar
        className={`text-xl me-1 ${
          i <= n ? "text-yellow-300" : "text-gray-700"
        }`}
      />
    );
  }
  return starts;
};

const Food = ({ img, name, price, alt, rating, number, id }) => (
  <div
    key={id}
    className="flex bg-zinc-900 rounded-xl shadow-2xl items-stretch justify-center gap-4 cursor-default overflow-hidden"
  >
    <div className=" flex-1 h-full self-center overflow-hidden relative">
      <h1 className="text-xl font-poppins font-thin absolute top-2 left-2 z-[1] text-slate-200 opacity-90">
        {number}.
      </h1>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className=" rounded-s-xl h-full w-full object-cover select-none hover:scale-125 duration-500 ease-in-out"
      />
    </div>
    <div className=" flex-1 font-poppins p-[25px] self-center">
      <h1 className="text-center text-xl font-bold capitalize text-slate-100 self-start">
        {name}
      </h1>
      <div className="mt-4">
        <hr className="my-3" />
        <div className="w-full flex items-baseline justify-start">
          <span>
            <MdGeneratingTokens className="text-2xl text-yellow-300 me-2 inline-flex" />
          </span>
          <h3 className="mt-4 text-start text-lg font-bold text-yellow-300 capitalize">
            rating :
          </h3>
          <span className="ms-4">
            {getStars(rating).map((val, idx) => (
              <p key={idx} className=" inline-flex translate-y-1">
                {val}
              </p>
            ))}
          </span>
        </div>
        <div className="mt-4 text-start text-lg font-bold text-green-600 capitalize">
          <span>
            <FaMoneyBill className="text-2xl text-green-600 me-2 inline-flex" />
          </span>
          <span>price :</span> <span className="ms-2">${price}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Food;
