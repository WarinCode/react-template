const Heading = ({ text , id }) => (
    <>
        <h1 className="font-bold font-poppins text-3xl md:text-2xl sm:text-xl capitalize text-center" id={id} >{text}</h1>
        <hr className=" -mt-3 mb-8 w-full m-auto" />
    </>
)

export default Heading