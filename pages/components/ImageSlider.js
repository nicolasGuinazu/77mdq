import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides,show,auto }) => {
  return (
    <Carousel infiniteLoop showStatus={false} showArrows={show} autoPlay={auto} showThumbs={false}>
      {slides.map((slide,i) => {
        return <Image key={i} src={slide.image} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
