import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../url";

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
      {" "}
      <div className="flex mainWrapper mt-4">
        <div className="">
          <img
            src={`${BASE_URL}${resAbout[0]?.attributes?.Image?.data?.attributes?.url}`}
            alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
            className="main-image-about"
          />
        </div>
        <div className="px-4 pt-20">
          <h2 className="font-medium font-serif leading-6 text-[20px] text-[#434343] mainText">
            ›› BİZ KİMİZ ?
          </h2>
          <p className="text-lg font-serif mt-2 text-[#434343]">
            {resAbout[0]?.attributes?.Title}
          </p>
        </div>
      </div>
      <p className="text-xs mt-4 font-serif leading-6 text-[#434343]">
        {resAbout[0]?.attributes?.Description}
      </p>
    </div>
  );
}

export default AboutUs;
