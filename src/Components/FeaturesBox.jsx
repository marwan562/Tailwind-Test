// eslint-disable-next-line react/prop-types
const FeaturesBox = ({ title, icon, description }) => {
  return (
    <div className=" text-white flex justify-center items-center flex-col text-center  ">
      <img
        src={`/images/${icon}`}
        alt={title}
        className=" w-[80px] h-[80px] object-contain"
      />
      <h2 className=" text-lg font-semibold my-[15px]">{title}</h2>
      <p className=" text-sm font-normal">{description}</p>
    </div>
  );
};

export default FeaturesBox;
