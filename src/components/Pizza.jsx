import React from "react";
import ExplanationDark from "./ExplanationDark";

const Pizza = () => {
  return (
    <>
      <div className="container">
        <div className="dark-menu">
          <span className="dark-title">Pizza</span>
          <img src="media/pizza.png" alt="" width={"980px"} height={"640px"} />
          <ExplanationDark
            title={"İtalyan Pizza"}
            subtitle={"185,00"}
            explanation={
              "Domates sos, mozzarella, sucuk, zeytin, kekik, mantar, biber, yanında patates kızartması"
            }
          />

          <ExplanationDark
            title={"Karışık Pizza"}
            subtitle={"185,00"}
            explanation={
              "Domates sos, mozzarella, sucuk, salam, kırmızı biber, yeşil biber, mantar, zeytin, mısır, domates, yanında patates kızartması"
            }
          />
          <ExplanationDark
            title={"Sucuklu Pizza"}
            subtitle={"185,00"}
            explanation={
              "Domates sos, mozzarella, kasap sucuk,yanında patates kızartması"
            }
          />
          <ExplanationDark
            title={"Margarita Pizza"}
            subtitle={"185,00"}
            explanation={
              "Domates sos, mozzarella, fesleğen sos, yanında patates kızartması"
            }
          />
          <ExplanationDark
            title={"Dört Peynirli Pizza"}
            subtitle={"200,00"}
            explanation={
              "Domates sos, mozzarella, beyaz peynir, parmesan, kaşar peyniri, yanında patates kızartması"
            }
          />
          <ExplanationDark
            title={"Kavurmalı Pizza"}
            subtitle={"230,00"}
            explanation={
              "Domates sos, mozzarella, kavurma, yanında patates kızartması"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Pizza;
