import './carouselHomePage.css';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

const CarousselBespokePage = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
  return (
    <div className="slider-container w-full" style={{ backgroundColor: "#FEF0EE", padding: "30px" }}>
    <Slider {...settings}>
          <Image className='img-carousel' width={300} height={200} src="/images/products/joanne.webp" alt="cupcake" />
          <Image className='img-carousel' width={300} height={200} src="/images/products/adam.jpg" alt="biscuit" />
          <Image className='img-carousel' width={300} height={200} src="/images/products/mixed-brownies.jpg" alt="bronwie" />
          <Image className='img-carousel' width={300} height={200} src="/images/products/wedding-bespoke.jpg" alt="bespoke" />
    </Slider>
    </div>
  )
}

export default CarousselBespokePage
