import React, { useEffect, useState } from "react";
import Img10 from "../assets/img10.png";

import { BASE_URL } from "../url";
import axios from "axios";
const Service = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/services?populate=*")
      .then((res) => {
        setRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="service" className="selectedService px-40 mt-4 pb-20">
      <div className="container">
        <div className="flex justify-center flex-col relative z-10">
          <img
            style={{ objectFit: "cover", width: 350, margin: "0 auto" }}
            src={Img10}
            alt="img"
          />
          <h3 className="text-center text-2xl font-bold font-serif">
            {" "}
            HİZMETLERİMİZ
          </h3>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 cartContainer flex-wrap">
          {res?.map((item, index) => (
            <div key={index} className="ritualsContainer">
              <div className="img-bg">
                <img
                  src={`${BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[400px] absolute z-30 -translate-y-12 translate-x-6 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  {item?.attributes?.Name}
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  {item?.attributes?.Title}
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  {item?.attributes?.Organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
