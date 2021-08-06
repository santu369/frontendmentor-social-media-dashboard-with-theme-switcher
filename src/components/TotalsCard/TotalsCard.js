import React from "react";
import "./TotalsCard.scss";

const TotalsCard = ({
  logo,
  logoAlt,
  username,
  count,
  countWord,
  arrowIcon,
  statsToday,
}) => {
  return (
    <div className="totals__card" data-border={logoAlt.split(" ")[0]}>
      <div className="totals__top">
        <img className="totals__social-icon" src={logo} alt={logoAlt} />
        <p className="totals__username">{username}</p>
      </div>
      <div className="totals__middle">
        <strong className="totals__count">{count}</strong>
        <p className="totals__count-word">{countWord}</p>
      </div>
      <div className="totals__bottom">
        <img className="totals__arrow-icon" src={arrowIcon} alt="" />
        <p
          className="totals__stats-today"
          data-color={arrowIcon.includes("up")}
        >
          {statsToday}
        </p>
      </div>
    </div>
  );
};

export default TotalsCard;
