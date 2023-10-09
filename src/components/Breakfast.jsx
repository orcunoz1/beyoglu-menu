import React from "react";
import Order from "./Order";

const Breakfast = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Kahvaltı</span>
          <div className="soups box">
            <span className="subtitle">Çorbalar</span>
            <Order title={"Az Mercimek Çorbası"} subtitle={"40,00"} />
            <Order title={"Tam Mercimek Çorbası"} subtitle={"50,00"} />
            <Order title={"Terbiyeli Mercimek Çorbası"} subtitle={"60,00"} />
          </div>
          <div className="snacks box">
            <span className="subtitle">Aperatifler</span>
            <Order title={"Pişi (5 adet)"} subtitle={"40,00"} />
            <Order title={"Patates Tava"} subtitle={"50,00"} />
            <Order title={"Soğan Halkası 8 Adet"} subtitle={"40,00"} />
          </div>
          <div className="eggs box">
            <span className="subtitle">Yumurtalar</span>
            <Order title={"Sucuklu Yumurta"} subtitle={"60,00"} />
            <Order title={"Menemen"} subtitle={"60,00"} />
            <Order title={"Kavurmali Yumurta"} subtitle={"90,00"} />
            <Order title={"Peynirli Omlet"} subtitle={"60,00"} />
            <Order title={"Kaşarlı Omlet"} subtitle={"60,00"} />
            <Order title={"Sebzeli Omlet"} subtitle={"60,00"} />
            <Order title={"Kavurmalı Omlet"} subtitle={"90,00"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
