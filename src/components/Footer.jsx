import React, { useEffect, useState } from "react";
import Logo from "../assets/event-removebg-preview.png";
import InstagramIcon from "../assets/instagram.png";
import axios from "axios";
const Footer = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/contacts")
      .then((res) => {
        setRes(res.data.data);
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
               Oruç reis mahallesi şehit Cevdet caddesi no 12 esenler/istanbul
              </p>
              <ul className="text-center flex flex-column gap-3 tracking-widest">
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  <a href={`mailto:${res[0]?.attributes?.Email}`}>
                    {res[0]?.attributes?.Email}
                  </a>
                </li>
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  {" "}
                  <a href={`tel:+905461064158`}>
                    +90 546 106 41 58
                  </a>
                </li>
                <li className="hover:cursor-pointer text-lg hover:text-gray-400">
                  {" "}
                  <a href={`tel:+905317318695`}>
                   +90 531 731 86 95
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
              href={'https://www.tiktok.com/@lupineventorganizasyon?_t=8qo8lTMBM6H&_r=1'}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/15059/15059942.png"
                className="w-[50px] footer-icons"
                alt=""
              />
            </a>
            <a
              className="footer-links"
              target="_blank"
              href={'https://www.instagram.com/lupinevent/profilecard/?igsh=c280cGlleWR0cTZh'}>
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
