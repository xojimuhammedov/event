import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SelectedService = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://room.oqdev.uz/api/items/")
      .then((res) => {
        setRes(res?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="service" className="selectedService px-40 mt-12 pb-4">
      <div className="container">
        <h3 className="text-center pb-4 text-3xl font-serif">ÖNE ÇIKAN HİZMETLER</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-16 cartContainer flex-wrap">
          {
            res?.map((item) => (
              <Link key={item?.id} to={`/services/${item?.id}`}>
                <div className="ritualsContainer relative">
                  <div className="img-bg">
                    <img
                      src={item?.image}
                      alt="Hina rituals"
                      className="selected-image"
                    />
                  </div>
                  <div className="bg-[#f6f6f6] w-[90%] absolute z-30 -translate-y-12 translate-x-8 px-4 py-3 textContainer">
                    <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                      {item?.name}
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
