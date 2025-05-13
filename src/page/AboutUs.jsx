import axios from "axios";
import React, { useEffect, useState } from "react";

function AboutUs() {
  const [resAbout, setResAbout] = useState([]);
  useEffect(() => {
    axios
      .get("https://room.oqdev.uz/api/about/")
      .then((res) => {
        setResAbout(res?.data?.results);
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
      </div>{" "}
      <div className="flex mainWrapper mt-4">
        <div className="w-1/2">
          <img
            src={resAbout?.[0]?.image}
            alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
            className="main-image"
          />
        </div>
        <div className="px-4 pt-20">
          <h2 className="font-medium font-serif leading-6 text-[20px] text-[#434343] mainText">
            ›› BİZ KİMİZ ?
          </h2>
          <p className="text-xl font-serif mt-2 text-[#434343]">
            {resAbout?.[0]?.title}
          </p>
        </div>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: resAbout?.[0]?.description
        }}
        className="text-lg mt-4 font-serif leading-8 text-[#434343]" />

    </div>
  );
}

export default AboutUs;
