import React from "react";
import Order from "./Order";

const Diyarbakır = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Diyarbakır Saç Tava</span>
          <img
            src="media/diyarbakır.png"
            alt=""
            width={"980px"}
            height={"1200px"}
          />
          <Order title={"Tek Kişilik Sac Tava"} subtitle={"350,00"} />
          <Order title={"2 Kişilikl Sac Tava"} subtitle={"700,00"} />
          <Order title={"3 Kişilik Sac Tava"} subtitle={"1.050,00"} />
        </div>
      </div>
    </>
  );
};

export default Diyarbakır;
