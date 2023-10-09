import React from "react";
import Explanation from "./ Explanation";
import Order from "./Order";

const Waffle = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Waffle & Sufle</span>
          <img
            src="media/waffle.png"
            alt=""
            width={"980px"}
            height={"1200px"}
          />
          <Order title={"Suffle"} subtitle={"75,00"} />
          <Explanation
            title={"Klasik waffle"}
            subtitle={"130,00"}
            explanation={
              "Sütlü dip sos üzerine muz, çilek, kivi, parça fındık, parça fıstık, sütlü üst sos"
            }
          />
          <Explanation
            title={"Çikolata Aşkı"}
            subtitle={"130,00"}
            explanation={
              "Bitter dip sos üzerine muz, çilek, kivi, toz fındık, ceviz, damla bitter drop, bitter üst sos"
            }
          />
          <Explanation
            title={"Kesme Dondurmalı Waffle"}
            subtitle={"170,00"}
            explanation={
              "Sütlü dip sos üzerine muz, çilek, kesme dondurma, ceviz, bitter üst sos"
            }
          />
          <Explanation
            title={"Katmer"}
            subtitle={"185,00"}
            explanation={"İki Kişiliktir"}
          />
          <Order title={"Kesme Dondurma"} subtitle={"50,00"} />
        </div>
      </div>
    </>
  );
};

export default Waffle;
