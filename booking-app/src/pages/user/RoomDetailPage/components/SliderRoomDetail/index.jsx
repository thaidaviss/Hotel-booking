import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./SliderRoomDetail.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Image } from "antd";
import { IoMdCamera } from "react-icons/io";
function SliderRoomDetail(props) {
  const [visible, setVisible] = useState(false);
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
      <div className="slider-show__icon" >
        <span onClick={() => setVisible(true)}>
          <IoMdCamera />
        </span>
      </div>
      <Slider {...settings}>
        {imgList.map((img, index) => (
          <div className="slider-show__img">
            <Image
              preview={{ visible: false }}
              width={"100%"}
              src={img}
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                <Image src={imgList[0]} />
                <Image src={imgList[1]} />
                <Image src={imgList[2]} />
                <Image src={imgList[3]} />
              </Image.PreviewGroup>
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
