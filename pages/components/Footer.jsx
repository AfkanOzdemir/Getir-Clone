import React from "react";

const Footer = () => {
  return (
    <div className="flex items-start justify-between col col-span-5 mx-auto pt-20 container py-4">
      <div className="fc1 flex items-center justify-center flex-col h-full ">
        <p className="text-start font-openSans text-brand-color text-lg w-full mb-3">
          {"Getir'i keşfedin"}
        </p>
        <a href="#" className="mb-3">
          <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
        </a>
        <a href="#" className="mb-3">
          <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
        </a>
        <a href="#" className="mb-3">
          <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
        </a>
      </div>
      <div className="fc2 flex items-center justify-center flex-col h-full ">
        <p className="text-start font-openSans text-brand-color text-lg w-full mb-3">
          {"Getir'i keşfedin"}
        </p>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Hakkımızda
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Kariyer
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Teknoloji Kariyerleri
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          İletişim
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Sosyal Sorumluluk Projeleri
        </a>
      </div>
      <div className="fc3 flex items-center justify-center flex-col h-full ">
        <p className="text-start font-openSans text-brand-color text-lg w-full mb-3">
          Yardıma mı ihtiyacınız var?
        </p>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Sıkça Sorulan Sorular
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Kişisel Verilerin Korunması
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Gizlilik Politikası
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Kullanım Koşulları
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Çerez Politikası
        </a>
      </div>
      <div className="fc4 flex items-center justify-center flex-col h-full ">
        <p className="text-start font-openSans text-brand-color text-lg w-full mb-3">
          İş Ortağımız Olun
        </p>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Bayimiz Olun
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Deponuzu Kiralayın
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          GetirYemek Restoranı Olun
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          GetirÇarşı İşletmesi Olun
        </a>
        <a
          href="#"
          className="mb-4 text-start w-full font-openSans text-darkGray text-sm"
        >
          Zincir Restoranlar
        </a>
      </div>
      <div className="fc5 flex items-center justify-center flex-col h-full ">
        <img src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"></img>
      </div>
    </div>
  );
};

export default Footer;
