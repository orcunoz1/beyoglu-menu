import React from "react";
import Order from "./Order";

const Tea = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Çay & Bitki Çayları</span>
          <img src="media/tea.png" alt="" width={"980px"} height={"700px"} />
          <div className="box">
            <span className="subtitle">Sıcak İçecekler</span>
            <Order title={"Çay"} subtitle={"15,00"} />
            <Order title={"Fincan Çay"} subtitle={"20,00"} />
            <Order title={"Sıcak Süt"} subtitle={"25,00"} />
          </div>
          <div className="box">
            <span className="subtitle">Bitki Çayları</span>
            <Order title={"Yeşil Çay"} subtitle={"30,00"} />
            <Order title={"Ihlamur"} subtitle={"30,00"} />
            <Order title={"Ada Çayı"} subtitle={"30,00"} />
            <Order title={"Kış Çayı"} subtitle={"30,00"} />
            <Order title={"Papatya Çayı"} subtitle={"30,00"} />
            <Order title={"Form Çayı"} subtitle={"30,00"} />
            <Order title={"Aşk Çayı"} subtitle={"30,00"} />
            <Order title={"Detoks Çayı"} subtitle={"30,00"} />
            <Order title={"Relax Çayı"} subtitle={"30,00"} />
          </div>
          <div className="box">
            <span className="subtitle">Gerçek Meyveli Çaylar</span>
            <Order title={"Kuşburnu Çayı"} subtitle={"30,00"} />
            <Order title={"Mandalina Çayı"} subtitle={"30,00"} />
            <Order title={"Elma Çayı"} subtitle={"30,00"} />
            <Order title={"Nane&Limon Çayı"} subtitle={"30,00"} />
            <Order title={"Karadut Çayı"} subtitle={"30,00"} />
            <Order title={"Nar Çayı"} subtitle={"30,00"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tea;
