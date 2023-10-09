import React from "react";
import Explanation from "./ Explanation";

const Toast = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Tost</span>
          <img src="media/tost.png" alt="" />
          <Explanation
            title={"Sucuklu Tost"}
            subtitle={"70,00"}
            explanation={
              "Sandviç ekmeği icerisinde dana sucuk Patates kızartması ve yeşillik ile servis edilir"
            }
          />
          <Explanation
            title={"Kaşarlı Tost"}
            subtitle={"70,00"}
            explanation={
              "Sandviç ekmeği içerisinde kaşar Patates kızartması ve yeşillik ile servis edilir"
            }
          />
          <Explanation
            title={"Karışık Tost"}
            subtitle={"80,00"}
            explanation={
              "Sandviç ekmeği içerisinde dana sucuk ve kaşar dilimleri Patates kızartması ve yeşillik ile servis edilir"
            }
          />
          <Explanation
            title={"Kavurmalı Karışık Tost"}
            subtitle={"100,00"}
            explanation={
              "Sandviç ekmeği içerisine dana kavurma ve kaşar dilimleri Patates kızartması ve yeşillik ile servis edilir"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Toast;
