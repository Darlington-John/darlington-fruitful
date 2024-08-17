import { useInView } from "framer-motion";
import { useRef } from "react";

const StephSpeech = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:false });
    const float= {
            opacity: isInView ? "1" : "0",

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
    }

    return (  <section className="flex flex-col items-center justify-center py-40 gap-12  xs:px-4 xs:py-10  xs:gap-4 ">
<h1 className="font-semibold  text-[77px] leading-[77px]  text-center  xl:text-5xl  xs:text-3xl 2xs:text-2xl  4xl:text-[88px]  4xl:leading-[88px]" style={float} ref={ref}>“I was pretty fearful of<br className="md:hidden"  /> investing, I really needed
<br className="md:hidden"/> someone to guide me.”</h1>
<div className="flex items-center flex-col" style={float}>
<img src={'/assets/images/steph.webp'} alt="" className="w-24 h-24  rounded-full  2xs:w-16 2xs:h-16  object-cover  4xl:h-36  4xl:w-36"/>
<div className="flex flex-col text-center items-center text-lg  2xs:text-base">
<h1 className="font-bold"   style={float}>
Steph
</h1>
<h1 className="font-semibold"   style={float}>
Real Fruitful Member
</h1>
</div>
</div>
    </section>);
}
 
export default StephSpeech;