import React from "react";
import { useTranslation } from "react-i18next";
import MakeReservation from "./components/MakeReservation";
import "./HomePage.scss";
import PillowImg from "assets/images/pillow.png";
import SpecialImg from "assets/images/special.png";
import About1 from "assets/images/about1.webp";
import About2 from "assets/images/about2.webp";
import Rooms1 from "assets/images/rooms1.webp";
import Rooms2 from "assets/images/rooms2.webp";
import Rooms3 from "assets/images/rooms3.webp";
import CardAbout from "./components/CardAbout";
import { IoIosWifi, IoMdRestaurant } from "react-icons/io";
import { BiCalendarCheck } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";
import CardService from "./components/CardService";
import CardRoom from "./components/CardRoom";
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
    Icon: <IoMdRestaurant />,
    title: "Restaurant",
  },
  {
    id: 4,
    Icon: <FaSwimmingPool />,
    title: "Swimming Pool",
  },
  {
    id: 5,
    Icon: <IoIosWifi />,
    title: "Beauty & Health",
  },
  {
    id: 6,
    Icon: <IoIosWifi />,
    title: "Help & Support",
  },
];
function HomePage(props) {
  const { t } = useTranslation();

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
              data-aos-delay="500"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              <div className="about-us__left-img">
                <img src={About2} alt="" />
              </div>

              <CardAbout
                img={SpecialImg}
                title={"Speacial Offers"}
                content={`Far far away, behind the word mountains, far from the countries Vokalia.`}
              />
            </div>
          </div>
          <div
            className="about-us__right"
            data-aos="fade-up-left"
            data-aos-delay="500"
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
          <div className="home__title" data-aos="fade-left">
            {t("UNWIND SERVICES")}
          </div>
          <div className="home__heading" data-aos="fade-right">
            {t("Explore Our Hotel Services")}
          </div>
          <div
            className="services__list"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
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
          <div className="home__title">{t("OUR ROOMS")}</div>
          <div className="home__heading">{t("Featured Rooms")}</div>

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
    </div>
  );
}

export default HomePage;
