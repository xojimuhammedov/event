import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../url";
import Img10 from "../assets/img10.png";

function ServiceAbout() {
  const { id } = useParams();
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://admin.lupinevent.com/api/services/${id}?populate=*`)
      .then((res) => {
        setRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="px-40 py-12 service-about">
      <div className="flex justify-center flex-col relative z-10">
        <h3 className="text-center text-2xl font-bold font-serif">
          {" "}
          {res?.attributes?.Title}
        </h3>
        <img
          style={{ objectFit: "cover", width: 350, margin: "0 auto" }}
          src={Img10}
          alt="img"
        />
      </div>

      <div className="flex mainWrapper mt-4">
        <div className="">
          <img
            src={`${BASE_URL}${res?.attributes?.Image?.data?.attributes?.url}`}
            alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
            className="main-image-about"
          />
        </div>
        <div className="px-4 service-right">
          <p className="text-lg font-serif  text-[#434343]">
            {res?.attributes?.Name}
          </p>
          <p className="text-lg mt-2 font-serif  text-[#434343]">
            {res?.attributes?.Organization}
          </p>
          <p className="text-xs mt-4 font-serif leading-6 text-[#434343]">
            {res?.attributes?.Description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceAbout;
