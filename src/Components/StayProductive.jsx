const StayProductive = () => {
  return (
    <section>
      <div className=" container grid grid-cols-1 md:grid-cols-2  gap-[30px] text-white place-items-center">
        <div>
          <img
            src="/images/illustration-stay-productive.png"
            alt="img-productive"
          />
        </div>
        <div>
          <h3 className=" font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[.8px]">
            <p className="mb-[10px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec tincidunt neque. Duis nulla lectus,adipiscing elit. Mauris nec
              tincidunt.
            </p>
            <p className="">
              tristique ac mattis quis, efficitur ac nunc. Integer mollis, sit
              amet, consectetur adipiscing, sit adipiscing.
            </p>
          </div>
          <a
            href="#"
            className=" underline underline-offset-4  bg flex justify-start gap-2 items-center "
          >
            <p>See how Fylo works </p>
            <img
              src="/images/icon-arrow.svg"
              alt="Arrow-img"
              className=" w-[25px] h-[25px] object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
