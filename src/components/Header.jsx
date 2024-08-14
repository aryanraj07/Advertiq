import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Services",
      to: "/",
    },
    {
      id: 3,
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* Our logo goes here */}
        <div className="logo">Logo</div>
        {/* Our menu links goes here */}
        {Menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default Header;
