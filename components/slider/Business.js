import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Business = () => {
  const data = [
    {
      title: "Lone Star Suites",
      color: "",
      color2: "bg-1",
      img: "https://lirp.cdn-website.com/5ed9cc49/dms3rep/multi/opt/logo2-264w.jpg",
      description:
        "Lone Star Executive Suites - private offices, meeting rooms. Fully stocked break rooms and kitchen facilities, controlled entry, free visitor parking, are a few of the amenities offered. ",
      href: "https://www.lonestarexecutivesuites.com/",
    },
    {
      title: "Get Restoration",
      color: "bg-2",
      color2: "bg-1",
      img: "https://getrestorationdfw.com/wp-content/uploads/2020/05/GET-Desktop-logo.png",
      description:
        "24/7 WATER | FIRE | MOLD | SERVICES RESIDENTIAL COMMERCIAL, APPROVE BY ALL INSURANCE COMPANY. WE CAN HELP WITH YOUR DEDUCTIBLE CERTIFIED BONDED AND INSURED WE ARE LOCAL",
      href: "https://getrestorationdfw.com/",
    },
    {
      title: "Retro Madness",
      color: "bg-5",
      color2: "bg-4",
      img: "https://cdn.shopify.com/s/files/1/0095/0730/7567/files/Retro_Banner_150x150.jpg?v=1628616270",
      description: "Toys and Collectables sold locally in Grapevine Texas!",
      href: "https://retro-madness-pro-console-repair.myshopify.com//",
    },
    {
      title: "RTown Gallery",
      color: "bg-1",
      color2: "bg-3",
      img: "https://static.wixstatic.com/media/c13878_6aafe22a0cff4e468870e8b02246f0a6~mv2.jpg/v1/crop/x_134,y_139,w_615,h_328/fill/w_103,h_55,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%203-6-22%20at%205_39%20PM%203_JPG.jpg",
      description:
        "RTown Art Gallery is an artist owned and operated space which offers lessons, events, and exhibition opportunities for emerging and independent artists.",
      href: "https://www.rtowngallery.com/",
    },
    {
      title: "Grapevine Chamber of Commerce",
      color: "bg-4",
      color2: "bg-2",
      img: "https://www.grapevinechamber.org/wp-content/themes/grapevinechamber/images/logo.png",
      description: "Chamber of Commerce for Grapevine City Texas!",
      href: "https://www.grapevinechamber.org/",
    },
    {
      title: "Why Are You Buying this?",
      color: "bg-7",
      color2: "bg-color-grey-900",
      img: "https://whyareyoubuyingthis.com/_next/static/media/whyareyoubuyingthislogo.f4528677.png",
      description: "A site that allows you to find cool products on Amazon!",
      href: "https://www.whyareyoubuyingthis.com/",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-group-4",
          nextEl: ".swiper-button-next-group-4",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-container swiper-group-4"
      >
        {data.map((item, i) => (
          <SwiperSlide class="swiper-slide">
            <a href={item.href}>
              <div className={`card-member-3 mb-30 ${item.color} hover-up`}>
                {/* <div className="card-image">
                <img src={item.href} alt="iori" />
              </div> */}
                <div className={`card-info ${item.color2}`}>
                  <a className="font-lg-bold color-brand-1" href={item.href}>
                    {item.title}
                  </a>
                  <div className="d-flex">
                    <p className="font-xs color-grey-200">{item.description}</p>
                    <img className="image-right-icon" src={item.img}></img>
                    {/* <div className="list-socials mt-0">
                    <a className="icon-socials icon-facebook" href="#" />
                    <a className="icon-socials icon-twitter" href="#" />
                    <a className="icon-socials icon-instagram" href="#" />
                  </div> */}
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="box-button-slider-bottom">
        <div className="swiper-button-prev swiper-button-prev-group-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-group-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div> */}
    </>
  );
};

export default Business;
