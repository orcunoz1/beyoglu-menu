import React from "react";
import OrderDark from "./OrderDark";

const Lemonade = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Karadut-Limonata</span>
          <img src="media/limonata.png" alt="" />
          <OrderDark title={"Karadut"} subtitle={"40,00"} />
        </div>
      </div>
    </>
  );
};

export default Lemonade;
