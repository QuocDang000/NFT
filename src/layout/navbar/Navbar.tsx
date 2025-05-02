import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.scss";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navItems = ["HOME", "ITEMS1", "ITEMS2", "ITEMS3", "ITEMS4"];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/#" className="logo-link">
          <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
        </a>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a href={`/#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn-signup" onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
        <button className="btn-login" onClick={() => navigate("/login")}>
          LOG IN
        </button>
      </div>
    </nav>
  );
};
