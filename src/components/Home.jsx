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
      .get("https://admin.lupinevent.com/api/sliders?populate=*")
      .then((res) => {
        setRes(res.data.data);
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
          {/* {res?.map((item) => ( */}
          <SwiperSlide>
            <img
              src={"https://i.pinimg.com/originals/5c/cf/15/5ccf15a7745e0945ca3e3e2efb464159.jpg"}
              alt=""
              className={`header-images ${location.pathname === "/" ? "" : "images"
                }`}
            />
            {location.pathname === "/" ? (
              <div className="carousel-caption">
                <h1 className="text-[#333] font-medium">{"LUPINEVENT"}</h1>
                <p className="text-[#333]">{"Güzellik ve zarafet"}</p>
              </div>
            ) : (
              ""
            )}
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
