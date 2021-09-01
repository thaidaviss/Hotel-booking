import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";



import PillowImg from "assets/images/pillow.png";
import SpecialImg from "assets/images/special.png";

import About1 from "assets/images/about1.webp";
import About2 from "assets/images/about2.webp";

import Rooms1 from "assets/images/rooms1.webp";
import Rooms2 from "assets/images/rooms2.webp";
import Rooms3 from "assets/images/rooms3.webp";

import LoadVideo from "assets/images/load.png";

import "./HomePage.scss";

import CardAbout from "./components/CardAbout";
import CardService from "./components/CardService";
import CardRoom from "./components/CardRoom";
import MakeReservation from "./components/MakeReservation";
import CardFeedBack from "./components/CardFeedBack";
import CardBlog from "./components/CardBlog";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { ListBlog, ListFeedBack, ListService } from "constants/index";

function HomePage(props) {
  const { t } = useTranslation();
  const customSlider = useRef();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,

    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    slidesToScroll: 2,
  };
  const settings1 = {
    ref: (slider) => (customSlider.current = slider),
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    slidesToScroll: 2,
  };
  return (
    <div className="home">
      <div className="banner">
        <h3 className="banner__title">
          {t("ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!")}
        </h3>
        <h2 className="banner__content">{t("Most Relaxing Place")}</h2>
        <div className="banner__btn">
          <button className="btn btn-order">{t("Take a tour")}</button>
          <button className="btn btn-readmore">{t("Read more")}</button>
        </div>
        <div className="reservation-check">
          <MakeReservation />
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className="about-us__left">
            <div
              className="about-us__left-item"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-delay="500"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              <CardAbout
                img={PillowImg}
                title={"Cozy Room"}
                content={`Far far away, behind the word mountains, far from the countries Vokalia.`}
              />
              <div className="about-us__left-img">
                <img src={About1} alt="" />
              </div>
            </div>
            <div
              className="about-us__left-item"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-delay="100"
              data-aos-offset="100"
              data-aos-duration="1000"
            >
              <div className="about-us__left-img">
                <img src={About2} alt="" />
              </div>

              <CardAbout
                img={SpecialImg}
                title={"Special Offers"}
                content={`Far far away, behind the word mountains, far from the countries Vokalia.`}
              />
            </div>
          </div>
          <div
            className="about-us__right"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="600"
          >
            <div className="home__title">{t("about us")}</div>
            <div className="home__heading">{t("Unwind A Hotel Booking Agency")}</div>
            <p className="about-us__content">{t("about us content")}</p>
            <button className="about-us__btn">{t("Book your room now")}</button>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div
            className="home__title"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="600"
          >
            {t("UNWIND SERVICES")}
          </div>
          <div
            className="home__heading"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="600"
          >
            {t("Explore Our Hotel Services")}
          </div>
          <div
            className="services__list"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <ul>
              {ListService.map((item) => (
                <li key={`service__item-${item.id}`}>
                  <CardService {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="container">
          <div
            className="home__title"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="500"
          >
            {t("OUR ROOMS")}
          </div>
          <div
            className="home__heading"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="500"
          >
            {t("Featured Rooms")}
          </div>

          <div className="rooms__list">
            <CardRoom
              dataAos="zoom-in"
              title="Suite Room"
              content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price="$200"
              img={Rooms1}
              isImgTop={false}
            />
            <CardRoom
              dataAos="zoom-in"
              title="Family Room"
              content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price="$400"
              img={Rooms2}
              isImgTop={true}
            />
            <CardRoom
              dataAos="zoom-in"
              title="Deluxe Room"
              content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price="$600"
              img={Rooms3}
              isImgTop={false}
            />
          </div>
        </div>
      </div>
      <div className="show-video">
        <div className="show-video__content">
          <h4 className="show-video__title">{t("WATCH OUR LUXURIOUS HOTEL")}</h4>
          <h3 className="show-video__heading">{t("Take A Tour")}</h3>
          <div className="show-video__load">
            <img src={LoadVideo} alt="" className="load" />
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="container">
          <div
            className="home__title"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="500"
          >
            {t("TESTIMONIALS")}
          </div>
          <div
            className="home__heading"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-duration="500"
          >
            {t("Happy Guests")}
          </div>
          <div className="testimonial__list">
            <Slider {...settings}>
              {ListFeedBack.map((user) => (
                <CardFeedBack {...user}  key={`testimonial__item-${user.id}`}/>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <div className="news__title">
            <div className="news__title-left">
              <div
                className="home__title"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-offset="100"
                data-aos-duration="500"
              >
                {t("BLOG")}
              </div>
              <div
                className="home__heading"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-offset="100"
                data-aos-duration="500"
              >
                {t("News Feeds")}
              </div>
            </div>
            <div className="news__title-right">
              <div className="news__title-btn">
                <button onClick={() => customSlider.current.slickPrev()} className="btn btn-prev ">
                  {" "}
                  <AiOutlineArrowLeft />
                </button>
                <button onClick={() => customSlider.current.slickNext()} className="btn btn-next">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="news__list">
            <Slider {...settings1}>
              {ListBlog.map((news) => (
                <CardBlog {...news} key={`news__item-${news.id}`} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
