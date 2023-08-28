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

  const navlink = (path) => {
    navigate(path);
    setIsMenuOpen(true);
  };

  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);

  // const toggleSubSubMenu = () => {
  //   setIsSubSubMenuOpen(!isSubSubMenuOpen);
  // };
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
    setIsMenuOpen(true);
  };
  const [activeClassId, setActiveClassId] = useState(1);

  const portf_list = [
    {
      id: 1,
      name: "ACCUEIL",
      path: "/",
    },
    {
      id: 2,
      name: "A PROPOS",
      path: "/apropos",
    },
    {
      id: 3,
      name: "PRODUITS",
      path: "/produits",
    },
    {
      id: 4,
      name: "CONTACT",
      path: "/contact",
    },
  ];
  const handleClick = (id, path) => {
    setActiveClassId(id);
    navlink(path);
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
            {portf_list.map((item) => (
              <li
                onClick={() => handleClick(item.id, item.path)}
                className={activeClassId === item.id ? "active" : ""}
              >
                <a className="sub-menu-item active cursor-pointer">
                  {item.name}
                </a>
              </li>
            ))}


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
