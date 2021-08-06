import React from "react";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./OverviewCardList.scss";
import facebookLogo from "../../images/icon-facebook.svg";
import twitterLogo from "../../images/icon-twitter.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import youtubeLogo from "../../images/icon-youtube.svg";
import upIcon from "../../images/icon-up.svg";
import downIcon from "../../images/icon-down.svg";

const OverviewCardList = () => {
  return (
    <div className="overview__cards">
      <ul className="overview__list">
        <li className="overview__item">
          <OverviewCard
            title="page views"
            logo={facebookLogo}
            logoAlt="facebook icon"
            count="87"
            arrowIcon={upIcon}
            countPercent="3%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="likes"
            logo={facebookLogo}
            logoAlt="facebook icon"
            count="52"
            arrowIcon={downIcon}
            countPercent="2%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="likes"
            logo={instagramLogo}
            logoAlt="instagram icon"
            count="5462"
            arrowIcon={upIcon}
            countPercent="2257%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="profile views"
            logo={instagramLogo}
            logoAlt="instagram icon"
            count="52k"
            arrowIcon={upIcon}
            countPercent="1375%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="retweets"
            logo={twitterLogo}
            logoAlt="twitter icon"
            count="117"
            arrowIcon={upIcon}
            countPercent="303%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="likes"
            logo={twitterLogo}
            logoAlt="twitter icon"
            count="507"
            arrowIcon={upIcon}
            countPercent="553%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="likes"
            logo={youtubeLogo}
            logoAlt="youtube icon"
            count="107"
            arrowIcon={downIcon}
            countPercent="19%"
          />
        </li>
        <li className="overview__item">
          <OverviewCard
            title="total views"
            logo={youtubeLogo}
            logoAlt="youtube icon"
            count="1407"
            arrowIcon={downIcon}
            countPercent="12%"
          />
        </li>
      </ul>
    </div>
  );
};

export default OverviewCardList;
