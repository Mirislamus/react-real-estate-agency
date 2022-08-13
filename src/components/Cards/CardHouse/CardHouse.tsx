import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import house from "../../../images/svg/home.svg";
import phone from "../../../images/svg/phone-call.svg";
import "./CardHouse.css";

import { EffectFade, Navigation, Pagination } from "swiper";

const CardHouse = () => {
  return (
    <section className="house">
      <div className="house__top">
        <div className="house__title">
          <img src={house} alt="house" />
          <h2 className="house__name">Дома</h2>
        </div>
        <a className="house__all" href="#">
          Смотреть все
        </a>
      </div>

      <div className="house__desc">
        <Swiper
            slidesPerView={'auto'}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper2"
            nested={true}
            navigation={true}
            spaceBetween={30}
        >
          <SwiperSlide>
            <div className="house__detail">

              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
                nested={true}
              >
                <SwiperSlide>
                  <img src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
              <div className="house__detail-items">
                <h4 className="house__detail-name">Новый дом под ключ</h4>
                <span className="house__detail-price">30 200 000 ₽</span>
                <span className="house__detail-square">76.4 м</span>
                <span className="house__detail-floor">2/22 эт.</span>
                <div className="house__detail-district">ул. Раменки, д.21</div>
                <button className="house__detail-btn">
                  <img src={phone} alt="phone" />
                  Показать телефон
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="house__detail">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
              nested={true}
            >
              <SwiperSlide>
                <img src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.pittsburghmagazine.com/content/uploads/2020/05/Front-Yard.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?ca=9&ce=1&s=1024x768" />
              </SwiperSlide>
            </Swiper>
            <div className="house__detail-items">
              <h4 className="house__detail-name">Новый дом под ключ</h4>
              <span className="house__detail-price">30 200 000 ₽</span>
              <span className="house__detail-square">76.4 м</span>
              <span className="house__detail-floor">2/22 эт.</span>
              <div className="house__detail-district">ул. Раменки, д.21</div>
              <button className="house__detail-btn">
                <img src={phone} alt="phone" />
                Показать телефон
              </button>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="house__detail">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
            nested={true}
          >
            <SwiperSlide>
              <img src="https://www.pittsburghmagazine.com/content/uploads/2020/05/Front-Yard.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
          <div className="house__detail-items">
            <h4 className="house__detail-name">Новый дом под ключ</h4>
            <span className="house__detail-price">30 200 000 ₽</span>
            <span className="house__detail-square">76.4 м</span>
            <span className="house__detail-floor">2/22 эт.</span>
            <div className="house__detail-district">ул. Раменки, д.21</div>
            <button className="house__detail-btn">
              <img src={phone} alt="phone" />
              Показать телефон
            </button>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="house__detail">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
            nested={true}
          >
            <SwiperSlide>
              <img src="https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?ca=9&ce=1&s=1024x768" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
          <div className="house__detail-items">
            <h4 className="house__detail-name">Новый дом под ключ</h4>
            <span className="house__detail-price">30 200 000 ₽</span>
            <span className="house__detail-square">76.4 м</span>
            <span className="house__detail-floor">2/22 эт.</span>
            <div className="house__detail-district">ул. Раменки, д.21</div>
            <button className="house__detail-btn">
              <img src={phone} alt="phone" />
              Показать телефон
            </button>
          </div>
        </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
};

export default CardHouse;
