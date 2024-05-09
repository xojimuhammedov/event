import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import axios from "axios";
import { BASE_URL } from "../url";
import Header from "./Header";

function Home() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/sliders?populate=*")
      .then((res) => {
        setRes(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="carousel slide ">
      <Header />
      <div id="home" className="carousel-inner">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper">
          {res?.map((item) => (
            <SwiperSlide>
              <img
                src={`${BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                alt=""
                className="header-images"
              />
              <div className="carousel-caption">
                <h1>{item?.attributes?.Title}</h1>
                <p>{item?.attributes?.Description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
