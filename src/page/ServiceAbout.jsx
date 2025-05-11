import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Img10 from "../assets/img10.png";
import { serviceData } from "../data";
import axios from "axios";

function ServiceAbout() {
  const { id } = useParams();

  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://room.oqdev.uz/api/items/${id}`)
      .then((res) => {
        setRes(res?.data);
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
          {res.title}
        </h3>
        <img
          style={{ objectFit: "cover", width: 350, margin: "0 auto" }}
          src={Img10}
          alt="img"
        />
      </div>

      <div className="flex mainWrapper mt-4">
        <div className="w-full">
          <img
            src={res?.image}
            alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
            className="main-image-about"
          />
        </div>
        <div className="px-4 service-right">
          <p className="text-lg mt-2 font-serif  text-[#434343]">
            {res?.name}
          </p>
          <p className="text-base mt-4 font-serif leading-6 text-[#434343]"
            dangerouslySetInnerHTML={{
              __html: res?.description
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceAbout;
