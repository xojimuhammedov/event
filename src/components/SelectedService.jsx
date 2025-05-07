import React, { useEffect, useState } from "react";
import Img10 from "../assets/img10.png";

import { BASE_URL } from "../url";
import axios from "axios";
import { Link } from "react-router-dom";
import { serviceData } from "../data";
const SelectedService = () => {
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
    <div id="service" className="selectedService px-40 mt-12 pb-4">
      <div className="container">
        {/* <div className="flex justify-center relative z-10">
          <img src={Img10} alt="img" />
        </div> */}
        <h3 className="text-center pb-4 text-3xl font-serif">ÖNE ÇIKAN HİZMETLER</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-16 cartContainer flex-wrap">
          {
            serviceData?.map((item) => (
              <Link key={item?.id} to={`/services/${item?.id}`}>
                <div className="ritualsContainer relative">
                  <div className="img-bg">
                    <img
                      src={item?.imageUrl}
                      alt="Hina rituals"
                      className="selected-image"
                    />
                  </div>
                  <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                    <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                      {item?.organisition}
                    </h3>
                    <p className="text-center font-serif text-[15px] text-[#2b333b]">
                      {item?.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SelectedService;
