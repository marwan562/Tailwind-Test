import { useEffect, useState } from "react";

const Header = () => {
  const links = ["Features", "Team", "Signin"];
  const [navColor, setNavColor] = useState(false);
  const colorScrollDown = ` bg-[#0c1524] pt-[20px] pb-[20px]  `;
  const colorScrollUp = `pt-[50px] bg-transparent `;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log();
      if (window.scrollY > 100) {
        setNavColor(true);
      } else if (window.scrollY < 100) {
        setNavColor(false);
      }
    });
  });
  return (
    <header
      className={` ${
        navColor ? colorScrollDown : colorScrollUp
      }   fixed top-0 left-0 w-full z-50 transition-all duration-200 `}
    >
      <div className=" container  m-auto flex items-center justify-between">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className=" flex justify-center items-center gap-[50px]">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  className=" text-white opacity-[.9] hover:opacity-[1] hover:underline   transition-opacity duration-[5]"
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
