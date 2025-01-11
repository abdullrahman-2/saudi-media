"use client";
import { motion } from "motion/react"
export default function Sec4() {
  return (
    <div className="bg-[rgb(0,61,54)]  "  style={{ width:"100%", overflow:"hidden", backgroundImage: `url('/icons/arrows-bg2.svg')` }}>
    <motion.div initial={{ transform: "translateY(430px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}}>
    <div  className="mb-10 ">
      <h1 className="text-white text-5xl font-extrabold relative w-128 text-center">لماذا يجب أن تكون هنا؟
      <span className="absolute w-28 "  style={{ background: "rgb(146, 210, 64)", width: "7rem", height: "5px", borderRadius: "10px",top:"110%",left:"42%" }}></span>
      </h1>
</div>

   <div className="flex justify-around flex-wrap	" >
   
    <div   className="w-96 text-white ">
     <img className="rounded-xl" src="imgs/image_3.jpg"/>
    <div className=" bg-green-600 px-11 w-80   h-auto -translate-y-1/2 sm:translate-x-10  translate-x-0 py-5 flex text-center items-center justify-center flex-col gap-4 rounded-3xl">
   <h5 className="block">اكتساب معرفة</h5><p class="text-sm text-center">
   شارك في جلسات حوارية وورش عمل يقودها نخبة من المتحدثين والخبراء العالميين. احصل على رؤى جديدة وأفكار مبتكرة تعزز من مهاراتك ومعرفتك.    </p>
    </div>
      </div>

      <div className="w-96 text-white">
     <img className="rounded-xl" src="imgs/image_2.jpg"/>
    <div className="bg-green-600 px-11 w-80   h-auto -translate-y-1/2 sm:translate-x-10  translate-x-0 py-5 flex text-center items-center justify-center flex-col gap-4 rounded-3xl">
   <h5 className="block">تواصل مع رواد الإعلام</h5><p class="text-sm text-center">
نضم إلى قادة الإعلام ورواد الأعمال الذين يقودون التحول الرقمي في القطاع. اغتنم الفرصة للتواصل مع الخبراء وبناء علاقات مهنية قيمة.    </p>
    </div>
      </div>

      <div className="w-96 text-white">
     <img className="rounded-xl" src="imgs/image_1.jpg"/>
    <div className="bg-green-600 px-11 w-80   h-auto -translate-y-1/2 sm:translate-x-10  translate-x-0 py-5 flex text-center items-center justify-center flex-col gap-4 rounded-3xl">
   <h5 className="block">استكشاف التكنولوجيا الحديثة</h5><p class="text-sm text-center">
    اكتشف آخر ما توصلت إليه التكنولوجيا الإعلامية وأحدث الابتكارات الرقمية. كن في طليعة التطورات التي تعيد تشكيل مستقبل الإعلام.</p>
    </div>
      </div>
      
       
      
   
   </div>
   </motion.div>
   </div>
  )
}
