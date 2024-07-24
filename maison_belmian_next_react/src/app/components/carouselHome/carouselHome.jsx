
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome(data) {
  // console.log(data, 'carouselHome');


  return (
    <div>
      {data.length && (
        <Carousel className="carouselHome">
          {data.map((image, index) => (
            <Carousel.Item key={index}>
              {/* <Link href={{
                pathname: `/product/${}` */}
              {/* }}> */}
                <img
                  className="carouselHome"
                  src={image.id}
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

