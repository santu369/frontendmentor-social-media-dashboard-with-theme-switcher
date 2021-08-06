import React from "react";
import "./TotalsCardList.scss";
import TotalsCard from "../TotalsCard/TotalsCard";
import facebookLogo from "../../images/icon-facebook.svg";
import twitterLogo from "../../images/icon-twitter.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import youtubeLogo from "../../images/icon-youtube.svg";
import upIcon from "../../images/icon-up.svg";
import downIcon from "../../images/icon-down.svg";

const TotalsCardList = () => {
  return (
    <div className="totals__cards">
      <ul className="totals__list">
        <li className="totals__item">
          <TotalsCard
            logo={facebookLogo}
            logoAlt="facebook icon"
            username="@nathanf"
            count="1987"
            countWord="followers"
            arrowIcon={upIcon}
            statsToday="12 today"
          />
        </li>
        <li className="totals__item">
          <TotalsCard
            logo={twitterLogo}
            logoAlt="twitter icon"
            username="@nathanf"
            count="1044"
            countWord="followers"
            arrowIcon={upIcon}
            statsToday="99 today"
          />
        </li>
        <li className="totals__item">
          <TotalsCard
            logo={instagramLogo}
            logoAlt="instagram icon"
            username="@realnathanf"
            count="11k"
            countWord="followers"
            arrowIcon={upIcon}
            statsToday="1099 today"
          />
        </li>
        <li className="totals__item">
          <TotalsCard
            logo={youtubeLogo}
            logoAlt="youtube icon"
            username="Nathan F."
            count="8329"
            countWord="subscribers"
            arrowIcon={downIcon}
            statsToday="144 today"
          />
        </li>
      </ul>
    </div>
  );
};

export default TotalsCardList;
