import React, { useState } from 'react'
import HeaderVide from '../assets/video1.mp4'
import Logo from '../assets/logo.png'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.png'
import '../index.css'
const Header = () => {
    const [openMenuBar, setOpenMenuBar] = useState(false)
    return (
        <header className='header relative'>
            <nav className='absolute z-10 translate-x-[385px] navbar'>
                <div className='container'>
                        <ul className='flex gap-3 items-center'>
                            <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer'>ANASAYFA</li>
                            <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer'>HAKKIMIZDA</li>
                            <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer'>
                                <img src={Logo} width={'250px'} />
                            </li>
                            <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer dropdown'>
                                <p className='dropp py-2'>
                                    HİZMETLERİMİZ
                                </p>
                                <ul class="dropdown-content px-3 py-2 ">
                                    <li className='text-xs border-b border-black py-2 font-light text-center hover:text-[#403e3e]'>Kina Organizasyonu</li>
                                    <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Nisan Ve Söz Organizasyonu</li>
                                    <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Evlenme Teklifi Organizasyonu</li>
                                    <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Beklarliga Veda</li>
                                    <li className='text-xs font-light text-center  py-2 hover:text-[#403e3e]'>İsteme Organizasyonu</li>
                                </ul>
                            </li>
                            <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer'>İLETİŞİM</li>
                        </ul>
                </div>
            </nav>
            <div className='absolute z-10 hidden menuBar pb-4 px-7 gap-[280px]'>
                <div className='logo-img'>
                    <img src={Logo} alt="Logo" width={''} />
                </div>
                <button className='bg-[rgba(255,255,255,0.5)] mt-2 menuBtn' onClick={()=>setOpenMenuBar(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
            </div>
            <div className={`${openMenuBar? 'openMenu':"closeMenu"} fixed z-50 bg-white px-8 py-12 min-h-screen`}>
                <ul className='flex gap-3 items-center flex-col '>
                    <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300'>ANASAYFA</li>
                    <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300'>HAKKIMIZDA</li>
                    <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer dropdown border-b border-transparent hover:border-black duration-300'>
                        <p className='dropp py-2'>
                            HİZMETLERİMİZ
                        </p>
                        <ul class="dropdown-content px-3 py-2 ">
                            <li className='text-xs border-b border-black py-2 font-light text-center hover:text-[#403e3e]'>Kina Organizasyonu</li>
                            <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Nisan Ve Söz Organizasyonu</li>
                            <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Evlenme Teklifi Organizasyonu</li>
                            <li className='text-xs font-light text-center border-b border-black py-2 hover:text-[#403e3e]'>Beklarliga Veda</li>
                            <li className='text-xs font-light text-center  py-2 hover:text-[#403e3e]'>İsteme Organizasyonu</li>
                           
                        </ul>
                    </li>
                    <li className='font-bold leading-5 text-black font-serif hover:cursor-pointer border-b border-transparent hover:border-black duration-300'>İLETİŞİM</li>
                </ul>
                <button onClick={() => setOpenMenuBar(false)} className='hover:text-gray-500 bg-black text-white px-2 py-2 mt-[-33px] mr-[2px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide header-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval='2000'>
                        <div className='video-container'>
                            <video src={HeaderVide} controls autoPlay loop muted className='video'></video>
                            <button className='btn border border-white rounded-3xl absolute translate-x-[660px] -translate-y-[260px] hover:bg-black hover:text-[#8d8a8a] duration-300 text-[18px] hover:border hover:border-black'>
                                Hizmetleri İnceleyin
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='img-container'>
                            <img src={Img1} className="d-block w-100" alt="header-img" />
                        </div>
                        <div className='rek-container z-30 absolute w-[640px] translate-x-[445px] -translate-y-[500px]'>
                            <h2 className='text-[23px] rek-text font-extrabold text-black font-serif text-center pt-2'>EN MUTLU GÜNÜNÜZÜ GÜZELLEŞTİRİYORUZ</h2>
                            <p className='font-bold text-black text-center text-[18px] my-2.5 rek-text2'>Düğün, Nişan, Doğum Günü Organizasyonları</p>
                            <div className='flex justify-center'>
                                <button className='border border-white  px-4 py-2 rounded-3xl hover:bg-black hover:text-[#8d8a8a] duration-300 text-[18px] hover:border-0 rek-btn'>
                                    Hizmetleri İnceleyin
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="header image" />
                        <div className='absolute translate-x-[400px] -translate-y-[400px] textDiv'>
                            <h2 className='text-white text-[33px] font-extrabold textDiv-text1'>EN MUTLU GÜNÜNÜZÜ GÜZELLEŞTİRİYORUZ</h2>
                            <p className='text-white text-center font-semibold text-[25px] textDiv-text2'>Düğün, Nişan, Doğum Günü Organizasyonları</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    )
}

export default Header