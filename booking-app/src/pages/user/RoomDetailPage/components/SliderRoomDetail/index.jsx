import React, { useRef } from "react";
import Slider from "react-slick";
import "./SliderRoomDetail.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function SliderRoomDetail(props) {
  const { imgList } = props;
  const customSlider = useRef();
  const settings = {
    customPaging: function (i) {
      return (
        <a className="thumbnail__img">
          <img src={imgList[i]} />
        </a>
      );
    },
    ref: (slider) => (customSlider.current = slider),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-show">
      <Slider {...settings}>
        {imgList.map((img, index) => (
          <div>
            <div key={`room-detail__img-${index}`} className="room-detail__img-item">
              <a href={img} data-fancybox data-caption="This image has a simple caption">
                <img src={img} className="img-slider" />
              </a>
           
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="slider-show__btn slider-show__btn-prev"
        onClick={() => customSlider.current.slickPrev()}
      >
        <FaChevronLeft />
      </div>
      <div
        className="slider-show__btn slider-show__btn-next"
        onClick={() => customSlider.current.slickNext()}
      >
        <FaChevronRight />
      </div>
    </div>
  );
}

export default SliderRoomDetail;
