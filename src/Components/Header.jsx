import { useEffect, useRef } from "react";

const Header = () => {
  const links = ["Features", "Team", "Signin"];
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = " 20px 0";
      } else if (window.scrollY < 85) {
        headerRef.current.style.background = " transparent";
        headerRef.current.style.padding = " 60px 0";
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className={" fixed py-[60px]  w-full z-50 transition-all duration-300"}
    >
      <div className=" container  flex items-center justify-between gap-[20px]   sm:gap-0 sm:px-[10px] md:px-5   sm:p-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className=" flex justify-center items-center gap-[50px]">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  className=" text-white opacity-[.9] hover:opacity-[1] hover:underline    transition-all duration-200"
                >
                  <a href={`${link.toLowerCase}`}>{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
