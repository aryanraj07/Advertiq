import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Services",
      to: "/services",
    },
    {
      id: 3,
      name: "Contact",
      to: "/contact",
    },
    {
      id: 4,
      name: "About",
      to: "/about",
    },
  ];
  const closeMenu = () => {
    setIsOpen(false);
  };
  const Menu = ({ isMoblie }) => {
    return (
      <ul className="navbar-links">
        {navlinks.map((item) => (
          <li key={item.id}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange" : ""} hover:text-orange`
              }
              to={item.to}
              onClick={isMoblie ? closeMenu : null}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="navbar">
      {/* Our logo goes here */}
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/ec2f7a_ccaddf41359d46eaa2a7438b3ad595a0~mv2.png/v1/fill/w_169,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ADVERTIQ%20LOGO-01%20(1).png"
          alt="logo"
        />
      </div>
      {/* Our desktop navbar goes here*/}

      <div className="hidden md:block">
        <Menu isMoblie={false} />
      </div>

      {/* Our mobile navbar goes here */}
      <div className=" md:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <span className="material-symbols-outlined text-orange">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-16 right-10   z-10  bg-white p-4 shadow-lg md:hidden ">
            <Menu isMoblie={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
