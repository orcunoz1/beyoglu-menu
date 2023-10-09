import React from "react";

const OrderDark = ({ title, subtitle }) => {
  return (
    <>
      <div className="order-dark">
        <p> {title} </p>
        <p>
          <i className="fa-solid fa-turkish-lira-sign"></i> {subtitle}
        </p>
      </div>
    </>
  );
};

export default OrderDark;
