import React from "react";
import "./Toggle.scss";

const Toggle = ({ toggle, onChange }) => {
  return (
    <div className="toggle">
      <label className="toggle__label-left" htmlFor="toggle-theme">
        dark mode
      </label>
      <label className="toggle__label-right">
        <input
          type="checkbox"
          id="toggle-theme"
          className="toggle__check"
          checked={toggle}
          onChange={onChange}
        />
        <span className="toggle__main"></span>
      </label>
    </div>
  );
};

export default Toggle;
