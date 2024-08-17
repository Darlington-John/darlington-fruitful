import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from 'react';

const WorkWith = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:false });
    const float= {
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
    }

    const scaleRef = useRef(null);
    const isScaleInView = useInView(ref, { once:false });
    const scale= {
            // width: isScaleInView ? "80px" : "3px",
            transform: isScaleInView ? 'scale(1) rotate(-10deg)' : 'scale(0)',
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            
    }
    return (  
        <section ref={ref} style={float}  className="flex items-center justify-center  px-[248px] py-[120px] 3xl:py-10 3xl:px-20  bg-white  text-black text-[52px] flex-col leading-none gap-2 font-semibold xs:px-4 2xs:py-6">
       <div className={`shadow bg-lightOrange   h-[84px] rounded-[3px] mx-2  3xl:block  hidden self-end xs:h-12   ${isScaleInView ? "w-[80px] xs:w-12" : "w-[3px]"}`} style={scale}>

<img src={'/assets/images/example.webp' }alt=''   className="w-full  object-cover h-full "/>
</div>

            <p className="text-black text-[32px]   leading-none  font-semibold 3xl:flex hidden text-center xs:text-2xl 2xs:text-xl" ref={scaleRef}>Work with a Fruitful Guide   who
understands you. Get organized, optimized,
and on   track to hit your goals in no time.</p>
<div className={`bg-lightOrange   h-[84px] xs:h-16  rounded-[3px] mx-2 3xl:block  hidden self-start ${isScaleInView ? "w-[80px] xs:w-16" : "w-[3px]"}`} style={scale}>
<img src={'/assets/images/push.webp' }alt=''   className="w-full  object-cover h-full  "/>
</div>
            <div className="flex gap-2 items-center  text-black text-[52px] flex  leading-none  font-semibold  3xl:hidden" ref={scaleRef}>
Work with a Fruitful Guide
<div className="shadow bg-lightOrange   h-[84px] rounded-[3px] mx-2  3xl:hidden w-20" style={scale}>
<img src={'/assets/images/example.webp' }alt=''   className="w-full  object-cover h-full "/>
</div>

   who


</div>
<h1 className=" 3xl:hidden">
understands you. Get organized, optimized,</h1>
<div className="flex gap-2 items-center  text-black text-[52px] flex  leading-none  font-semibold  3xl:hidden">and on  <div className="bg-lightOrange   h-[84px] rounded-[3px] mx-2 3xl:hidden" style={scale}>
<img src={'/assets/images/push.webp' }alt=''   className="w-full  object-cover h-full  "/>
</div>  track to hit your goals in no time</div>
        </section>
    );
}
 
export default WorkWith;