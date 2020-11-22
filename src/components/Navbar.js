import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Gabriela Barros <span class="icon"></span>
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "far fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
            Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle="btn--outline">Test</Button>}
    </nav>
  );
}

export default Navbar;
