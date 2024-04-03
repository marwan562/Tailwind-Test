/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const InformationList = ({ name, imgUrl, description, skils }) => {
  return (
    <div className=" rounded-t-xl z-20 text-white bg-secondry p-[30px] shadow-[8px_8px_1px_5px_#1c202c]">
      <p className=" mb-7 text-sm tracking-[1.3px]  font-normal">
        {description}
      </p>
      <div className="flex  gap-5 ">
        <img
          className="inline-block h-[50px] w-[50px] rounded-full ring-1 ring-white"
          src={imgUrl}
          alt={name}
        />
        <div>
          <h2 className=" text-[18px]  leading-4 mb-2">{name}</h2>
          <p className=" text-sm text-slate-500">{skils}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationList;
