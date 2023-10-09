import React from "react";
import Explanation from "./ Explanation";

const Salad = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Salatalar</span>
          <img src="media/salad.jpeg" alt="" width={"980px"} height={"960px"} />
          <Explanation
            title={"Tavuk Salata"}
            subtitle={"140,00"}
            explanation={
              "130gr ızgara tavuk bonfile, Akdeniz yeşilliği, iceberg marul, roka, salatalık, domates, zeytinyağı ve balzemik sirke"
            }
          />
          <Explanation
            title={"Tavuklu Sezar Salata"}
            subtitle={"150,00"}
            explanation={
              "130gr ızgara tavuk bonfile, marul, çeri domates, kruoton ekmeği, kaşar peyniri, kornişon turşu, sezar sos ile"
            }
          />
          <Explanation
            title={"Izgara Salata"}
            subtitle={"200,00"}
            explanation={
              "100gr ızgara fileto dana bonfile, akdeniz yeşilliği, iceburg marul, roka, salatalık, domates, zeytinyağı, balzamik sirke ve kekik"
            }
          />
          <Explanation
            title={"Hellim Salata"}
            subtitle={"140,00"}
            explanation={
              "Akdeniz yeşilliği,kızartılmış hellim peyniri dilimleri,salatalık,cerry domates,mısır,siyah zeytin"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Salad;
