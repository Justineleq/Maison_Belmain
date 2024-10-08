import './carouselHomePage.css';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

const CarousselHomePage = () => {
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
    <div className="slider-container w-full" style={{ backgroundColor: "#FEF0EE", padding: "20px" }}>
    <Slider {...settings}>
        <Link href={"/products/cupcake"}>
          <Image className='img-carousel' width={300} height={200} src="/images/products/Cupcakes-red-velvet.jpg" alt="cupcake" />
        </Link>
        <Link href={""}>
          <Image className='img-carousel' width={300} height={200} src="/images/products/chocchip-cookies.jpg" alt="cookie" />
        </Link>
        <Link href={""}>
          <Image className='img-carousel' width={300} height={200} src="/images/products/mixed-brownies.jpg" alt="bronwie" />
        </Link>
        <Link href={""}>
          <Image className='img-carousel' width={300} height={200} src="/images/products/wedding-bespoke.jpg" alt="bespoke" />
        </Link>

    </Slider>
    </div>
  )
}

export default CarousselHomePage
