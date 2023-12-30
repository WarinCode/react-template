import Food from "./Food";
import { foods } from "../data/data";

const Menu = () => {
  return (
    <section className=" grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-20 p-0">
      {foods.map((item, idx) => (
        <Food
          img={item.img}
          name={item.name}
          price={item.price}
          alt={item.alt}
          rating={item.rating}
          number={idx + 1}
          id={item.id}
        />
      ))}
    </section>
  );
};

export default Menu;
