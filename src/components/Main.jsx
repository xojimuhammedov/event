import React, { useEffect, useState } from "react";
import { BASE_URL } from "../url";
import Img11 from "../assets/img11.png";
import axios from "axios";
import { Link } from "react-router-dom";
const Main = () => {
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
    <div id="about" className="px-40 py-12 mt-4 mainContainer">
      <div className="container">
        {/* {resAbout.map((item, key) => (/ */}
        <div className="flex  mainWrapper">
          <div className="w-6/12">
            <img
              src={resAbout?.[0]?.image}
              alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ"
              className="main-image"
            />
          </div>
          <div className=" w-6/12 px-4 py-5">
            <h2 className="text-center font-medium font-serif leading-6 text-[20px] text-[#434343] mainText">
              {resAbout?.[0]?.title}
            </h2>
            <p className="text-base text-3-lines mb-4 font-serif my-3 text-[#434343]"
              dangerouslySetInnerHTML={{
                __html: resAbout?.[0]?.description
              }}
            />
            <Link
              className="bg-black text-white font-medium text-base px-10 py-[10px] rounded-full"
              to={"/about"}>
              Devamı
            </Link>
          </div>
        </div>
        {/* ))} */}
        <div className="flex justify-center mt-4">
          <img src={Img11} alt="decoration" />
        </div>
      </div>
    </div>
  );
};

export default Main;
