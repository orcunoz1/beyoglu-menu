import React from "react";
import Explanation from "./ Explanation";

const Barbecue = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <span className="title">Mangallar</span>
          <img src="media/mangal.png" alt="" width={"980px"} height={"920px"} />
          <Explanation
            title={"Kasap Köfte"}
            subtitle={"190,00"}
            explanation={"180gr kasap kıyma eti"}
          />
          <Explanation
            title={"Terbiyesiz Tavuk(Acısız)"}
            subtitle={"200,00"}
            explanation={"200gr dinlendirilmiş tavuk budu"}
          />
          <Explanation
            title={"Terbiyeli Tavuk(Acılı)"}
            subtitle={"200,00"}
            explanation={"200gr terbiyelendirilmiş acı soslu tavuk budu"}
          />
          <Explanation
            title={"Adana Kebap (Acılı)"}
            subtitle={"220,00"}
            explanation={"180gr zırhlı kuzu kaburga kıyması"}
          />
          <Explanation
            title={"Beyoğlu Kebap(Acısız)"}
            subtitle={"220,00"}
            explanation={"180gr zırhlı kuzu kaburga kıyması"}
          />
          <Explanation
            title={"Urfa Kebap(Acısız)"}
            subtitle={"220,00"}
            explanation={"180gr kuzu kaburga kıyması"}
          />
          <Explanation
            title={"Siverek Kebabı"}
            subtitle={"280,00"}
            explanation={
              "Yarım porsiyon Beyoğlu kebabı ve yarım porsiyon patlıcanlı kebap"
            }
          />
          <Explanation
            title={"Patlıcanlı Kebap"}
            subtitle={"300,00"}
            explanation={"Patlıcan arası zırhta kuzu eti"}
          />
          <Explanation
            title={"Ciğer"}
            subtitle={"240,00"}
            explanation={"160gr kuzu ciğer"}
          />
          <Explanation
            title={"Terbiyesiz Kuşbaşı(Acısız)"}
            subtitle={"330,00"}
            explanation={"200gr dinlendirilmiş dana bonfile"}
          />
          <Explanation
            title={"Terbiyeli Kuşbaşı(Acılı)"}
            subtitle={"330,00"}
            explanation={"200gr terbiyelenmiş soslu dana bonfile"}
          />
          <Explanation
            title={"Ali Nazik"}
            subtitle={"360,00"}
            explanation={
              "Közlenmiş patlıcan üzerine, terbiyelenmiş 200gr dana bonfile ile tereyağlı sos"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Barbecue;
