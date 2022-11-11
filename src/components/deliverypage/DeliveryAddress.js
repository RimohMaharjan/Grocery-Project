import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";

const DeliveryAddress = () => {
  const [deliveryaddress, setDelivaryaddress] = useState();
  const submitAddress = (data) => {
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/delivery-address",
        {
          title: data.DeliveryAddress,
          latitude: data.Latitude,
          longitude: data.Longitude,
          isDefault: "true",
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data, "addressspass");
        setDelivaryaddress(response.data.data);
        localStorage.setItem("DeliveryAddress");
      })
      .catch((error) => {
        console.log(error, "address fail");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(submitAddress)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid gray",
          fontSize: "20px",
          width: "20%",
          margin: "auto",
        }}
      >
        <input
          {...register("DeliveryAddress", { required: true })}
          Placeholder="DeliveryAddress"
        />
        <br />
        <input {...register("Latitude")} Placeholder="Latitude" />
        <br />

        <input {...register("Longitude")} Placeholder="Longitude" />
        <br />

        <input type="submit" />
        <div>
          
        </div>
      </form>
    </>
  );
};

export default DeliveryAddress;
