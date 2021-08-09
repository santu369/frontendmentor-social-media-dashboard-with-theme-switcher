import React from "react";
import "./OverviewCard.scss";

const OverviewCard = ({
  title,
  logo,
  logoAlt,
  count,
  arrowIcon,
  countPercent,
}) => {
  return (
    <div
      className="overview__card"
      tabIndex="0"
      data-border={logoAlt.split(" ")[0]}
    >
      <h3 className="overview__heading">{title}</h3>
      <img src={logo} alt={logoAlt} className="overview__logo" />
      <p className="overview__count">{count}</p>
      <div className="overview__count-stats">
        <img src={arrowIcon} className="overview__arrow-icon" alt="" />
        <p
          className="overview__count-percent"
          data-color={arrowIcon.includes("up")}
        >
          {countPercent}
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
