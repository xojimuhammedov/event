import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Header = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.lupinevent.com/api/services")
      .then((res) => {
        setRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <header className="header relative">
      <nav className="absolute z-10 translate-x-[385px] navbar">
        <div className="container">
          <ul className="flex gap-3 items-center">
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer">
              <a href="#home">ANASAYFA</a>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer">
              <a href="#about">HAKKIMIZDA</a>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer">
              <Link to={"/"}>
                <img alt="" src={Logo} className="w-[250px]" />
              </Link>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer dropdown">
              <p className="dropp py-2">HİZMETLERİMİZ</p>{" "}
              <ul class="dropdown-content px-3 py-2 ">
                {res?.map((item) => (
                  <li className="text-xs border-b border-black py-2 font-light text-center hover:text-[#403e3e]">
                    <Link to={`/services/${item?.id}`}>
                      {item?.attributes?.Title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer">
              <a href="#contact">İLETİŞİM</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="absolute z-10 hidden menuBar pb-4 px-7 gap-[280px]">
        <div className="logo-img">
          <img src={Logo} alt="Logo" width={""} />
        </div>
        <button
          className="bg-[rgba(255,255,255,0.5)] mt-2 menuBtn"
          onClick={() => setOpenMenuBar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          openMenuBar ? "openMenu" : "closeMenu"
        } fixed z-50 bg-white px-8 py-12 min-h-screen`}>
        <ul className="flex gap-3 items-center flex-col ">
          <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300">
            ANASAYFA
          </li>
          <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300">
            HAKKIMIZDA
          </li>
          <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer dropdown border-b border-transparent hover:border-black duration-300">
            <p className="dropp py-2">HİZMETLERİMİZ</p>
            <ul class="dropdown-content px-3 py-2 ">
              <li className="text-xs border-b border-black py-2 font-light text-center hover:text-[#403e3e]">
                Kina Organizasyonu
              </li>
              <li className="text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]">
                Nisan Ve Söz Organizasyonu
              </li>
              <li className="text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]">
                Evlenme Teklifi Organizasyonu
              </li>
              <li className="text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]">
                Beklarliga Veda
              </li>
              <li className="text-xs font-light text-center  py-2 hover:text-[#403e3e]">
                İsteme Organizasyonu
              </li>
            </ul>
          </li>
          <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300">
            <a href="#contact">İLETİŞİM</a>
          </li>
        </ul>
        <button
          onClick={() => setOpenMenuBar(false)}
          className="hover:text-gray-500 bg-black text-white px-2 py-2 mt-[-33px] mr-[2px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
