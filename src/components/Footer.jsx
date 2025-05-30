import React, { useEffect, useState } from "react";
import Logo from "../assets/event-removebg-preview.png";
import InstagramIcon from "../assets/instagram.png";
import axios from "axios";
const Footer = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://room.oqdev.uz/api/contact")
      .then((res) => {
        setRes(res?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div id="contact" className="bg-[#222222] pt-6 pb-4">
        <div className="container">
          <div className="px-40 flex items-center justify-between footerWrapper">
            <div>
              <img src={Logo} alt="company logo" width={"350px"} />
            </div>

            <div className="text-white font-serif">
              <p className="text-center footer-text text-lg  w-50 m-auto  mb-3 tracking-widest">
                 {res?.[0]?.location}
              </p>
              <ul className="text-center flex flex-column gap-3 tracking-widest">
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  <a href={`mailto:${res[0]?.attributes?.Email}`}>
                    {res[0]?.attributes?.Email}
                  </a>
                </li>
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  {" "}
                  <a href={`tel:${res?.[0]?.phoneNumber}`}>
                  {res?.[0]?.phoneNumber}
                  </a>
                </li>
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  {" "}
                  <a href={`tel:${res?.[0]?.phoneNumberTwo}`}>
                  {res?.[0]?.phoneNumberTwo}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-serif leading-10 text-[24px] footerText">
                HAYALLERİNİZİ <br /> BİRLİKTE <br /> YARATIYORUZ
              </h2>
            </div>
          </div>
          <div className="px-40 flex items-center gap-4 mt-4">
            <a
              className="footer-links"
              target="_blank"
              href={res?.[0]?.tikTokLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/15059/15059942.png"
                className="w-[50px] footer-icons"
                alt=""
              />
            </a>
            <a
              className="footer-links"
              target="_blank"
              href={res?.[0]?.instagramLink}>
              <img
                src={InstagramIcon}
                className="w-[50px] footer-icons"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
