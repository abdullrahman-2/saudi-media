"use client";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../public/icons/logoAr.svg";
import Image from "next/image";

function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center mt-[20px] mx-auto ">
      <div className="text-white flex gap-5 items-center">
        <button className="hidden lg:block bg-greeen px-5 py-3 rounded-lg">
          تسجيل الدخول
        </button>
        <div className="relative">
          <LanguageIcon
            onClick={() => setLangOpen(!langOpen)}
            className="cursor-pointer"
          />
          {langOpen && (
            <div className="absolute z-50 top-full mt-2 left-0 bg-white p-2 rounded-lg text-black shadow-lg">
              <div className="hover:bg-gray-200 rounded-sm cursor-pointer">
                العربية
              </div>
              <div className="hover:bg-gray-200 rounded-sm cursor-pointer">
                English
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Image src={logo} alt="Logo" className="w-full h-full" />
        <div className="relative">
          <svg
            onClick={() => setDropOpen(!dropOpen)}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="15.5"
              stroke="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H15C14.5858 16.75 14.25 16.4142 14.25 16ZM14.25 20C14.25 19.5858 14.5858 19.25 15 19.25H25C25.4142 19.25 25.75 19.5858 25.75 20C25.75 20.4142 25.4142 20.75 25 20.75H15C14.5858 20.75 14.25 20.4142 14.25 20ZM20 23.25C19.5858 23.25 19.25 23.5858 19.25 24C19.25 24.4142 19.5858 24.75 20 24.75H25C25.4142 24.75 25.75 24.4142 25.75 24C25.75 23.5858 25.4142 23.25 25 23.25H20Z"
              fill="white"
            />
          </svg>
          {dropOpen && (
            <div className="absolute z-50 top-full flex flex-col items-end mt-2 right-0 bg-greeen w-44 p-5 rounded-lg text-white shadow-lg">
              <div className="hover:border-r-2 m-2 hover:scale-110 rounded-sm cursor-pointer">
                الرئيسية
              </div>
              <div className="hover:border-r-2 m-2 hover:scale-110 rounded-sm cursor-pointer">
                المعرض
              </div>
              <div className="hover:border-r-2 m-2 hover:scale-110 rounded-sm cursor-pointer">
                جائزة المنتدي
              </div>
              <div className="hover:border-r-2 m-2 hover:scale-110 rounded-sm cursor-pointer">
                فعاليات السعودية
              </div>
              <div className="hover:border-r-2 m-2 hover:scale-110 rounded-sm cursor-pointer">
                تسجيل الدخول
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
