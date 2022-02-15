import React from "react";

const bell = process.env.PUBLIC_URL + "/images/Bell.png";
const hamburger = process.env.PUBLIC_URL + "/images/hamburger.png";
const navArrow = process.env.PUBLIC_URL + "/images/navArrow.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <img className="navArrow" src={navArrow} alt="navArrow" />
          </li>
          <li>
            <img className="bell" src={bell} alt="bell" />
          </li>
          <li>
            <input className="toggleBurger" type="checkbox"/>
              <label htmlFor="toggleBurger">
                <img
                className="hamburger"
                src={hamburger}
                alt="hamburgermenu"
              />
              </label>
          </li>
        </ul>
        <nav className="hamburgerMenu">
          <a className="hamburgerLinks" href="www.google.com">
            Shuwooop{" "}
          </a>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
