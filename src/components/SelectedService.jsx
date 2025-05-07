import React, { useEffect, useState } from "react";
import Img10 from "../assets/img10.png";

import { BASE_URL } from "../url";
import axios from "axios";
import { Link } from "react-router-dom";
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
          <Link to={`/services/`}>
            <div className="ritualsContainer relative">
              <div className="img-bg">
                <img
                  src={`https://www.hilalyasarevent.com/wp-content/uploads/2023/12/kina.jpg`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Kına Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Kına Organizasyonu
                </p>
                {/* <p className="text-center service-text font-serif text-[12px] text-[#999]">
                  Söz,nişan,kına,kına gecesi,bekarlıga veda,after,organizasyon,isteme,isteme evi,söz organizasyonu,nişan organizasyonu,bagcılar organizasyon
                </p> */}
              </div>
            </div>
          </Link>
          <Link to={`/services/`}>
            <div className="ritualsContainer relative">
              <div className="img-bg">
                <img
                  src={`https://www.hilalyasarevent.com/wp-content/uploads/2023/12/nisan-.jpg`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Nişan ve Söz Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Nişan ve Söz Organizasyonu
                </p>
                {/* <p className="text-center service-text font-serif text-[12px] text-[#999]">
                  Nişan ve Söz Organizasyonu Kına organizasyonu bekarlıga veda partisi evde nişan organizasyonu nişan organizasyonu fiyatları                
                  </p> */}
              </div>
            </div>
          </Link>
          <Link to={`/services/`}>
            <div className="ritualsContainer relative">
              <div className="img-bg">
                <img
                  src={`https://www.hilalyasarevent.com/wp-content/uploads/2023/12/isteme-organinazsyonu.jpg`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  İsteme Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  İsteme Organizasyonu
                </p>
                {/* <p className="text-center service-text font-serif text-[12px] text-[#999]">
                  Organizasyon etkinlik bagcılar söz nişan kına sünnet davet isteme organizasyonu evde söz organ, Söz,nişan,kına,kına gecesi,bekarlıga veda,after,organizasyon,isteme,isteme evi,söz organizasyonu,nişan organizasyonu,
                </p> */}
              </div>
            </div>
          </Link>
          <Link to={`/services/`}>
            <div className="ritualsContainer relative">
              <div className="img-bg">
                <img
                  src={`https://www.hilalyasarevent.com/wp-content/uploads/2023/11/Bekarliga-veda.jpg`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Bekarlığa Veda Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Bekarlığa Veda
                </p>
                {/* <p className="text-center service-text font-serif text-[12px] text-[#999]">
                  Organizasyon etkinlik bagcılar söz nişan kına sünnet davet isteme organizasyonu evde söz organ, Söz,nişan,kına,kına gecesi,bekarlıga veda,after,organizasyon,isteme,isteme evi,söz organizasyonu,nişan organizasyonu,
                </p> */}
              </div>
            </div>
          </Link>
          <Link to={`/services/`}>
            <div className="ritualsContainer relative">
              <div className="img-bg">
                <img
                  src={`https://www.hilalyasarevent.com/wp-content/uploads/2024/03/acilis-organinasyon.jpg`}
                  alt="Hina rituals"
                  className="selected-image"
                />
              </div>
              <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Açılış Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Açılış Organizasyonu
                </p>
                {/* <p className="text-center service-text font-serif text-[12px] text-[#999]">
                  Organizasyon etkinlik bagcılar söz nişan kına sünnet davet isteme organizasyonu evde söz organ, Söz,nişan,kına,kına gecesi,bekarlıga veda,after,organizasyon,isteme,isteme evi,söz organizasyonu,nişan organizasyonu,
                </p> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectedService;
