import React from "react";

import checkButton from "./CheckButton"
const bell = process.env.PUBLIC_URL + "/images/Bell.png";
const hamburger = process.env.PUBLIC_URL + "/images/hamburger.png";
const navArrow = process.env.PUBLIC_URL + "/images/navArrow.png";



function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <img className="navArrow" src={navArrow} alt="navArrow" />
          </li>
          <li>
            <img className="bell" src={bell} alt="bell" />
          </li>
          <li>
              <img className="hamburger" src={hamburger} alt="hamburgermenu" onClick={(checkButton)}/>
          </li>
        </ul>
      </div>
    </>

  );
  
}

export default Navbar;
