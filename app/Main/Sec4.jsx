"use client";
import { motion } from "motion/react"
export default function Sec6() {
  return (
   
    <div style={{gap:110}} className="flex flex-wrap justify-center items-center   my-52">
    <div id="left" className=" w-[40rem] h-[20rem] mr-10 relative order-2 md:order-1 ">
<div >
    <img  initial={{ transform: "translateX(-430px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}} className="w-[300px] h-[450px] absolute rounded  top-[-14%] left-[60%]" src="icons/arrows-bg2.svg"/>
<img initial={{ transform: "translateX(-430px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}} className="w-[300px] h-[650px] absolute rounded  top-[12%] left-[60%]" src="icons/arrows-bg2.svg"/>
 <motion.div initial={{ height: "0px"}}
whileInView={{ height: "410px",transition: { duration: 1.2 }}} className="w-[295px] h-[500px] absolute rounded bg-green-600 top-[11%] left-[59%]"></motion.div>
</div>
   
    </div>

    <div id="right" className=" mt-20 text-white w-[40rem]   order-1	">
  <article
     className="  text-white relative  flex flex-col items-end text-right">    
          <h1 className="text-[40px] font-bold  ">كن جزءًا من التحول الإعلامي!</h1>
          <h1 className="text-[30px] font-bold  ">كن جزءًا من مستقبل الإعلام في المملكة والعالم</h1>
          <p className=" text-[20px] leading-relaxed">نضم إلينا في هذا الحدث الفريد الذي يجمع بين أبرز الخبراء والمتخصصين في المجال الإعلامي</p>
          <button className="bg-[#00695f] w-50 ... text-white font-semibold text-lg border-none rounded-3xl h-16 w-64 order-2 sm:order-1">اشترك الآن</button>

        </article>
      
    </div>
 
    </div>
   
  )
}
