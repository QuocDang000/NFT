import React from "react";

import { NAV_ITEMS } from "@/const";

import { useNavbar } from "./useNavbar";

import "./navbar.scss";

export const Navbar: React.FC = () => {
  const {
    activeIndex,
    isMobileMenuOpen,
    handleNavClick,
    handleNavigate,
    toggleMobileMenu,
    getMenuIcon,
  } = useNavbar();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <img src={getMenuIcon()} alt={isMobileMenuOpen ? "Close" : "Open"} />
        </button>

        <a href="/#" className="logo-link">
          <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleNavClick(index)}
            >
              <a href={`/#${item.toLowerCase()}`} className="nav-link">
                {item.replace("ITEMS", "ITEMS ")}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <button
          className="btn-signup"
          onClick={() => handleNavigate("/signup")}
        >
          SIGN UP
        </button>
        <button className="btn-login" onClick={() => handleNavigate("/login")}>
          LOG IN
        </button>
      </div>
    </nav>
  );
};
