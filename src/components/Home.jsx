import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import axios from "axios";
import { BASE_URL } from "../url";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Home() {
  const [res, setRes] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get("https://room.oqdev.uz/api/hero/")
      .then((res) => {
        setRes(res?.data?.results);
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
              src={item?.image}
              alt=""
              className={`header-images ${location.pathname === "/" ? "" : "images"
                }`}
            />
            {location.pathname === "/" ? (
              <div className="carousel-caption">
                <h1 className="text-[#333] font-medium">{item?.title}</h1>
                <p className="text-[#333]">{item?.name}</p>
              </div>
            ) : (
              ""
            )}
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
