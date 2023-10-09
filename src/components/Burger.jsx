import React from "react";
import Explanation from "./ Explanation";

const Burger = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Burger</span>
          <img src="media/burger.jpeg" alt="" />
          <Explanation
            title={"Chicken Burger"}
            subtitle={"150,00"}
            explanation={
              "Özel soslar ile marine edilmiş 150gr ızgara tavuk, domates, marul, burger turşusu, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası"
            }
          />
          <Explanation
            title={"Klasik Burger"}
            subtitle={"165,00"}
            explanation={
              "150gr dana eti,, domates, burger turşusu, marul, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası"
            }
          />
          <Explanation
            title={"Cheese Burger"}
            subtitle={"175,00"}
            explanation={
              "150gr dana eti, cheddar peyniri, domates, burger turşusu, marul, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Burger;
