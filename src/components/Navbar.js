import React from "react"



const bell = process.env.PUBLIC_URL + "/images/Bell.png"
const hamburger = process.env.PUBLIC_URL + "/images/hamburger.png"
const navArrow = process.env.PUBLIC_URL + "/images/navArrow.png"

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <ul>
                <li><img className="bell" src={bell} alt="bell"/></li>
                <li><img className="hamburger" src={hamburger} alt="hamburger"/></li>
                <li><img className="navArrow" src={navArrow} alt="navArrow"/></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;