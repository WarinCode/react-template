import Food from "./Food";
import { foods } from "../data/data";

const Menu = () => {
  return (
    <section className=" grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-20 lg:grid-cols-1 lg:grid-flow-row md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 sm:grid-flow-row">
      {foods.map((item, idx) => (
        <Food
          key={item.id}
          number={idx + 1}
          {...item}
          // img={item.img}
          // name={item.name}
          // price={item.price}
          // alt={item.alt}
          // rating={item.rating}
        />
      ))}
    </section>
  );
};

export default Menu;
