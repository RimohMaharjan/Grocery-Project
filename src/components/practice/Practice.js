import React from "react";
import axios from "axios";
import {  useState } from "react";

const Practice = () => {
  const [handler, sethandler] = useState([]);
  const handlepay1 = () => {
    axios
      .get(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      )
      .then((response) => {
        console.log(response, "success");
        sethandler(response);
      })
      .catch((error) => {
        console.log(error, "failed");
      });
  };

  return (
    <div>
      <input
        type="submit"
        value="paynw"
        onClick={() => handlepay1()}
        style={{ marginLeft: "300px" }}
      />
    </div>
  );
};

export default Practice;
