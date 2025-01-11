"use client";
import React from "react";

import { motion } from "framer-motion";

function Sec1() {

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
  const SlideLeft = (delay) => {
    return {
      hidden: {
        x: "100%",
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="flex justify-center -mt-5 relative h-[100vh]">
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="show"
        className=" absolute top-24 md:right-0 -right-[550px] rounded-3xl overflow-hidden w-[650px] h-[500px]"
      >
        <img src="imgs/welcome_image6181.jpeg" alt="Logo" className="  object-cover  " />
      </motion.div>
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="show"
        className=" absolute w-24  md:top-72 top:40 left-0"
      >
        <img src="forms/arrows.PNG" alt="Logo" />
      </motion.div>
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="show"
        className="absolute w-44  top-96 left-32"
      >
        <img src="forms/arrows.PNG" alt="Logo" />
      </motion.div>
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="show"
        className="text-center z-10 md:mt-96 mt-[600px] bg-moongreen rounded-3xl md:text-5xl text-4xl font-bold text-white sm:p-10 p-5 space-y-5  sm:w-[500px] sm:h-[300px] h-[200px]"
      >
        <div>المنتدي السعودي </div>
        <div>للاعلام 2025</div>
        <div className="text-xl sm:py-5">
          منصة الابتكار, التأثير, و المستقبل الاعلامي
        </div>
      </motion.div>
    </div>
  );
}

export default Sec1;
