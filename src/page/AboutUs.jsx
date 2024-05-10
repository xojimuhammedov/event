import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../url";
import Img10 from "../assets/img10.png";

function AboutUs() {
  const [resAbout, setResAbout] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/about-uses?populate=*")
      .then((res) => {
        setResAbout(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-40 py-12 service-about">
      <div className="flex justify-center flex-col relative z-10">
        <h3 className="text-center text-2xl font-bold font-serif">
          {" "}
          HAKKIMIZDA
        </h3>
        <img
          style={{ objectFit: "cover", width: 350, margin: "0 auto" }}
          src={Img10}
          alt="img"
        />
      </div>{" "}
      <div className="flex mainWrapper mt-4">
        <div className="w-1/2">
          <img
            src={`${BASE_URL}${resAbout[0]?.attributes?.Image?.data?.attributes?.url}`}
            alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
            className="main-image"
          />
        </div>
        <div className="px-4 w-1/2 pt-20">
          <h2 className="font-medium font-serif leading-6 text-[20px] text-[#434343] mainText">
            ›› BİZ KİMİZ ?
          </h2>
          <p className="text-lg font-serif mt-2 text-[#434343]">
            {resAbout[0]?.attributes?.Title}
          </p>
        </div>
      </div>
      <p className="text-lg mt-4 font-serif leading-8 text-[#434343]">
        {resAbout[0]?.attributes?.Description}
      </p>
    </div>
  );
}

export default AboutUs;
