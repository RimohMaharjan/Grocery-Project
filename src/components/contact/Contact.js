import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    console.log(data);

    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us",
        {
          message: data.Message,
          subject: data.Subject,
          email: data.email,
          name: data.Name,
          contact: data.Telephone,
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",

          },  
        }
      )
      .then((response) => {
        console.log(response, "SUCCESS");
        toast.success("Your feedback has been noted");
      })
      .catch((error) => {
        console.log(error, "fail");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(formHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          border: "1px solid grey",
          padding: "10px",
        }}
      >
        <input {...register(" Name", { required: true })} placeholder="Enter your Name" />
        <br />
        <input {...register("Enter your Email", { required: true })} placeholder="Enter your Email" />
        <br />
        <input
          {...register("Enter your Telephone", { required: true })} placeholder="Enter your Telephone" />
        <br />
        <input
          {...register("Your Subject", { required: true })} placeholder="Your Subject" />
        <br />
        <input
          {...register("Your Message", { required: true })} placeholder="Your Message" />
        <br />

        <input
          type="submit"
          value="Submit"
          style={{
            display: "flex",
            width: "80px",
            padding: "10px",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "greenyellow",
          }}
        />
      </form>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.63251076307!2d85.29434235!3d27.720122749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ece8135209%3A0xa82eb67cf4731fa8!2sSwayambhu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1667900959100!5m2!1sen!2snp"></iframe>
      </div>
    </div>
  );
};



export default Contact;


