"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Image from "next/image";
import logo from "../../public/imgs/logoDate183c.png";
import { motion } from "framer-motion";

function Landing() {
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
        x: "10%",
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
    <div className="flex flex-col gap-10 justify-center items-center ">
      <motion.div
        className="flex flex-col gap-5"
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex flex-col gap-2 justify-center items-center lg:mt-32 mt-10 text-white font-bold text-5xl sm:text-7xl ">
          <span>الإعلام</span>
          <span>في عالم يتشكل</span>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="border-2 py-4 px-5 w-48 rounded-xl text-white font-semibold">
            سجل الأن
          </button>
          <button className="hidden lg:block bg-greeen w-48 px-5 py-4 rounded-xl text-white font-semibold">
            احجز مساحتك الأن
          </button>
        </div>
        <div className="flex text-white gap-5 lg:mt-5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <InstagramIcon />
          <XIcon />
          <FacebookIcon />
        </div>
      </motion.div>
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full lg:mt-10 grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-3 "
      >
        <div className="order-2 md:order-1 col-span-1 mx-auto bg-greeen bg-opacity-50 text-white md:text-xl font-[18px] flex flex-col rounded-xl justify-center items-center gap-2 p-7  sm:w-[250px] w-[150px]">
          <LocationOnIcon fontSize="large" className="text-green-400" />
          <span>19 - 21 فبراير,</span>
          <span>2025</span>
        </div>
        <div className="order-1 md:order-2 col-span-2 md:col-span-1 mx-auto bg-greeen bg-opacity-50 flex flex-col rounded-xl justify-center items-center gap-2 p-7  md:w-[250px] w-[150px]">
          <Image src={logo} alt="Logo" className="w-[150px] h-[65px]" />
        </div>
        <div className="order-3 md:order-3 col-span-1 mx-auto bg-greeen bg-opacity-50 text-white md:text-xl md:font-[18px] flex flex-col rounded-xl justify-center items-center gap-2 p-3  sm:w-[250px]  w-[150px]">
          <AccessTimeOutlinedIcon fontSize="large" className="text-green-400" />
          <span>الرياض,</span>
          <span> المملكة العربية السعودية </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;