import React from "react";

const ExplanationDark = ({ title, subtitle, explanation }) => {
  return (
    <>
      <div className="explation">
        <div className="explation-dark-title">
          <span> {title} </span>
          <p>
            <i className="fa-solid fa-turkish-lira-sign"></i> {subtitle}
          </p>
        </div>
        <div className="explation-dark-subtitle">
          <p> {explanation} </p>
        </div>
      </div>
    </>
  );
};

export default ExplanationDark;
