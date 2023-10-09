import React from "react";

const Order = ({ title, subtitle }) => {
  return (
    <>
      <div className="order">
        <p> {title} </p>
        <p>
          <i className="fa-solid fa-turkish-lira-sign"></i> {subtitle}
        </p>
      </div>
    </>
  );
};

export default Order;
