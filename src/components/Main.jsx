import React from "react";
import Img9 from "../assets/img9.png";
import useAxios from "../hooks/about-uses/useAxios";
const Main = () => {
  const { resAbout } = useAxios()
  // console.log(resAbout[0].attributes.Title)
  return (
    <div className="px-40 py-4 mainContainer">
      <div className="container">
        <div className="flex items-center mainWrapper">
          <div className="w-6/12">
            <img src={Img9} alt="HAYALLERİNİZİ BİRLİKTE YARATIYORUZ" />

          </div>
          {
            resAbout.map((item, key) => {
              <div className="text-container w-6/12 px-4 py-5">
                <h2 className="text-center font-serif leading-6 text-[20px] text-[#434343] mainText">
                  {console.log(item.attributes.Title)}
                  {/* <b>HAYALLERİNİZİ BİRLİKTE</b> <br /> YARATIYORUZ */}
                  {item.attributes.Title}
                </h2>
                {/* <p className="text-[15px] font-serif my-3 text-[#434343]">
                  Siz hayal edin, biz gerçeğe dönüştürelim!{" "}
                  <b>Hilal Yaşar Event,</b> özel günlerinizi unutulmaz kılacak,
                  sevgi dolu anılarla süsleyecek bir organizasyon firmasıdır. Biz,
                  nişan, evlilik teklifi, kına gecesi, isteme merasimi, bekarlığa
                  veda partisi gibi özel anlarınızı düzenleme konusundaki
                  uzmanlığımızla öne çıkıyoruz.
                </p> */}
                <p className="text-[15px] font-serif my-3 text-[#434343]">
                  {console.log(item)}
                  {item.attributes.Description}
                </p>
                <b className="font-serif text-[15px] text-[#434343]">
                  Hilal Yaşar Event Farkı:
                </b>
                <p className="my-3 font-serif text-[15px] text-[#434343]">
                  <b>Kişiye Özel Planlama,</b> Her anınız benzersizdir ve bu yüzden
                  her detayın kişiselleştirilmesi gerekmektedir. Size özel planlama
                  ve tasarım anlayışımızla, organizasyonlarınız sizin tarzınızı
                  yansıtsın.
                </p>
                <b className="font-serif text-[15px] text-[#434343]">
                  Profesyonel Ekip
                </b>
                <p className="font-serif text-[15px] my-3 text-[#434343]">
                  Deneyimli ve uzman ekibimiz, organizasyonlarınızı titizlikle
                  yönetir ve her aşamada sizinle işbirliği yaparak isteklerinizi
                  gerçekleştirir.
                </p>
                <b className="font-serif text-[15px] text-[#434343]">
                  Detaylara Özen
                </b>
                <p className="font-serif text-[15px] my-3 text-[#434343]">
                  Her detayın önemli olduğuna inanıyoruz. Dekorasyondan en ince
                  ayrıntısına kadar her anınızı özenle planlıyoruz.
                </p>
                <p className="font-serif text-[15px] text-[#434343]">
                  Hayalini kurduğunuz o özel anlar için <b>Hilal Yaşar Event</b>{" "}
                  yanınızda! Bize ulaşın, hayallerinizi gerçekleştirelim.
                </p>
              </div>
            })
          }

        </div>
      </div>
    </div>
  );
};

export default Main;
