import React from "react";
import "./routers.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../view/home/Home";
import Product from "../components/Product/Product";
import Contact from "../components/contact/Contact";
import SingleProduct from "../SingleProduct";
import AboutPage from "../view/aboutPage/AboutPage";
import Header from "../components/header/Header";
import Subheader from "../components/Subheader/Subheader";
import Footer from "../components/footer/Footer";
import Event from "../components/event/Event";
import Login from "../components/loginpageandsignup/Login";
import Service from "../Service";
import Privacy from "../components/privacy/Privacy";
import ShortCode from "../components/shortCode/ShortCode";
import Faq from "../components/faq/Faq";
import StickyNavbar from "../components/stickyNavbar/StickyNavbar";
import Categories from "../components/category/Category";
import Mycart from "../components/mycart/Mycart";
import Newsletter from "../components/newsletter/Newsletter";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import PageNotFound from "../components/errorpage/PageNotFound";
import Payment from "../components/payment/Payment";
import Hotoffers from "../components/Hotoffers/Hotoffers";
import Checkout from "../view/checkoutpage/Checkout";
import Practice from "../components/practice/Practice";
import ForgetPassword from "../components/loginpageandsignup/ForgetPassword";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Subheader />
      <Breadcrumb />
      <div className="router-container">
      
        <div className="router-sidebar">
          <StickyNavbar />
        </div>
       
        <div className="router-pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/events" element={<Event />} />
            <Route path="/product" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shortcode" element={<ShortCode />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/mycart" element={<Mycart />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/hotoffers" element={<Hotoffers />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Routes>
        </div>
      </div>
      <Newsletter />
      <div className="footer-container">
        <Footer />
      </div>
    </Router>
  );
};
// routing ends

export default Routers;
