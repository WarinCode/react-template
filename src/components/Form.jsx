import { useState, useRef } from "react";
import Button from "./Button";
import img from "../assets/bg/neven-myst-EFVuZbNYbG8-unsplash.jpg";

const Form = () => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);

  const formRef = useRef();
  const message = useRef();

  const api = "http://localhost:4000/api/sendData";

  const handleSubmit = async () => {
    formRef.current.clear();

    const body = JSON.stringify({
      firstname,
      lastname,
      email,
      message: message.current.value,
    });

    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
    const data = await response.json()
    console.log(data)
  };

  return (
    <section className="flex w-full font-poppins shadow-2xl">
      <div className="w-1/2">
        <img
          src={img}
          className="w-full h-full opacity-95"
          loading="lazy"
        />
      </div>
      <form
        action={api}
        method="post"
        className="w-1/2 text-slate-100 flex flex-col capitalize p-[40px] tracking-wide bg-slate-950"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <header className="text-center mt-4 mb-8 text-2xl font-bold">
            sent message
          </header>
        </div>
        <div className=" flex items-center justify-between gap-x-6">
          <span className="flex-1">
            <label htmlFor="firstname" className="block mb-2 font-bold">
              firstname
            </label>
            <input
              type="text"
              placeholder="firstname"
              id="firstname"
              name="firstname"
              className=" outline-none border-none w-full h-10 text-lg rounded-md p-6 caret-black text-black placeholder:capitalize"
              required
              autoSave={false}
              spellCheck={false}
              autoComplete={false}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </span>
          <span className="flex-1">
            <label htmlFor="lastname" className="block mb-2 font-bold">
              lastname
            </label>
            <input
              type="text"
              placeholder="lastname"
              id="lastname"
              name="lastname"
              className=" outline-none border-none w-full h-10 text-lg rounded-md p-6 border-2 border-rose-500 caret-black text-black placeholder:capitalize"
              required
              autoSave={false}
              spellCheck={false}
              autoComplete={false}
              onChange={(e) => setLastname(e.target.value)}
            />
          </span>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block mb-2 font-bold">
            email
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            className="outline-none border-none w-3/4 h-10 text-lg rounded-md p-6 border-2 border-gray-500 caret-black text-black placeholder:capitalize"
            required
            autoSave={false}
            spellCheck={false}
            autoComplete={false}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="message" className="block mb-2 font-bold">
            message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter some text"
            className="resize-none w-full p-6 outline-none rounded-md border-none text-black text-sm placeholder:capitalize"
            required
            ref={message}
          ></textarea>
        </div>
        <Button
          text={"send"}
          style={
            "my-8 w-full h-12 border-2 rounded-md font-bold capitalize text-white text-lg bg-transparent duration-300 ease-in-out hover:bg-white hover:text-black active:translate-y-2"
          }
          type={"submit"}
        />
      </form>
    </section>
  );
};

export default Form;
