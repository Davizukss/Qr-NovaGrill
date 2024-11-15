import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import CUPIM from "../../assets/CUPIM.jpg"
import ANCHO from "../../assets/ANCHO.jpg"
import PRIMERIBS from "../../assets/PRIMERIBS.jpg"
import TBONE from "../../assets/TBONE.jpg"

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
          <img src={CUPIM} alt="CUPIM" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={ANCHO} alt="ANCHO" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={PRIMERIBS} alt="PRIMERIBS" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={TBONE} alt="TBONE" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default SwiperComponent;
