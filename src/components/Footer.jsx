import React from "react";
import Logo from "../assets/logo.png";
import InstagramIcon from "../assets/instagram.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#222222] pt-6">
        <div className="container">
          <div className="px-40 flex items-center justify-between footerWrapper">
            <div>
              <img src={Logo} alt="company logo" width={"240px"} />
            </div>

            <div className="text-white font-serif">
              <p className="text-center tracking-widest">
                Mustafa Kemal Cad 15/A 34218 <br /> İstanbul/Bağcılar
              </p>
              <ul className="text-center tracking-widest">
                <li className="hover:cursor-pointer hover:text-gray-400">
                  info@hilalyasarevent.com
                </li>
                <li className="hover:cursor-pointer hover:text-gray-400">
                  {" "}
                  +90 545 473 39 36
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
            <a href="https://tiktok.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15059/15059942.png"
                className="w-[30px]"
                alt=""
              />
            </a>
            <a href="https://instagram.com">
              <img src={InstagramIcon} className="w-[30px]" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
