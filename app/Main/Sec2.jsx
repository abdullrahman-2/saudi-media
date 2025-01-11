"use client"
import React from "react";
import Image from "next/image";
import pic1 from "../../public/forms/squ.PNG";
import { motion } from "framer-motion";


const SlideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};


function Sec2() {
  return (
    <div className="h-[100vh] w-full relative mt-[400px]">
      <Image
        src={pic1}
        className="absolute w-[120px] lg:w-[190px] rounded-3xl  xl:-right-48 md:-right-20 -right-12"
      />
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="show"
        className="text-white text-center pt-20"
      >
        <div className="text-7xl mb-5">FOMEX</div>
        <div className="text-5xl font-bold ">
          معرض (FOMEX) 2025 , انطلق نحو مستقبل الإعلام!
        </div>
        <div className="text-2xl mt-5 text-gray-300">
          استعد لرحلة استثنائية إلى عالم التقنيات الحديثة في معرض Fomex ، أكبر
          معرض إعلامي متخصص بتقنيات الإعلام والإنتاج الرقمي في الشرق الأوسط.
        </div>

        <button className="text-white mt-5 mx-auto bg-greeen px-7 py-4 rounded-lg">
          احجز مساحتك الآن
        </button>
      </motion.div>
    </div>
  );
}

export default Sec2;
