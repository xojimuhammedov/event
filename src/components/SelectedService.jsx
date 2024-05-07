import React from "react";
import Img10 from "../assets/img10.png";
import Img3 from "../assets/img3.jpg";
// import Img4 from "../assets/img4.jpg";
// import Img5 from "../assets/img5.jpg";
// import Img6 from "../assets/img6.jpg";
// import Img7 from "../assets/img7.jpg";
// import Img8 from "../assets/img8.jpg";
import Img11 from "../assets/img11.png";
import useAxios from "../hooks/applications/useAxios";
const SelectedService = () => {
    const { res } = useAxios()
    console.log(res)
    return (
        <div className="selectedService pb-4">
            <div className="container">
                <div className="flex justify-center relative z-10">
                    <img src={Img10} alt="img" />
                </div>
                <h3 className="text-center font-serif">ÖNE ÇIKAN HİZMETLER</h3>
                <div className="py-4 px-40 flex flex-col gap-20 cartWrapper">
                    <div className="flex gap-8 cartContainer flex-wrap">
                        {
                            res.map((item, index) => (
                                <>
                                    <div className="ritualsContainer">
                                        <div className="img-bg">
                                            <img src={Img3} alt="Hina rituals" />
                                            {/* <img src={item.attributes.Image.data.attributes.formats.large.url} alt="Hina rituals" /> */}
                                        </div>
                                        <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                                            <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                                                {item.attributes.Organization}
                                            </h3>
                                            <p className="text-center font-serif text-[15px] text-[#2b333b]">
                                                {item.attributes.Name}
                                            </p>
                                            <p className="text-center font-serif text-[12px] text-[#999]">
                                                {/* Unutulmaz Bir Kına Gecesi Organizasyonu Sizi Bekliyor! */}
                                                {item.attributes.Description}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                        {/* <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img3} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Kına Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Kına Organizasyonu
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Unutulmaz Bir Kına Gecesi Organizasyonu Sizi Bekliyor!
                </p>
              </div>
            </div>
            <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img4} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Nişan ve Söz Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Nişan ve Söz Organizasyonu
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Hayalinizdeki Aşkın İlk Taahhüdü: Nişan ve Söz Organizasyonu
                </p>
              </div>
            </div> */}
                    </div>
                    {/* <div className="flex gap-8 cartContainer">
            <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img5} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  İsteme Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  İsteme Organizasyonu
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Aileler Buluşuyor, Aşkın Resmi Çiziliyor: İsteme Organizasyonu
                </p>
              </div>
            </div>
            <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img6} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Bekarlığa Veda Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Bekarlığa Veda
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Unutulmaz Bir Maceraya Hazır Mısınız? Bekarlığa Veda
                  Organizasyonu Başlıyor!
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 cartContainer">
            <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img7} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-14 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Evlenme Teklifi Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Evlenme Teklifi Organizasyonu
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Hayalinizdeki Aşk Hikayesine Bir Adım Daha Yaklaşın!
                </p>
              </div>
            </div>
            <div className="ritualsContainer">
              <div className="img-bg">
                <img src={Img8} alt="Hina rituals" />
              </div>
              <div className="bg-[#f6f6f6] w-[450px] absolute z-30 -translate-y-12 translate-x-16 px-4 py-3 textContainer">
                <h3 className="text-center font-serif text-[13px] text-[#333] mb-2">
                  Açılış Organizasyonu Organizasyon
                </h3>
                <p className="text-center font-serif text-[15px] text-[#2b333b]">
                  Açılış Organizasyonu
                </p>
                <p className="text-center font-serif text-[12px] text-[#999]">
                  Ses Getiren Mağaza ve İşyeri Açılış Organizasyonları
                </p>
              </div>
            </div>
          </div> */}
                </div>
                <div className="flex justify-center mt-4">
                    <img src={Img11} alt="decoration" />
                </div>
            </div>
        </div>
    );
};

export default SelectedService;
