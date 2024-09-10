"use client";

import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome(data) 
{
  console.log(data, 'carouselHome');

  return (
    <div>
      {data.length && (
        <Carousel className="carouselHome">
          {data.data.map((image, index) => (
            <Carousel.Item key={index}>
              {/* <Link href={{
                pathname: `/product/${}` */}
              {/* }}> */}
                <img
                  className="carouselHome"
                  src={image}
                  // alt={`Image of ${image.category}`}
                />
              {/* </Link> */}
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

