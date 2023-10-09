import React from "react";
import OrderDark from "./OrderDark";

const Cold = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Soğuk İçecekler</span>
          <img src="media/cold.jpeg" alt="" />
          <OrderDark title={"Su"} subtitle={"10,00"} />
          <OrderDark title={"Soda"} subtitle={"25,00"} />
          <OrderDark title={"Yayik Ayran"} subtitle={"30,00"} />
          <OrderDark title={"Kola"} subtitle={"40,00"} />
          <OrderDark title={"Fanta"} subtitle={"40,00"} />
          <OrderDark title={"FuseTea"} subtitle={"40,00"} />
          <OrderDark title={"Beyoğlu Gazoz"} subtitle={"40,00"} />
          <OrderDark title={"Zencefilli Beyoğlu Gazoz"} subtitle={"40,00"} />
          <OrderDark title={"Organik Adana Şalgamı"} subtitle={"30,00"} />
          <OrderDark title={"Churchil"} subtitle={"30,00"} />
          <OrderDark title={"Soda-limon"} subtitle={"30,00"} />
          <OrderDark title={"Taze Sıkma Portakal Suyu"} subtitle={"45,00"} />
        </div>
      </div>
    </>
  );
};

export default Cold;
