import React from "react";
import useAxios from "../hooks/about-uses/useAxios";
import { BASE_URL } from "../url";
import Img11 from "../assets/img11.png";
const Main = () => {
  const { resAbout } = useAxios();
  console.log(resAbout)
  return (
    <div className="px-40 py-12 mt-4 mainContainer">
      <div className="container">
        {resAbout.map((item, key) => (
          <div key={key} className="flex items-center mainWrapper">
            <div className="w-6/12">
              <img
                src={`${BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
              />
            </div>
            <div className="text-container w-6/12 px-4 py-5">
              <h2 className="text-center font-serif leading-6 text-[20px] text-[#434343] mainText">
                {item?.attributes?.Title}
              </h2>
              <p className="text-base font-serif my-3 text-[#434343]">
                {item?.attributes?.Description}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <img src={Img11} alt="decoration" />
        </div>
      </div>
    </div>
  );
};

export default Main;
