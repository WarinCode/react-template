import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Address = () => (
  <address className="flex flex-row w-full items-center justify-evenly flex-wrap capitalize mb-24 font-normal not-italic font-poppins cursor-default">
    <div className="flex flex-col items-center justify-center text-center p-[30px] bg-slate-100 rounded-lg shadow-xl h-56 w-max duration-300 ease-in-out hover:-translate-y-4">
      <FaPhone className="text-4xl my-4 text-cyan-500" />
      <p className=" text-lg">
        phone : <span className=" uppercase">+1 06x-xxx-xxxx</span>
      </p>
    </div>
    <div className="flex flex-col items-center justify-center text-center p-[30px] bg-slate-100 rounded-lg shadow-xl leading-7 h-56 w-max duration-300 ease-in-out hover:-translate-y-4">
      <FaAddressBook className="text-4xl my-4 text-teal-500" />
      <div className=" text-lg">
        <p>
          country : <span className="uppercase">usa</span>
        </p>
      </div>
      <div className=" text-lg">
        <p>address : 2932 Emeral Dreams Drive</p>
      </div>
      <div className=" text-lg">
        <p>city : La Salle</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center text-center p-[30px] bg-slate-100 rounded-lg shadow-xl h-56 w-max duration-300 ease-in-out hover:-translate-y-4">
      <MdEmail className="text-5xl my-4 text-emerald-400" />
      <p className=" text-lg">
        email : <span className="lowercase">varin@gmail.com</span>
      </p>
    </div>
  </address>
);

const Map = () => (
  <iframe
    className="w-full h-[400px] m-auto border-none"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52968775.950329944!2d-161.8571003364465!3d35.87455794658833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z4Liq4Lir4Lij4Lix4LiQ4Lit4LmA4Lih4Lij4Li04LiB4Liy!5e0!3m2!1sth!2sth!4v1703911611457!5m2!1sth!2sth"
    allowfullscreen="true"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
);

const Location = () => (
  <section className="flex flex-col items-center">
    <Address />
    <Map />
  </section>
);

export default Location;
