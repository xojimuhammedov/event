import React, { useEffect, useState } from "react";
import Img10 from "../assets/img10.png";

import { BASE_URL } from "../url";
import axios from "axios";
const SelectedService = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/applications?populate=*")
      .then((res) => {
        setRes(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="selectedService px-40 pb-4">
      <div className="container">
        <div className="flex justify-center relative z-10">
          <img src={Img10} alt="img" />
        </div>
        <h3 className="text-center pb-4 font-serif">ÖNE ÇIKAN HİZMETLER</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cartContainer flex-wrap">
          {res?.map((item, index) => (
            <div key={index} className="ritualsContainer">
              <div className="img-bg">
                <img
                  src={`${BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                  alt="Hina rituals"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[400px] absolute z-30 -translate-y-12 translate-x-20 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  {item.attributes?.Organization}
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  {item.attributes?.Name}
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  {item.attributes?.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedService;
