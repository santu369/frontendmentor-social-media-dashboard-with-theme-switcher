import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__section">
        Challenge by
        <a
          className="footer__link"
          href="https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p className="footer__section">
        Coded by
        <a
          className="footer__link"
          href="https://twitter.com/santu69"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shiva Santosh Jana
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;