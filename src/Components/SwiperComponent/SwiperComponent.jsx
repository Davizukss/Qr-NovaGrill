import React from 'react';
import "../../Styles/Swiper.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Slide1 from "../../assets/grillSlide1.jpg"
import Slide2 from "../../assets/grillSlide2.jpg"
import Slide3 from "../../assets/grillSlide3.jpg"
import Slide4 from "../../assets/grillSlide4.jpg"
import Slide5 from "../../assets/grillSlide5.jpg"

const SwiperComponent = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 1000, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="swiper-container" style={{ width: '100%', overflow: 'hidden', marginTop: '2px' }}>
      <Slider {...settings}>
        <div>
          <img src={Slide1} alt="Slide1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={Slide2} alt="Slide2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={Slide3} alt="Slide3" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={Slide4} alt="Slide4" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={Slide5} alt="Slide5" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default SwiperComponent;
