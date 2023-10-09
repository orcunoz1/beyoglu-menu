import React from "react";
import ExplanationDark from "./ExplanationDark";

const RedMeat = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Kırmızı Et</span>
          <img src="media/et.png" alt="" width={"980px"} height={"1290px"} />
          <ExplanationDark
            title={"Bodrum Çökertme"}
            subtitle={"330,00"}
            explanation={
              "Kibrit patates üstüne yoğurt, 200gr dana bonfile üzerine tereyağlı sos"
            }
          />
          <ExplanationDark
            title={"Fajita"}
            subtitle={"330,00"}
            explanation={"Jülyan 200gr dana bonfile"}
          />
          <ExplanationDark
            title={"Beyoğlu Gurme Special"}
            subtitle={"330,00"}
            explanation={"200gr doğranmış dana bonfile"}
          />
          <ExplanationDark
            title={"Mantarlı Bonfile"}
            subtitle={"330,00"}
            explanation={"200gr mantar soslu dana bonfile"}
          />
        </div>
      </div>
    </>
  );
};

export default RedMeat;
