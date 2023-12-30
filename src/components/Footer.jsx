import { socials } from "../data/data";
import uuid from "react-uuid"

import googleplay from "../assets/download/google-play-badge.png";
import appstore from "../assets/download/download-on-the-app-store-apple-logo-svgrepo-com.svg";

const company = [
  "about us",
  "our offerings",
  "newsroom",
  "investors",
  "blog",
  "carers",
  "AI",
];
const products = ["ride", "drive", "eat"];
const global = ["safety", "diversity and inclusion"];



// Ref: https://www.datocms-assets.com/48294/1611758037-2-footer-web-from-uber.jpg?auto=format
const Footer = () => (
  <footer className="w-full flex flex-col items-center mt-[40px] px-[80px] py-[30px] text-slate-50 bg-black font-poppins capitalize">
    <div className=" self-start my-6 text-start cursor-default">
      <h1 className="text-xl font-bold">react project</h1>
      <p className="mt-4 text-sm">visit help center</p>
    </div>
    <div className="flex mt-8 w-full items-start justify-around">
      <ul className="flex-1 list-none">
        <li>
          <h3 className="font-bold text-xl mb-4">company</h3>
        </li>
        {company.map((v) => (
          <li key={uuid()} className="text-sm mb-3 indent-2">
            <a href="#" className="hover:text-sky-400 duration-150 ease-in">
              {v}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex-1 list-none">
        <li>
          <h3 className="font-bold text-xl mb-4">products</h3>
        </li>
        {products.map((v) => (
          <li key={uuid()} className="text-sm mb-3 indent-2">
            <a href="#" className="hover:text-sky-400 duration-150 ease-in">
              {v}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex-1 list-none">
        <li>
          <h3 className="font-bold text-xl mb-4">global</h3>
        </li>
        {global.map((v) => (
          <li key={uuid()} className="text-sm mb-3 indent-2">
            <a href="#" className="hover:text-sky-400 duration-150 ease-in">
              {v}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-row items-center justify-between w-full mt-6 mb-4">
      <div className=" w-1/2">
        {socials.map((item) => (
          <a
            key={item.id}
            className=" inline-flex m-auto w-12 h-12"
            href={item.link}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex flex-row items-center justify-end w-1/2">
        <a href="" download={""} className="h-[12%] w-[26%] me-2 cursor-pointer">
          <img
            src={googleplay}
            alt="googleplay badge"
          />
        </a>
        <a href="" download={""} className=" h-[10%] w-[23%] cursor-pointer">
          <img
            src={appstore}
            alt="appstore badge"
          />
        </a>
      </div>
    </div>
    <div className="h-[1px] bg-gray-600 w-full mb-6"></div>
    <div className="flex items-center justify-between w-full text-gray-500 text-sm cursor-default">
      <div>
        <p>&copy; {new Date().getFullYear()} all right reserved</p>
      </div>
      <div>
        <p className="inline-flex me-6">privacy</p>
        <p className="inline-flex me-6">accessibiity</p>
        <p className="inline-flex">terms</p>
      </div>
    </div>
  </footer>
);

export default Footer;
