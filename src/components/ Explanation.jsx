import React from "react";

const Explanation = ({ title, subtitle, explanation }) => {
  return (
    <>
      <div className="explation">
        <div className="explation-title ">
          <span> {title} </span>
          <p>
            <i className="fa-solid fa-turkish-lira-sign"></i> {subtitle}
          </p>
        </div>
        <div className="explation-subtitle">
          <p> {explanation} </p>
        </div>
      </div>
    </>
  );
};

export default Explanation;
