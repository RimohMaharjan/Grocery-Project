import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerdata from "./Bannerdata";
import "./banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {Bannerdata.map((dataa, index) => {
          return (
            <div>
              <div>
                <img className="image-slider" src={dataa.image} alt="" />
                <div class="slide-desc">
                  <p>{dataa.text1}</p>
                  <p> {dataa.text2}</p>
                  <p>{dataa.text3}</p>
                  <Link to="/product">
                    <button className="banner-button">shop now</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div class="banner_bottom">
        <div class="wthree_banner_bottom_left_grid_sub"></div>
        <div class="wthree_banner_bottom_left_grid_sub1">
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/4.jpg" alt=" " class="img-responsive" style={{ height: 310}}/>
              <div class="wthree_banner_bottom_left_grid_pos">
                <h4>
                  Discount Offer <span>25%</span>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/5.jpg" alt=" " class="img-responsive" style={{ height: 310}} />
              <div class="wthree_banner_btm_pos">
                <h3>
                  introducing <span>best store</span> for <i>groceries</i>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/6.jpg" alt=" " class="img-responsive" style={{ height: 310}} />
              <div class="wthree_banner_btm_pos1" style={{ fontSize: "12px" }}>
                <h3 style={{ width: "200px" }}>
                  Save <span>Upto</span> $10
                </h3>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  );
};

export default Banner;
