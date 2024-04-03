/* eslint-disable react/prop-types */
const ImageCurvy = ({ status }) => {
  return (
    <div className={` w-full h-[200px] ${status == "down" && "rotate-180"}`}>
      <img
        src="/images/bg-curvy-desktop.svg"
        alt="img-curvy"
        className="   w-full h-full"
      />
    </div>
  );
};

export default ImageCurvy;
