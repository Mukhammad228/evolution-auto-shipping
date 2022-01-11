import React, { useState } from "react";
import HeaderForm from "./home__form/HeaderForm";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  const openNav = (e) => {
    e.currentTarget.previousSibling.classList.toggle("active");
  };

  const closeNav = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <section id="header">
      {/* <!-- Header - Start --> */}
      <header className="header">
        <div className={navbar ? "header__menu sticky" : "header__menu"}>
          <section>
            <ul className="menu">
              <li>
                <a href="#navbar">Home</a>
              </li>
              <li>
                <a href="#about__us">About Us</a>
              </li>
              <li>
                <a href="#services">How it works</a>
              </li>
              <li>
                <a href="#why__us">Why Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
            <div className="burger__menu">
              <ul id="mySidenav" onClick={closeNav}>
                <a href="#!" className="closeBtn">
                  &times;
                </a>
                <li>
                  <a href="#navbar">Home</a>
                </li>
                <li>
                  <a href="#about__us">About Us</a>
                </li>
                <li>
                  <a href="#services">How it works</a>
                </li>
                <li>
                  <a href="#why__us">Why Us</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
              <div className="burger__menu__icon" onClick={openNav}>
                <div className="menu__icon">
                  <div className="item"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className={navbar ? 'header__content active' : 'header__content'}>
          <div className="header__content__left">
            <p>PROFESSIONAL AUTO TRANSPORTATION SERVICE</p>
            <h1>
              FAST & RELIABLE <br /> AUTO TRANSPORT COMPANY
            </h1>
          </div>
          <div className="header__content__right">
            <HeaderForm/>
          </div>
        </section>
      </header>
      {/* <!-- Header - End --> */}
    </section>
  );
}

export default Header;
