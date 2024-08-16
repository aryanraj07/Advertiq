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

  return (
    <div className="navbar">
      {/* Our logo goes here */}
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/ec2f7a_ccaddf41359d46eaa2a7438b3ad595a0~mv2.png/v1/fill/w_169,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ADVERTIQ%20LOGO-01%20(1).png"
          alt="logo"
        />
      </div>
      {/* Our desktop menu goes here */}
      <div className="hidden md:flex justify-between items-center w-full ml-20">
        <ul className="navbar-links-container ">
          {navlinks.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange" : ""} hover:text-orange`
                }
                to={item.to}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="btn">Contact</button>
      </div>

      {/* Our mobile menu sidebar goes here */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <span className="material-symbols-outlined text-orange">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
        {isOpen && (
          <div className="absolute top-16 right-10">
            <ul className="navbar-links-container">
              {navlinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${isActive ? "text-orange" : ""} hover:text-orange`
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <button className="btn">Contact</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
