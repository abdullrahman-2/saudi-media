"use client"
import { motion } from "motion/react"

const right = [
  {title:"المحتوى الاعلامي غير الصحفي",text:"تتويج المتميزين من الافرادالاكثر تأثيرا في انتاج المحتوى المرئي والمسموع"},
  {title:"التواصل والعالقات العامة",text:"تتويج افضل الحملات الاعلانية المتكاملة على المستوى القطاع الحكومي والقطاع الخاص "},
  {title:"الصحافة",text:"تتويج افضل الاعمال الصحفية واكثر الصحفيين والمراسلين نشاطا وتأثيرا في انتاج محتوى اعلامي مميز"},
  {title:"الجوائز الخاصة",text:" تتويج الاعمال و الشخصيات الاعلامية الاكثر نميزا في تقديم المحتوى الاعلامي الصحفي والرقمي"}
]
export default function Sec() {
  return (
    <div style={{overflow:"hidden"}} className="bg-[rgb(0,61,54)] mb-10">
    <motion.div initial={{ transform: "translateY(-30px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} id="title" className="flex justify-center flex-col items-center gap-4 text-white flex-wrap">
      <h1 className="text-5xl text-center	font-bold  ">جائزة المنتدى السعودي للإعلام 2025</h1>
      <p className="text-xl w-[100%] p-10 	font-medium text-slate-200 text-center ">جائزة المنتدى السعودي للإعلام تُكرّم وتتوج المبدعين والمتميزين في صناعة المحتوى الإعلامي؛ تهدف إلى تعزيز الإبداع والابتكار في مجالات الإعلام المختلفة،</p>
    </motion.div>

    <div className="flex flex-wrap justify-center ">
    <div id="left" className=" w-[40rem] h-[20rem] relative order-2 md:order-1 ">
    

    <motion.img initial={{ transform: "translateX(-430px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}} className="w-[150px] h-[150px] absolute rounded bg-green-700 top-[40%] left-[60%]" src="imgs/participants_6af3d.png"/>
    <motion.img initial={{ transform: "translateY(130px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="w-[100px] h-[100px] absolute rounded bg-green-700 top-[75%] left-[20%]" src="imgs/participants_8ac43.png"/>
    <motion.img initial={{ transform: "translateX(130px)"}}
whileInView={{ transform: "translateX(0px)",transition: { duration: 1.2 }}} className="w-[100px] h-[100px] absolute rounded bg-green-700 top-[40%] left-[14%]" src="imgs/participants_51fc5.png"/> 
    <motion.div initial={{ transform: "translateY(-130px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="w-[40px] h-[40px] absolute rounded bg-green-700 left-[60%]"></motion.div>
    <motion.div initial={{ transform: "translateY(-130px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className=" w-[50px] h-[50px] absolute rounded bg-green-300 top-[20%] left-[20%]"></motion.div>
    <motion.div initial={{ transform: "translateY(-130px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="w-[30px] h-[30px] absolute rounded bg-green-600 top-[30%] left-[46%]"></motion.div>
    </div>

    <div id="right" className=" mt-20 text-white w-[40rem]  grid grid-cols-1 lg:grid-cols-2     gap-y-[120px] order-1	">
      {right.map((item, index) => (
        <article
          key={item.id || index} // 
          className="  text-white relative   p-8  flex flex-col items-center text-center"
        >
          <img
            className="absolute h-[10rem]  bottom-0 left-17  "
            src="icons/frame.svg"
            alt="Card frame"
          />
          <h4 className="text-base font-bold  ">{item.title}</h4>
          <p className="px-10 text-[10px] leading-relaxed">{item.text}</p>
        </article>
      ))}
    </div>
 
    </div>
<div className="flex justify-center mt-10">
    <motion.button initial={{ transform: "translateY(50px)"}}
whileInView={{ transform: "translateY(0px)",transition: { duration: 1.2 }}} className="bg-[#00695f]   text-white font-semibold text-lg border-none rounded-3xl  h-16 w-32 order-2 sm:order-1"> اعرف المزيد</motion.button>

</div>
    </div>
   
  )
}
