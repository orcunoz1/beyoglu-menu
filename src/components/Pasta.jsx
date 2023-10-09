import React from "react";
import Explanation from "./ Explanation";

const Pasta = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Makarna</span>
          <img src="media/pasta.png" alt="" />
          <Explanation
            title={"Fettuccine Alfredo"}
            subtitle={"130,00"}
            explanation={
              "Julyen tavuk parçaları,mantar krema ve parmesan ile servis edilir"
            }
          />
          <Explanation
            title={"Napoliten Soslu penne"}
            subtitle={"120,00"}
            explanation={"Penne makarna,biber,domates sosu"}
          />
          <Explanation
            title={"Spagetti Bolonez"}
            subtitle={"130,00"}
            explanation={
              "Spagetti makarnası,dana kıyma,kuru soğan,havuç,biber,domates sosu"
            }
          />
          <Explanation
            title={"Tortellini Peynirli"}
            subtitle={"130,00"}
            explanation={"Kremalı sos parmesan peyniri"}
          />
        </div>
      </div>
    </>
  );
};

export default Pasta;
