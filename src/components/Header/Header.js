import React, { useState, useEffect } from "react";
import "./Header.scss";
import Toggle from "../Toggle/Toggle";

let timeout;
const animation = () => {
  const appEl = document.querySelector(".App");
  clearInterval(timeout);
  appEl.classList.remove("app-animate");
  void appEl.offsetWidth; // Restart Css Animation | CSS-Tricks : https://css-tricks.com/restart-css-animation/
  appEl.classList.add("app-animate");
};
const Header = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("colorscheme") === "dark") {
      setToggle(false);
      setMode("dark");
    } else if (window.localStorage.getItem("colorscheme") === "") {
      setToggle(true);
      setMode("");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setToggle(false);
        setMode("dark");
        setColorScheme("dark");
      }
    }
    animation();
  }, []);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (evt) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setToggle(false);
        setMode("dark");
        setColorScheme("dark");
      } else {
        setToggle(true);
        setMode("");
        setColorScheme("");
      }
      animation();
    });

  const onChange = () => {
    setToggle((prevValue) => !prevValue);
    animation();
    if (toggle === true) {
      setMode("dark");
      setColorScheme("dark");
    } else {
      setMode("");
      setColorScheme("");
    }
  };

  const setMode = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
  };

  const setColorScheme = (scheme) => {
    window.localStorage.setItem("colorscheme", scheme);
  };

  return (
    <header className="header">
      <div className="header__title-section">
        <h1 className="header__title">social media dashboard</h1>
        <p className="header__sub-title">total followers: 23,004</p>
      </div>
      <div className="header__toggle">
        <Toggle toggle={toggle} onChange={onChange} />
      </div>
    </header>
  );
};

export default Header;
