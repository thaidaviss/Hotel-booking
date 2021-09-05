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

import News1 from "assets/images/news1.jpg";
import News2 from "assets/images/news2.jpg";
import News3 from "assets/images/news3.jpg";

import { IoIosWifi } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import { FaSwimmingPool, FaHeadphonesAlt, FaBath } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";
import "./HomePage.scss";

import CardAbout from "./components/CardAbout";
import CardService from "./components/CardService";
import CardRoom from "./components/CardRoom";
import MakeReservation from "./components/MakeReservation";
import CardFeedBack from "./components/CardFeedBack";
import CardBlog from "./components/CardBlog";
import { ListBlog, ListFeedBack, ListService } from "constants/index";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const ListService = [
  {
    id: 1,
    Icon: <IoIosWifi />,
    title: "Free Wifi",
  },
  {
    id: 2,
    Icon: <BiCalendarCheck />,
    title: "Easy Booking",
  },
  {
    id: 3,
    Icon: <MdRestaurant />,
    title: "Restaurant",
  },
  {
    id: 4,
    Icon: <FaSwimmingPool />,
    title: "Swimming Pool",
  },
  {
    id: 5,
    Icon: <FaBath />,
    title: "Beauty & Health",
  },
  {
    id: 6,
    Icon: <FaHeadphonesAlt />,
    title: "Help & Support",
  },
];
const ListFeedBack = [
  {
    id: 1,
    img: User1,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 2,
    img: User2,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 3,
    img: User3,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 1,
    img: User1,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 2,
    img: User2,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 3,
    img: User3,
    name: "Roger Scott",
    job: "MARKETING MANAGER",
    review:
      " mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
];
const ListBlog = [
  {
    id: 1,
    img:News1,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Changing Hotel Rooms This Year Is Great",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    img:News2,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Purple Skies, Pool, and Champagne. This is us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    img:News3,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Implementing Pools by the Sea Side This Year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 1,
    img:News1,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Changing Hotel Rooms This Year Is Great",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    img:News2,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Purple Skies, Pool, and Champagne. This is us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    img:News3,
    time: Date.now(),
    author: "Rosalina D. William",
    title: "Implementing Pools by the Sea Side This Year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

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
                <CardFeedBack {...user} key={`testimonial__item-${user.id}`} />
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
      <BackTop>
        <div className="up-top"><FaAngleDoubleUp /></div>
      </BackTop>
    </div>
  );
}

export default HomePage;
