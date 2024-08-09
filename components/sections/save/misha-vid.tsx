import { useEffect, useRef, useState } from "react";

const MishaVid = () => {
    const [widthPercentage, setWidthPercentage] = useState(70); // Start with 0%
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
      const newWidthPercentage = Math.min(100, (scrollY / maxScrollHeight) * 120); 
      setWidthPercentage(newWidthPercentage);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const elementStyle = {
      width: `${widthPercentage}%`,
      transition: 'width 0.1s ease-out', // Smooth transition// Minimum width set to 0%
    };
    return (  <section className=" px-20 w-full flex flex-col gap-6  items-center py-20 lg:px-4">
<div className="relative  rounded-2xl overflow-hidden  min-w-[70%]   sm:min-w-full" style={elementStyle}>
<button onClick={toggleMute} className="p-2 bg-[#f9fafb59]  text-lightOrange  rounded-full  absolute top-4 left-4 h-10 w-10 flex items-center justify-center z-20">
<img src={isMuted? '/assets/icons/mute.svg':  '/assets/icons/muted.svg' } className='w-5' alt=""/>
      </button>
      <video src={'/assets/videos/Misha.mp4'} className="w-full h-full " ref={videoRef} autoPlay loop muted  />
</div>

<h1 className="text-lg text-[#5b616b] font-semibold text-center leading-snug   sm:text-start ">
The people in these videos are real Fruitful Members who were paid in cash for <br className="sm:hidden"/>their time and participation in this series. We think that is fair.
</h1>

    </section>);
}
 
export default MishaVid;