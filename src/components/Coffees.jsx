import React from "react";
import Order from "./Order";

const Coffees = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Sıcak Kahveler</span>
          <img src="media/coffe.png" alt="" width={"980px"} height={"1100px"} />
          <div className="box">
            <span className="subtitle">Türk Kahvesi&Filtre Kahve</span>
            <Order title={"Türk Kahvesi"} subtitle={"35,00"} />
            <Order title={"Double Türk Kahvesi"} subtitle={"50,00"} />
            <Order title={"Double Menengiç Kahvesi"} subtitle={"50,00"} />
            <Order
              title={"Double Diyarbakir Dibek Kahvesi"}
              subtitle={"50,00"}
            />
            <Order title={"Sıcak çikolata"} subtitle={"40,00"} />
            <Order title={"Filtre Kahve"} subtitle={"40,00"} />
            <Order title={"Sütlü Filtre Kahve"} subtitle={"45,00"} />
            <Order title={"Salep"} subtitle={"40,00"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffees;
