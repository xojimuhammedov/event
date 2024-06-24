import React, { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
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
      <div className="container">
        <nav className="absolute z-10 translate-x-[385px] navbar">
          <div className="container">
            <ul className="flex gap-3 items-center">
              <li className="font-bold leading-5 text-xl text-black font-serif hover:cursor-pointer">
                <Link to="/">ANASAYFA</Link>
              </li>
              <li className="font-bold text-xl leading-5 text-black font-serif hover:cursor-pointer">
                <Link to="/about">HAKKIMIZDA</Link>
              </li>
              <li className="font-bold text-xl leading-5 text-black font-serif hover:cursor-pointer">
                <Link to={"/"}>
                  <img alt="" src={Logo} className="w-[250px]" />
                </Link>
              </li>
              <li className="font-bold text-xl leading-5 text-black font-serif hover:cursor-pointer dropdown">
                <p className="dropp py-2">
                  <Link to={"/service"}>HİZMETLERİMİZ</Link>
                </p>{" "}
                <ul class="dropdown-content px-3 py-2 ">
                  {res?.map((item) => (
                    <li className=" border-b text-base border-black py-2 font-light text-center hover:text-[#403e3e]">
                      <Link to={`/services/${item?.id}`}>
                        {item?.attributes?.Title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="font-bold leading-5 text-xl text-black font-serif hover:cursor-pointer">
                <Link onClick={() => window.scrollTo({ top: 1800 })} to={"/"}>
                  İLETİŞİM
                </Link>
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
              <Link to="/">ANASAYFA</Link>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300">
              <Link onClick={() => setOpenMenuBar(false)} to="/about">
                HAKKIMIZDA
              </Link>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer dropdown border-b border-transparent hover:border-black duration-300">
              <p className="dropp py-2">
                <Link to={"/service"}>HİZMETLERİMİZ</Link>
              </p>{" "}
              <ul class="dropdown-content px-3 py-2 ">
                {res?.map((item) => (
                  <li className="text-xs border-b border-black py-2 font-light text-center hover:text-[#403e3e]">
                    <Link
                      onClick={() => setOpenMenuBar(false)}
                      to={`/services/${item?.id}`}>
                      {item?.attributes?.Title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300">
              <Link
                onClick={() => {
                  setOpenMenuBar(false);
                  window.scrollTo({ top: 2800 });
                }}
                to={"/"}>
                İLETİŞİM
              </Link>
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
      </div>
    </header>
  );
};

export default Header;
