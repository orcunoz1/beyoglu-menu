import React from "react";
import ExplanationDark from "./ExplanationDark";

const Chicken = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Beyaz Et</span>
          <img
            src="media/chicken.png"
            alt=""
            width={"980px"}
            height={"1280px"}
          />
          <ExplanationDark
            title={"Fesleğen Soslu Tavuk"}
            subtitle={"190,00"}
            explanation={"200gr fesleğen soslu tavuk"}
          />
          <ExplanationDark
            title={"Köri Soslu Tavuk"}
            subtitle={"190,00"}
            explanation={"200gr köri soslu tavuk"}
          />
          <ExplanationDark
            title={"Kremalı Mantarlı Tavuk"}
            subtitle={"190,00"}
            explanation={"200gr tavuk içine mantar ve krema"}
          />
          <ExplanationDark
            title={"Barbekü Soslu Tavuk"}
            subtitle={"190,00"}
            explanation={"200gr barbekü soslu tavuk"}
          />
        </div>
      </div>
    </>
  );
};

export default Chicken;
