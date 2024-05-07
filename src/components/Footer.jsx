import React from 'react'
import Logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-[#222222] pt-6'>
                <div className='container'>
                    <div className='px-40 flex items-center justify-between footerWrapper'>
                        <div>
                            <img src={Logo} alt="company logo" width={'240px'} />
                        </div>
                        <div>
                            <h3 className='text-white border-b border-white font-serif mb-2 py-2'>ORGANİZASYON</h3>
                            <ul className='tracking-widest text-white font-serif text-[14px] flex flex-col gap-2'>
                                <li className='hover:cursor-pointer hover:text-gray-400'>Bekarlığa Veda Organizasyonu</li>
                                <li className='hover:cursor-pointer hover:text-gray-400'>Evlenme Teklifi Organizasyonu</li>
                                <li className='hover:cursor-pointer hover:text-gray-400'>İsteme Organizasyonu</li>
                                <li className='hover:cursor-pointer hover:text-gray-400'>Kına Organizasyonu</li>
                                <li className='hover:cursor-pointer hover:text-gray-400'>Nişan ve Söz Organizasyonu</li>
                            </ul>
                        </div>
                        <div className='text-white font-serif'>
                            <p className='text-center tracking-widest'>Mustafa Kemal Cad 15/A 34218 <br /> İstanbul/Bağcılar</p>
                            <ul className='text-center tracking-widest'>
                                <li className='hover:cursor-pointer hover:text-gray-400'>info@hilalyasarevent.com</li>
                                <li className='hover:cursor-pointer hover:text-gray-400'> +90 545 473 39 36</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-white font-serif leading-10 text-[24px] footerText'>HAYALLERİNİZİ <br /> BİRLİKTE <br /> YARATIYORUZ</h2>
                        </div>
                    </div>
                </div>
                <div className=' bg-black border-t border-white  px-56 py-3 mt-4 footer2Wrapper'>
                    <div className='container flex justify-between footerTextWrapper'>
                        <p className='font-serif text-white text-[14px]'>Copyright © 2023</p>
                        <p className='font-serif text-white text-[14px]'>Hilal Yaşar Organizasyon</p>
                        <p className='font-serif text-white text-[14px]'>Bersa Soft Web Tasarım Ve Yazılım Ajansı</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer