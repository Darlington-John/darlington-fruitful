import { useRef, useState } from "react";
import Button from "../../buttons";

const GrowWithGuide = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    return (  
    <section className="h-screen w-full  flex  items-center justify-between px-[66px]  gap-20  lg:flex-col  lg:pt-40  l  lg:gap-4  lg:h-full  md:pt-28 md:pt-20 xs:pt-16 md:px-8   xs:px-4  4xl:px-[200px] ">
<div className="flex  flex-col gap-8  flex-1 items-start lg:self-start  lg:flex-auto lg:gap-4 md:gap-2 ">
    <h1 className="text-[90px] font-semibold leading-[77px]  lg:text-[70px]  lg:leading-none md:text-4xl  xs:text-2xl  w-[500px]    md:w-full   ">
    Grow with your Guide
    </h1>
    <div className="flex flex-col xs:gap-2 ">
<h1 className="text-lg font-semibold md:text-base xs:leading-none  xs:font-normal xs:text-sm">
Work with an expert who understands you and your money. 
</h1>
<h1 className="text-lg font-semibold md:text-base xs:leading-none  xs:font-normal xs:text-sm">
Eliminate your stress. Get going and get growing in no time.
</h1>
    </div>
    <Button action="Get started" classic   link="/get-started?step=1" big/>

</div>
<div className="flex-1  bg-lightOrange  rounded-2xl  overflow-hidden h-[608px]  md:h-auto  relative self-end lg:flex-auto  4xl:self-center">
<button onClick={toggleMute} className="p-2 bg-[#f9fafb59]  text-lightOrange  rounded-full  absolute top-4 left-4 h-10 w-10 flex items-center justify-center  z-20 cursor-pointer">
<img src={isMuted? '/assets/icons/mute.svg':  '/assets/icons/muted.svg' } className='w-5'/>
      </button>
<video className="w-full h-full object-cover relative z-10" src={'/assets/videos/grow-guide.webp'} muted  autoPlay loop    ref={videoRef}  />
</div>
    </section>);
}
 
export default GrowWithGuide;