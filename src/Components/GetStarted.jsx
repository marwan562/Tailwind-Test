const GetStarted = () => {
  return (
    <main>
      <div className="   container flex justify-center  relative">
        <div className=" -top-[160px] md:-top-[130px] bg-[#1c2230] absolute px-[70px] py-[50px] max-w-full text-white text-center rounded-xl ">
          <h3 className=" text-[30px] md:text-[40px] font-semibold">
            Get early access today
          </h3>
          <p className=" my-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
            adipiscing elit. Mauris nec adipiscing
          </p>
          <form className=" mt-4 ">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              className=" text-lg pl-5 p-3 text-pretty  outline-primary outline-none text-black mb-5 md:mb-0 w-[400px] rounded-full  mr-[15px]"
            />
            <button className=" ml-[15px] text-white font-medium  bg-[rgb(66,176,209)] hover:bg-[#8cdae4] transition-all duration-200;  w-[200px] h-[50px] rounded-[30px] ">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
