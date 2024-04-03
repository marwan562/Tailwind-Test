import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <section className=" bg-[#0c1524] pt-[320px] pb-[100px] text-white">
      <div className="  px-[20px] container">
        <a>
          <img
            className=" w-[175px] h-[66px] object-contain"
            src="/images/logo.svg"
            alt="log-img"
          />
        </a>
        <main className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4   text-center gap-[100px] mt-[40px]">
          <div className="flex  gap-[20px]">
            <img
              src="/images/icon-location.svg"
              alt="location-img"
              className=" w-[20px] h-[20px] object-contain"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis,
              efficitur ac nunc. Integer mollis.
            </p>
          </div>
          <div>
            <div className=" mb-4 flex gap-5">
              <img
                className=" w-[20px] h-[20px] object-contain"
                src="/images/icon-phone.svg"
                alt="phone-icon"
              />
              <p>+2012701189684</p>
            </div>
            <div className="flex  gap-5">
              <img
                className=" w-[20px] h-[20px] object-contain"
                src="/images/icon-email.svg"
                alt="email-icon"
              />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div>
            <div className=" grid gap-5  grid-cols-2">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Jobs</p>
              <p>Terms</p>
              <p>Press</p>
              <p>Privacy</p>
              <p>Blog</p>
            </div>
          </div>
          <div className=" flex items-center  gap-5">
            <a href="/">
              <FaFacebookF
                className=" cursor-pointer border p-2 rounded-full"
                size={40}
                title="Facebook"
              />
            </a>
            <a href="/">
              <FaTwitter
                className=" cursor-pointer border p-2 rounded-full"
                size={40}
                title="Twitter"
              />
            </a>
            <a href="/">
              <FaInstagram
                className=" cursor-pointer border p-2 rounded-full"
                size={40}
                title="Instagram"
              />
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Footer;
