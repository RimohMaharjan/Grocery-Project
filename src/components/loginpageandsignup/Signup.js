import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // for validation of data
    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.mobile_number !== "" &&
      data.email !== "" &&
      data.password !== ""
    ) {
      toast.success("Account Register Successful");
      navigate("/Login");
      reset();

      // alert('successfully submitted')
    } else {
      toast.error("Fill empty field");
    }

    const signUpData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      mobile_number: data.mobile_number,
    };
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
        signUpData
      )
      .then((response) => {
        console.log(response, "sigup sucess");
        localStorage.setItem("signup_email", data.email);
        localStorage.setItem(
          "signupinfo",
          JSON.stringify({
            email: data.email,
            mobile_number: data.mobile_number,
            password: data.password,
            singupId: response.data.data.id,
          })
        );
      })
      .catch((error) => {
        console.log(error, "signup failed");
      });
  };

  return (
    <>
      <div class="form">
        <h2>Register an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First Name..."
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              Enter your first name
            </p>
          )}

          <input
            {...register("last_name", { required: true })}
            type="text"
            placeholder="Last Name..."
          />
          {errors.last_name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              Enter you last name
            </p>
          )}

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email Address"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>Enter your email</p>
          )}

          <input
            {...register("mobile_number", { pattern: /\d+/ })}
            type="text"
            placeholder="Mobile Number"
          />
          {errors.mobile_number && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
             Enter your phone number
            </p>
          )}

          <input
            {...register("password", {
              pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/,
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>
              The password must consist atleast 10 character, and must include number
            </p>
          )}

         
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Signup;
