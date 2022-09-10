import React from 'react'

const Application = () => {
  return (
    <section className = "py-4 bg-white">
        <div className = "container mx-auto min-h-[312px] bg-[url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')] bg-brand-color flex items-center justify-between rounded-lg">
            <div className="DownloadContainer ml-12 flex items-start justify-start w-1/2 h-full flex-col">
                <h3 className="font-semibold text-3xl text-openSans text-white mb-3">{"Getir'i indirin!"}</h3>
                <p className="font-semibold text-base text-openSans text-white mb-8">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
                <div className="w-full h-auto flex items-center justify-start">
                       <a href="#" className="btn mr-4"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="IphoneDownload" /></a> 
                       <a href="#" className="btn mr-4"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="PlayStoreDownload" /></a> 
                       <a href="#" className="btn"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="HuaweiDownload" /></a> 
                </div>
            </div>  
            <div className="w-1/2 h-full flex items-start justify-end">
               <a className="h-full w-full" href="#"><img className="w-full h-full flex items-start justify-center" src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="Application" /> </a> 
            </div>
        </div>
    </section>
  )
}

export default Application