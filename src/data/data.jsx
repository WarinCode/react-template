//* import logos
import adidas from "../assets/brands/adidas_- logo-250x169.svg";
import amazon from "../assets/brands/amazon_- logo-1000x302.svg";
import cocacola from "../assets/brands/coca_cola - logo-1000x328.svg";
import ebay from "../assets/brands/ebay_- logo-1000x401.svg";
import kfc from "../assets/brands/kfc_- logo-1000x476.svg";
import mastercard from "../assets/brands/mastercard_- logo-500x389.svg";
import nike from "../assets/brands/nike_- logo-100x53.svg";
import paypal from "../assets/brands/paypal_- logo-1000x325.svg";
import handm from "../assets/brands/h&m_- logo-100x67.svg";
import starbucks from "../assets/brands/starbucks_- logo-1000x1006.svg";
import redbull from "../assets/brands/red_bull - logo-1000x581.svg";
import visa from "../assets/brands/visa-100x34.svg";

//* import images
import food1 from "../assets/foods/american shrimp fried rice.jpg";
import food2 from "../assets/foods/breakfast-healthy-open-sandwich-toast-with-avocado-salmon-boiled-eggs-herbs-chia-seeds-white-plate-with-copy-space-healthy-protein-food.jpg";
import food3 from "../assets/foods/noodles-spicy-salad.jpg";
import food4 from "../assets/foods/pexels-christel-jensen-628776.jpg";
import food5 from "../assets/foods/pexels-dana-tentis-262959.jpg";
import food6 from "../assets/foods/pexels-dana-tentis-750073.jpg";
import food7 from "../assets/foods/pexels-ella-olsson-1640772.jpg";
import food8 from "../assets/foods/pexels-pixabay-262897.jpg";
import food9 from "../assets/foods/pexels-sydney-troxell-718742.jpg";
import food10 from "../assets/foods/pexels-valeria-boltneva-842545.jpg";

import user1 from "../assets/users/user (1).jpg";
import user2 from "../assets/users/user (2).jpg";
import user3 from "../assets/users/user (3).jpg";
import user4 from "../assets/users/user (4).jpg";
import user5 from "../assets/users/user (5).jpg";
import user6 from "../assets/users/user (6).jpg";
import user7 from "../assets/users/user (7).jpg";
import user8 from "../assets/users/user (8).jpg";
import user9 from "../assets/users/user (9).jpg";

//* import icons
import {
  FaStar,
  FaBox,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaUnsplash,
  FaGithub,
} from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { MdFoodBank } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiMicrosoft } from "react-icons/si";

import uuid from "react-uuid";

const getId = () => uuid();

export const navMenu = [
  { name: "home", id: getId(), link: "#home" },
  { name: "about", id: getId(), link: "#about" },
  { name: "services", id: getId(), link: "#services" },
  { name: "menu", id: getId(), link: "#menu" },
  { name: "location", id: getId(), link: "#location" },
  { name: "contact us", id: getId(), link: "#contact" },
];

export const logos = [
  {
    src: amazon,
    id: getId(),
    alt: "amazon logo",
  },
  {
    src: ebay,
    id: getId(),
    alt: "ebay logo",
  },
  {
    src: adidas,
    id: getId(),
    alt: "adidas logo",
  },
  {
    src: kfc,
    id: getId(),
    alt: "kfc logo",
  },
  {
    src: mastercard,
    id: getId(),
    alt: "mastercard logo",
  },
  {
    src: nike,
    id: getId(),
    alt: "nike logo",
  },
  {
    src: adidas,
    id: getId(),
    alt: "adidas logo",
  },
  {
    src: paypal,
    id: getId(),
    alt: "paypal logo",
  },
  {
    src: cocacola,
    id: getId(),
    alt: "cocacola logo",
  },
  {
    src: handm,
    id: getId(),
    alt: "h&m logo",
  },
  {
    src: starbucks,
    id: getId(),
    alt: "starbucks logo",
  },
  {
    src: redbull,
    id: getId(),
    alt: "redbull logo",
  },
  {
    src: visa,
    id: getId(),
    alt: "visa logo",
  },
];

let iconStyle = "text-5xl mb-2 mx-auto";
export const services = [
  {
    icon: <FaStar className={`${iconStyle} text-yellow-300`} />,
    header: "Laboris occaecat qui deserunt",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
  {
    icon: <GiShoppingBag className={`${iconStyle} text-rose-500`} />,
    header: "Cillum voluptate velit elit",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
  {
    icon: <FaBox className={`${iconStyle} text-amber-950`} />,
    header: "Voluptate quis irure",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
  {
    icon: <BsCreditCard2BackFill className={`${iconStyle} text-emerald-300`} />,
    header: "Tempor tempor officia",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
  {
    icon: <MdFoodBank className={`${iconStyle} text-indigo-800`} />,
    header: "Aute ea eiusmod ad amet minim",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
  {
    icon: <IoBed className={`${iconStyle} text-blue-950`} />,
    header: "Laborum aute excepteur incididunt sunt",
    content:
      "Quis sint ipsum esse excepteur qui. Exercitation consequat quis ea nostrud fugiat. Minim veniam irure in reprehenderit cillum adipisicing nisi sit nostrud consectetur adipisicing.Minim aliquip officia aute magna exercitation",
    id: getId(),
  },
];

export const foods = [
  {
    img: food1,
    name: "american shrimp fried rice",
    price: 10,
    alt: "food1-img",
    rating: 4,
    id: getId(),
  },
  {
    img: food2,
    name: "salmon avocado sandwich",
    price: 13,
    alt: "food2-img",
    rating: 5,
    id: getId(),
  },
  {
    img: food3,
    name: "noodles spicy salad",
    price: 25,
    alt: "food3-img",
    rating: 2,
    id: getId(),
  },
  {
    img: food4,
    name: "pork ribs",
    price: 30,
    alt: "food4-img",
    rating: 3,
    id: getId(),
  },
  {
    img: food5,
    name: "steak",
    price: 67,
    alt: "food5-img",
    rating: 4,
    id: getId(),
  },
  {
    img: food6,
    name: "hamburger",
    price: 32,
    alt: "food6-img",
    rating: 2,
    id: getId(),
  },
  {
    img: food7,
    name: "spaghetti",
    price: 59,
    alt: "food7-img",
    rating: 4,
    id: getId(),
  },
  {
    img: food8,
    name: "french fries",
    price: 14,
    alt: "food8-img",
    rating: 5,
    id: getId(),
  },
  {
    img: food9,
    name: "beef stew",
    price: 140,
    alt: "food9-img",
    rating: 5,
    id: getId(),
  },
  {
    img: food10,
    name: "pizza",
    price: 12,
    alt: "food10-img",
    rating: 1,
    id: getId(),
  },
];

// random username : https://www.spinxo.com
export const users = [
  {
    img: user1,
    name: "yuiacti",
    quotes:
      "Adipisicing Lorem labore culpa do excepteur. Reprehenderit consectetur amet cupidatat mollit aliquip et dolor non fugiat. Enim velit ipsum officia amet ut pariatur officia id. Quis est et qui eiusmod anim.",
    alt: "user1-img",
    id: getId(),
  },
  {
    img: user2,
    name: "kaivi",
    quotes:
      "Minim in esse pariatur ex amet exercitation occaecat ullamco cillum in dolore",
    alt: "user2-img",
    id: getId(),
  },
  {
    img: user3,
    name: "jolog",
    quotes:
      "Dolore sit pariatur sint aliquip est anim est mollit. Anim eu ex fugiat consectetur consectetur do consequat. Ad nostrud ex ea eu elit irure.",
    alt: "user3-img",
    id: getId(),
  },
  {
    img: user4,
    name: "angelgunn",
    quotes:
      "Aliquip incididunt cupidatat dolore occaecat aliqua duis id id eiusmod reprehenderit. Esse aliquip anim cupidatat ut Lorem elit nostrud. Sunt in ipsum nostrud dolore id ad veniam irure. Dolore sint aliqua esse quis Lorem dolor consequat nisi.",
    alt: "user4-img",
    id: getId(),
  },
  {
    img: user5,
    name: "san jiggy",
    quotes:
      "Aute incididunt magna eu mollit tempor voluptate duis voluptate sit tempor aute. Commodo irure et occaecat labore.",
    alt: "user5-img",
    id: getId(),
  },
  {
    img: user6,
    name: "bobock",
    quotes: "Eiusmod sunt ad enim incididunt. Lorem do ipsum proident anim.",
    alt: "user6-img",
    id: getId(),
  },
  {
    img: user7,
    name: "dolles",
    quotes:
      "Ullamco veniam reprehenderit ex Lorem ad aliquip incididunt ea nulla. Elit velit laboris mollit duis do nisi eu. Duis sit nostrud Lorem veniam mollit.",
    alt: "user7-img",
    id: getId(),
  },
  {
    img: user8,
    name: "larsel",
    quotes:
      "Nisi esse ullamco ad sunt Lorem incididunt anim cupidatat reprehenderit nulla dolor irure in. Officia et excepteur ut ex aute dolor aute cillum sit nostrud ex enim laborum. Dolor laboris ullamco occaecat ex. Aute ut non quis et nisi.",
    alt: "user8-img",
    id: getId(),
  },
  {
    img: user9,
    name: "birdin",
    quotes:
      "Elit cupidatat reprehenderit non exercitation veniam est nulla pariatur nulla deserunt et in aute laborum. Qui ullamco sint esse ad. Deserunt esse Lorem est non et culpa non consequat et proident consequat cupidatat magna magna. Nulla esse ullamco quis reprehenderit dolore.",
    alt: "user9-img",
    id: getId(),
  },
];

let iconStyle2 =
  "text-xl mx-auto text-white duration-150 ease-in hover:text-sky-400 cursor-pointer";
export const socials = [
  {
    icon: <FaFacebookSquare className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaInstagram className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaXTwitter className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaYoutube className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <SiMicrosoft className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaGithub className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaLinkedin className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
  {
    icon: <FaUnsplash className={iconStyle2} />,
    link: "#",
    id: getId(),
  },
];
