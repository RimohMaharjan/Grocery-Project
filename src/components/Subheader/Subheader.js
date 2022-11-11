import React from "react";

const Subheader = () => {
  return (
    <div>
      <div class="logo_products">
        <div class="container">
          <div class="w3ls_logo_products_left">
            <h1 style={{ fontSize: "32px" }}>
              <a href="/">
                <span>Grocery</span> Store
              </a>
            </h1>
          </div>
          <div class="w3ls_logo_products_left1">
            <ul class="special_items">
              <li>
                <a href="/events">Events</a>
                <i>/</i>
              </li>
              <li>
                <a href="/about">About Us</a>
                <i>/</i>
              </li>
              <li>
                <a href="/category">Best Deals</a>
                <i>/</i>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
            </ul>
          </div>
          <div class="w3ls_logo_products_left1">
            <ul class="phone_email">
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>(+977) 0987654
              </li>
              <br /><br />
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:store@grocery.com">store@grocery.com</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
