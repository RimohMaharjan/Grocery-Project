import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./payment.css";

const Payment = () => {
  const [payment, setPayment] = useState([]);
  const handlepay = () => {
    toast.success("Payment recieved", { position: "top-left" });
    toast.info("Your delivery will be done soon", {
      position: "top-right",
    });
  };

  useEffect(() => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/payment-method", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((response) => {
        console.log(response.data.data, "Payment Success");
        setPayment(response.data.data);
      })
      .catch((error) => {
        console.log(error, "Payment Failed");
      });
  }, [setPayment]);

  return (
    <div>
      <div className="Payment-title">
        <h3>Payroll </h3>
      </div>
      {payment.map((payroll) => {
        return (
          <div>
            <div className="payment-container">
              <div className="pay-design">
                <img src={payroll.icon} alt="" />
                <p className="payment-title">{payroll.title}</p>
                <div className="botton">
                  <button onClick={() => handlepay()}>Pay Here</button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Payment;
