import React, { useState } from "react";

import checkButton from "./CheckButton";
// const bell = process.env.PUBLIC_URL + "/images/Bell.png";
const hamburger = process.env.PUBLIC_URL + "/images/hamburger.png";
const navArrow = process.env.PUBLIC_URL + "/images/navarrow.png";

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };

  const[navBarOpen2,setNavBarOpen2] = useState(false);

  const handleToggle2 = () => {
    setNavBarOpen2((prev) => !prev);
  }

  

  return (
    <>
      <div className="navbar">
        <ul className={`menuNav ${navBarOpen ? " showMenu" : ""}`}>
          <li className="navLinks">
            <a href="/">About</a>
          </li>

          <li className={`menuNavLeft ${navBarOpen2 ? " showMenuLeft" : ""}`}>

          </li>

          <li className="navbarImages">
            <img
              className="navArrow"
              src={navArrow}
              alt="navArrow"
              onClick={handleToggle2}
            />
            </li>

          {/* <li className="navbarImages">
            <img className="bell" src={bell} alt="bell" />
          </li> */}'
          '
          <li className="navbarImages">
            <img
              className="hamburger"
              src={hamburger}
              alt="hamburgermenu"
              onClick={handleToggle}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
