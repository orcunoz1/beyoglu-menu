import React from "react";
import Order from "./Order";
const Meatball = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Çiğ Köfteler</span>
          <img src="media/kofte.jpg" alt="" />
          <Order title={"Çiğ Köfteler"} subtitle={"60,00"} />
        </div>
      </div>
    </>
  );
};

export default Meatball;
