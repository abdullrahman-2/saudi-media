"use client"



const images = [
  "icons/mixfm-newlooka39e.png",
  "icons/media.png",
  "icons/MBC Academy.svg",
  "icons/Jahez-2-01.svg",
  "icons/Diriyah97cc.jpeg",
  "icons/mics977c.jpeg",
  "icons/nabza91de.jpeg",
  "icons/aramco3a41.jpeg",
  "icons/Arabsat_logod217.png",
  "icons/alula 1.svg",
  "icons/kaciid.svg",
  "icons/IGNITE.svg",
  "icons/elaqatc3fa.jpeg",
  "icons/signs33c0.jpeg",
  "icons/image1e28.png",
  "icons/SRMG Logo_01a0d5.png",
  "icons/Rotanae6ab.jpeg",
  "icons/NEOM-01-1.svg",
  
];

export default function Sec5() {
  return (
    <div style={{width:"100vw"}} className="bg-white  pt-40 ">
    <div className="flex justify-center items-center ">
      <h1 className="text-black text-5xl font-extrabold relative w-128 text-center">فخورون بأن نكون شركاء رحلتكم نحو التميز
      <span className="absolute w-28 "  style={{ background: "rgb(146, 210, 64)", width: "7rem", height: "5px", borderRadius: "10px",top:"110%",left:"42%" }}></span>

      </h1>
    </div>

    <div className="flex flex-wrap justify-center gap-20 px-8 md:px-32 mt-20">
      {images.map((imagePath) => (
        <div className="w-40 shadow-none" key={imagePath}>
          <img src={imagePath} className="object-contain" alt="Image" />
        </div>
      ))}
    </div>
  </div>

   
  )}


