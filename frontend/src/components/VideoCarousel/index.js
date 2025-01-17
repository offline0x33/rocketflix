import React from "react";

import { SliderItem, IconRight, IconLeft, RFVideoPreview } from "./styles";

const onChange = (a, b, c) => {
  console.log(a, b, c);
};

const NextArrow = props => {
  const { onClick } = props;
  return <IconLeft onClick={onClick} />;
};

const PrevArrow = props => {
  const { onClick } = props;
  return <IconRight onClick={onClick} />;
};

const VideoCarousel = ({ isMobile }) => {
  const settings = {
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    arrows: false, // setas
    touchMove: true,
    // focusOnSelect: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerPadding: "32px",
    rows: 1,
    swipe: true,
    // centerMode: true,

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <div>
      <SliderItem {...settings} afterChange={onChange}>
        <RFVideoPreview hoverable={true} children={<h3>1</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>2</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>3</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>4</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>5</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>6</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>7</h3>} />

        <RFVideoPreview hoverable={true} children={<h3>8</h3>} />
      </SliderItem>
    </div>
  );
};

export default VideoCarousel;
