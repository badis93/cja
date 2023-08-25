import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);

  const toggleSubSubMenu = () => {
    setIsSubSubMenuOpen(!isSubSubMenuOpen);
  };
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <header
      id="topnav"
      className={"defaultscroll sticky" + (navBg ? " nav-sticky" : "")}
    >
      <div className="container">
        {/* Logo container*/}
        <div>
          <a className="logo cursor-pointer" onClick={() => navigate("/")}>
            <span className="logo-light-mode">
              <img
                src={require("../../../img/logocja.jpg")}
                className="l-dark"
                alt=""
                height={80}
              />
              <img
                src={require("../../../img/logocja.jpg")}
                className="l-light"
                alt=""
                height={80}
              />
            </span>
            <img
              src={require("../../../img/logocja.jpg")}
              className="logo-dark-mode"
              alt=""
              height={60}
            />
          </a>
        </div>
        {/* End Logo container*/}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <a
              className={isMenuOpen ? "navbar-toggle" : "navbar-toggle open"}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
            {/* End mobile menu toggle*/}
          </div>
        </div>
        {/*Login button Start*/}

        {/*Login button End*/}
        <div id="navigation" style={{ display: isMenuOpen ? "none" : "block" }}>
          {/* Navigation Menu*/}
          <ul className="navigation-menu nav-light">
            <li className="active">
              <a
                onClick={() => navigate("/")}
                className="sub-menu-item active cursor-pointer"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/apropos")}
                className="sub-menu-item cursor-pointer"
              >
                {" "}
                A propos
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/produits")}
                className="sub-menu-item cursor-pointer"
              >
                {" "}
                Produits
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/contact")}
                className="sub-menu-item cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
          {/*end navigation menu*/}
        </div>
        {/*end navigation*/}
      </div>
      {/*end container*/}
    </header>
  );
};

export default Navbar;
