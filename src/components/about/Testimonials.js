import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Testimonials = () => {
   
        const settings = {
          dots: true,
          infinite: true,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        //   autoplay: true,
        };
  return (
    <div class='testimonials'>
                <h3 style={{marginBottom:'20px'}}>Testimonials</h3>

           <Slider {...settings}>
           <div class="banner-wrap">
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>Andrew Smith <span>Customer</span></h4>
                                </div>
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>Thomson Richard <span>Customer</span></h4>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="banner-wrap">
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>Crisp Kale  <span>Customer</span></h4>
                                </div>
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>John Paul <span>Customer</span></h4>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="banner-wrap">
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>Rosy Carl <span>Customer</span></h4>
                                </div>
                                <div class="col-md-6 w3_testimonials_grid">
                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                                        repellat.</p>
                                    <h4>Rockson Doe <span>Customer</span></h4>
                                </div>
                                
                            </div>

           </Slider>
        

</div>
  )
}

export default Testimonials