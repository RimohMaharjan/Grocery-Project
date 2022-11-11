import React from "react";
import Payment from "../../components/payment/Payment";
import DeliveryAddress from "../../components/deliverypage/DeliveryAddress";
const Checkout = () => {
  return (
    <div>
      <DeliveryAddress />
      <Payment />
    </div>
  );
};

export default Checkout;
