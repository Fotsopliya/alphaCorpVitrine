import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[];
  texts: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images, texts }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      swipeable={true}
      dynamicHeight={true}
      centerMode={true}
      centerSlidePercentage={80}
    >
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={image} alt="image" className="w-full h-64" />
          <p className="text-lg text-center text-black">{texts[index]}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
