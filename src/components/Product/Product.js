import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./product.css";

import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart";

const Hotoffers = () => {
  const Navigate = useNavigate();

  const dispatch = useDispatch();
  // login compulsary before  accessingaddtocart
  const handleAddToCart = (data) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };
  // -------------
  const [sellingitem, setSellingitem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      .then((res) => {
        console.log(res.data.data);
        setSellingitem(res.data.data.slice(10, 15));
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err, "sorry");
      });
  }, [setSellingitem]);

  return (
    <div class="top-brands">
      <div class="container">
        <div className="container-offer">
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "32px",
              textDecoration: "underline",
            }}
          >
            TOP PRODUCTS
          </h2>
          <div class="grid_3 grid_5">
            <div
              class="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              {isLoading ? (
                <>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "32px",
                    }}
                  >
                    Loading....
                  </p>
                </>
              ) : (
                <>
                  <div className="piece">
                    {sellingitem.map((data, index) => {
                      return (
                        <>
                          <div class="col-md-4 top_brand_left product-cart">
                            <div class="hover14 column">
                              <div
                                class="agile_top_brand_left_grid"
                                style={{
                                  width: "70%",
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              >
                                <div class="agile_top_brand_left_grid_pos">
                                  <img
                                    src="assets/images/offer.png"
                                    alt=" "
                                    class="img-responsive"
                                  />
                                </div>
                                <div
                                  class="product-Desc"
                                  style={{ width: "70%" }}
                                >
                                  {data.images.map((imgdata, index) => {
                                    return (
                                      <>
                                        <img
                                          src={imgdata.imageName}
                                          alt=""
                                          width="100px"
                                          height="70px"
                                        />
                                      </>
                                    );
                                  })}

                                  <p>ItemName:{data.title}</p>
                                  <p>Category: {data.categoryTitle}</p>

                                  {data.unitPrice.map((pricedata, index) => {
                                    return (
                                      <>
                                        <p>
                                          SellingPrice:
                                          {pricedata.sellingPrice}
                                        </p>
                                        <p>
                                          MarkedPrice: {pricedata.markedPrice}
                                        </p>
                                      </>
                                    );
                                  })}

                                  <div class="snipcart-details top_brand_home_details">
                                    <input
                                      onClick={() => handleAddToCart(data)}
                                      type="submit"
                                      name="submit"
                                      value="Add to cart"
                                      class="button"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotoffers;
