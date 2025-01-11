"use client";
import { motion } from "motion/react"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
export default function Footer() {
  return (
    <>
       <div   className="bg-[rgb(0,61,54)]">
        <motion.div initial={{ transform: "translateX(-30px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}} style={{gap:"30%"}} className=" flex   lg:justify-end justify-center   items-center text-center mb-20 p-20 flex-wrap    "> 
          <h2 className="text-white font-bold order-2 w-96 ... text-2xl lg:order-1">انضم إلى قائمتنا البريدية لتصلك أحدث الأخبار الحصرية من المنتدى السعودي للإعلام</h2>
          <img className=" w-120 lg:order-2 order-1" src="icons/logoAr.svg" alt="Logo" />
        </motion.div>
  
        <motion.div  initial={{ transform: "translateX(-130px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}}
   className=" flex justify-center items-center gap-4 relative pb-4  flex-wrap">
          <button className="bg-[#00695f] w-96  sm:w-44  text-white font-semibold text-lg border-none rounded-3xl h-16  order-2 sm:order-1">اشترك الآن</button>
          <input type="email" className="p-4 h-16 ... sm:order-2 font-semibold text-lg w-[70%] sm:w-96    rounded-3xl bg-white text-right" id="outlined-basic" placeholder="البريد الالكتروني" />
          <span className="absolute "  style={{ background: "rgb(43 ,103, 97)", width: "80%", height: "1px", borderRadius: "10px",top:"110%",left:"10%" }}></span>

        </motion.div>
  
        <motion.div initial={{ transform: "translateY(430px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="text-white flex  mt-12 md:justify-center justify-end pr-5  flex-wrap gap-10  text-right">
       
          <ul className="flex flex-col order-1 md:order-2 gap-6 ">
            <li><b>رقم الهاتف:</b> <a className="text-white no-underline" href="tel:+966535979563">+966535979563</a><span className="border-white border rounded-full p-1 text-white ml-2"><WhatsAppIcon/></span></li>
            <li><b>البريد الإلكتروني:</b> <a className="text-white no-underline" href="mailto:fomex@saudimf.sa">fomex@saudimf.sa</a><span className="border-white border rounded-full p-1 text-white ml-2"><MailIcon/></span></li>
            <li><b>العنوان:</b> الرياض، المملكة العربية السعودية<span className="border-white border rounded-full p-1 text-white ml-2"><FmdGoodIcon/></span></li>
          </ul>

          <ul class="flex flex-col gap-6">
    <b>روابط سريعة</b>
    <li><h4 class="text-white no-underline">الرئيسية</h4></li>
    <li><a href="المعرض" class="text-white no-underline">المعرض</a></li>
    <li><a href="جائزة المنتدى" class="text-white no-underline">جائزة المنتدى</a></li>
    <li><a href="المركز الإعلامي" class="text-white no-underline">المركز الإعلامي</a></li>
    <li><a href="المتحدثون" class="text-white no-underline">المتحدثون</a></li>
    <li><a href="حول العالم" class="text-white no-underline">حول العالم</a></li>
    <li><a href="فعاليات السعودية" class="text-white no-underline">فعاليات السعودية</a></li>
</ul>
        </motion.div>
  
        <motion.div initial={{ transform: "translateY(430px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="m-auto border-b border-gray-400 py-8 flex justify-around flex-wrap w-3/5 md:w-96 ... text-white">
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
         </motion.div>
  
        <div className="flex justify-center text-gray-300 flex-wrap text-sm gap-6 p-28">
        <p className="font-light  text-medium">جميع الحقوق محفوظة للمنتدى السعودي للإعلام 2025</p>

          <motion.div initial={{ transform: "translateY(-330px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="text-base font-large flex gap-2">
            <a href="#">الشروط والأحكام</a>
            <a href="#">سياسة الخصوصية</a>
          </motion.div>
        </div>
      </div>
      </>
  );
}
