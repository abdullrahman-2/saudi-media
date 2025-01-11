"use client"
import React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function UpperBtn() {
  const slideUp = () => {
window.scrollTo({ top: 0, behavior: "smooth" });  };
  return (
    <div
      onClick={slideUp}
      className="sticky flex flex-col space-y-1 justify-center items-center bottom-10 left-10 bg-[#28AA3A] text-white rounded-full w-20 h-20 cursor-pointer px-1 pb-6 shadow-xl hover:scale-105  "
    >
      <ArrowUpwardOutlinedIcon className="animate-updown" />{" "}
      <span className="text-xs">العودة للأعلي</span>
    </div>
  );
}

export default UpperBtn;