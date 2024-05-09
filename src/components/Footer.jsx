import React from "react";
import Logo from "../assets/logo.png";
import InstagramIcon from "../assets/instagram.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#222222] pt-6 pb-4">
        <div className="container">
          <div className="px-40 flex items-center justify-between footerWrapper">
            <div>
              <img src={Logo} alt="company logo" width={"240px"} />
            </div>

            <div className="text-white font-serif">
              <p className="text-center tracking-widest">
                İstanbulun heryerine hizmet sunmaktayız
              </p>
              <ul className="text-center tracking-widest">
                <li className="hover:cursor-pointer hover:text-gray-400">
                  Lupineventt@gmail.com
                </li>
                <li className="hover:cursor-pointer hover:text-gray-400">
                  {" "}
                  0531 731 86 95
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
            <a href="https://www.tiktok.com/@lupineventorganizasyon?_t=8mCPKhwAWCj&_r=1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15059/15059942.png"
                className="w-[30px]"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/lupinevent?igsh=MXNkZzczZnNoMm14OA==">
              <img src={InstagramIcon} className="w-[30px]" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
