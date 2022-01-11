import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";
import bbb from "../assets/images/footer__img/BBB.png";
import transport from "../assets/images/footer__img/transport-reviews.png";
import fmsca from "../assets/images/footer__img/fmcsa-logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const [footer, setFooter] = useState(false);

  const changeBgFooter = () => {
    if (window.scrollY >= 6075) {
      setFooter(true);
    } else {
      setFooter(false);
    }
  };

  window.addEventListener("scroll", changeBgFooter);

  return (
    <footer id="footer" className={footer ? 'footer active' : 'footer'}>
      <section>
        <div className="footer__logo">
          <a href="#navbar">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="footer__contact">
          <h4>CONTACT US</h4>
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
            </svg>
            <span>1600 N. Milwaukee Ave. #1004 Vernon Hills, IL 60061</span>
          </p>
          <p>
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>
              <a href="tel:(224) 955-7788">(224) 955-7788</a>
            </span>
          </p>
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
            <span>contact@evolutionautoshippinginc.com</span>
          </p>
        </div>
        <div className="footer__terms">
          <div className="footer__top">
            <div className="footer__img">
              <img src={bbb} alt="bbb" />
            </div>
            <div className="footer__img">
              <img src={transport} alt="transport__reviews" />
            </div>
            <div className="footer__img">
              <img src={fmsca} alt="fmcsa-logo" />
            </div>
          </div>
          <div className="footer__down">
            <p>2021 © Evloution Auto-Shipping. All rights reserved.</p> <br />{" "}
            <NavLink to="/terms">Terms and Conditions</NavLink>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
