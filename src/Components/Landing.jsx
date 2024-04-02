import ImageCurvy from "./ImageCurvy";

const Landing = () => {
  return (
    <section className=" bg-[hsl(222,26%,15%)]">
      <div className=" container pt-[200px]">
        <div className=" m-auto w-[725px]  max-w-full ">
          <img
            src="\images\illustration-intro.png"
            alt="landing"
            className=" w-full h-fit"
          />
        </div>
        <div className=" px-[10px]  text-white text-center">
          <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
            All your files in one secure location,
            <br />
            accessible anywhere.
          </h1>
          <p className=" font-normal text-lg px-[15px] mx-auto md:w-[600px] max-w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
            tincidunt neque. Duis nulla lectus, tristique ac mattis quis,
            efficitur ac nunc. Integer mollis.
          </p>
          <a href="/">
            <button className=" my-[20px] text-white font-medium m-auto flex justify-center items-center bg-[rgb(66,176,209)] hover:bg-[#8cdae4] transition-all duration-200;  w-[200px] h-[50px] rounded-[30px] ">
              Get Started
            </button>
          </a>
        </div>
      </div>
      <ImageCurvy/>
    </section>
  );
};

export default Landing;
