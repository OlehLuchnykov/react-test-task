import Slider from "react-slick";

const Carousel = ({slides, ...props}) => {
  console.log(slides)
  return (
    slides?.length > 0 && (
      <Slider {...props}>
        {slides?.map((slide, i) => (
          <div key={`slide-${i}`} className={'slide'} >
            <img
              width={'100%'}
              src={slide}
              alt={`adSpace ${i}`}
            />
          </div>
        ))}
      </Slider>
    )
  );
}
// sx={{'& > img': {objectFit: 'cover'}}}

export default Carousel;
