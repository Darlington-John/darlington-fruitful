import { useState, useEffect } from 'react';
const Partner = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [headerContent, setHeaderContent] = useState('');
  
    const handleMouseMove = (e, content) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHeaderContent(content);
      setIsVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    return (
    <section className="flex flex-col items-center  text-center gap-6 py-6">
        <div className="flex flex-col gap-3 w-[700px]  lg:w-full px-4">
<h1 className="text-[52px]  font-semibold  leading-[56px] lg:text-[32px] lg:leading-none xs:text-xl  xs:leading-none">
A partner and a platform that
<br className='hidden lg:block 2xs:hidden'/>
make money simple.
</h1>
<h1 className="text-lg  font-semibold leading-[24px] xs:text-sm  xs:leading-none  xs:font-normal">
Take control of your finances with expert human help<br className='2xs:hidden'/> and a single intuitive place to track it all.
</h1>
        </div>
        <div className="flex w-full items-center gap-5  px-[66px]  4xl:px-[200px]  md:px-4 2xs:flex-col  4xl:gap-8">
<div className="w-[50%]  bg-lightOrange  hover:w-[90%] ease-out  duration-300 h-[530px] rounded-3xl partner relative xs:h-[330px]  2xs:w-full 2xs:hover:w-full overflow-hidden"   onMouseMove={(e) => handleMouseMove(e, 'Choose your Guide')}
        onMouseLeave={handleMouseLeave}>
<img src={'/assets/images/partner.webp'} alt="" className="w-full h-full object-cover img rounded-3xl"/>
<video muted autoPlay loop  src={'/assets/videos/partner.mp4'} className="w-full h-full object-cover rounded-3xl " />
<div className="bg-black w-full p-6 absolute bottom-0  z-10 blur-3xl"></div>
<div className="absolute bottom-0  ease-out  duration-300 left-0 px-6  py-4 z-20 flex flex-col gap-2   text-start">
    <h1 className="text-[40px] font-semibold text-white leading-none w-[350px]   lg:text-3xl lg:w-full md:text-xl">Your partner in progress</h1>
<h2 className="text-[15px] font-semibold text-white leading-none  h-0 overflow-hidden  w-[350px] lg:w-full lg:text-sm">
Our Guides are supportive and skilled CFP® Pros. Expect personalized advice that leads to quick action.
</h2>
</div>
</div>
<div className="w-[50%]    hover:w-[90%]  ease-out  duration-300 h-[530px]  partner  relative xs:h-[330px] xs:h-[330px]  2xs:w-full 2xs:hover:w-full overflow-hidden " onMouseMove={(e) => handleMouseMove(e, 'Get started')} onMouseLeave={handleMouseLeave}>
<img src={'/assets/images/table.webp'} className="w-full h-full object-cover rounded-3xl"  alt=""/>
<div className="bg-black w-full p-6 absolute bottom-0  z-10 blur-3xl"></div>
<div className="absolute bottom-0  ease-out  duration-300 left-0 px-6  py-4 z-20 flex flex-col gap-2   text-start">
    <h1 className="text-[40px] font-semibold text-white leading-none w-[350px]  lg:text-3xl lg:w-full md:text-xl ">
Your place for
peace of mind</h1>
<h2 className="text-[15px] font-semibold text-white leading-none  h-0 overflow-hidden  w-[350px] lg:text-sm lg:w-full">
Talk about, track, save, and invest your money all in one place. Know where you are and love where you're going.
</h2>
</div>
</div>
{isVisible && (
        <div
          className="follow-cursor fixed  ease-out  duration-300 bg-white p-4  pointer-events-none rounded-full z-30 md:p-2  xs:p-1 xs:hidden"
          style={{ left: `${position.x + 20}px`, top: `${position.y + -20}px` }}
        >
          <h3 className='font-semibold md:text-sm  xs:text-[10px]  xs:font-normal'>{headerContent}</h3>
        </div>
      )}
        </div>
    </section>  );
}
 
export default Partner;