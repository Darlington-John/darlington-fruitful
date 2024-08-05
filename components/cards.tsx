import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from './buttons';


const Card = (props: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [headerContent, setHeaderContent] = useState('');
  const features = props.features || [];
  const handleMouseMove = (e, content) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setHeaderContent(content);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const [about, setAbout] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);
  const toggleAboutPopup = () => {
    if (!about) {
      setAbout(true);
      setIsAboutVisible(true);
    } else {
      setIsAboutVisible(false);
      setTimeout(() => setAbout(false), 500);
    }
    
  };
  const handleClickOutside = (event) => {
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setIsAboutVisible(false);
      setTimeout(() => setAbout(false), 500);
    }
    
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once:false });

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });

  // Determine width and transition based on screen size and isInView
  const width = isSmallScreen ? '230px' : (isInView ? '230px' : '10px');
  return (
    <>
      {props.guide && (
        <div
          className={`bg-lightOrange rounded-xl h-[300px]  w-[230px]  overflow-hidden hover:scale-[1.15] ease-out duration-300 guide drop-shadow-2xl relative hover:z-30 cursor-pointer   dxs:drop-shadow`}
          style={{
            transform: `rotate(${props.rotate}deg) `,
            transition: 'transform  0.3s cubic-bezier(0.17, 0.55, 0.55, 1), width  1s cubic-bezier(0.17, 0.55, 0.55, 1)',
            width: width,
          }}
          ref={ref} 
        onMouseMove={(e) => handleMouseMove(e, `${props.more} ${props.name}`)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotateH}deg) scale(1.15)`;
          }}
          onMouseLeave={(e) => {
            handleMouseLeave();
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotate}deg)`;
          }}
          onClick={toggleAboutPopup}
        >
          <img src={props.img} alt="" className="h-full w-full object-cover object-center" />
          <video muted autoPlay loop src={props.video} className="w-full h-full object-cover" />

        </div>

      )}
      {props.sliderGuide && (    <div className={`keen-slider__slide number-slide  bg-lightOrange rounded-xl h-[300px]  w-[230px]  overflow-hidden ease-out duration-300    relative `}  onClick={toggleAboutPopup}>
                        {props.slide ===props.slideIndex ? (          <video muted autoPlay loop src={props?.video} className="w-full h-full object-cover" />) : (<img src={props?.img} alt="" className="h-full w-full object-cover object-center" />) }
                        <button className=" p-1 text-sm absolute bottom-2  bg-[#9a9a9a66]  backdrop-blur-sm text-white rounded-lg text-nowrap right-2   2xs:text-xs">
Watch {props?.name}
                            </button>
                    </div>)}
          {props.members && (
        <div
          className={`bg-lightOrange rounded-xl h-[300px]  w-[230px]  overflow-hidden hover:scale-[1.15] ease-out duration-300  drop-shadow-2xl relative hover:z-30 cursor-pointer   dxs:drop-shadow  members`}
          style={{
            transform: `rotate(${props.rotate}deg) `,
            transition: 'transform  0.3s cubic-bezier(0.17, 0.55, 0.55, 1), width  1s cubic-bezier(0.17, 0.55, 0.55, 1)',
            width: width,
          }}
          ref={ref} 
        onMouseMove={(e) => handleMouseMove(e, `${props.more} ${props.name}`)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotateH}deg) scale(1.15)`;
          }}
          onMouseLeave={(e) => {
            handleMouseLeave();
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotate}deg)`;
          }}
          onClick={toggleAboutPopup}
        >
          <img src={props.img} alt="" className="h-full w-full object-cover object-center  " />

        </div>

      )}
            {about && (
  <div className={`fixed bottom-[0px]  h-full w-full  z-30 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8 xs:justify-end  xs:items-end  xs:px-0 `}>
    <div className={`w-[900px]  rounded-[20px] pop  duration-300 ease-in-out bg-white flex flex-col   overflow-hidden  xs:overflow-auto  xs:rounded-t-2xl   xs:rounded-b-none ${isAboutVisible ? '' : 'pop-hidden'}`} ref={aboutRef} >
<div className={`flex   gap-3  w-full xs:flex-col xs:overflow-scroll    xs:py-3   ${props.hfull && 'xs:h-[90vh]'}`}>
  <div className={`  ${props.half && 'w-1/2'}   ${props.full && 'w-full'}   relative xs:w-full   `}>
  <video className='w-full  object-cover xs:h-[300px]  xs:object-center xs:w-auto  xs:mx-auto  ' src={props?.mainVideo}     autoPlay  loop  ref={videoRef}></video>
  <button onClick={toggleMute} className="p-2 bg-[#f9fafb59]  text-lightOrange  rounded-full  absolute top-4 left-4 h-10 w-10 flex items-center justify-center">
<img src={isMuted? '/assets/icons/mute.svg':  '/assets/icons/muted.svg' } className='w-5'/>
      </button>
      {props.close && (
      <button className='flex items-center justify-center  rounded-full h-10 w-10  bg-[#f9fafb]  absolute top-4 right-4   self-end md:h-8 md:w-8 xs:hidden'  onClick={toggleAboutPopup}>
      <img src={`/assets/icons/caret-down-black.svg`} alt="" className=''/>
      </button>
      )}
      <button className='flex items-center justify-center  rounded-full h-10 w-10  bg-[#f9fafb]  absolute top-4 right-4   self-end md:h-8 md:w-8 xs:flex  hidden'  onClick={toggleAboutPopup}>
<img src={`/assets/icons/caret-down-black.svg`} alt="" className=''/>
</button>
  </div>
{props.about && (
  <div className='w-1/2  xs:w-full  p-4 flex justify-between  flex-col md:p-2  xs:gap-3 '>
  <div className='flex  gap-3 bg-white flex-col md:gap-2 '>
  <button className='flex items-center justify-center  rounded-full h-10 w-10  bg-[#f9fafb]  relative   self-end md:h-8 md:w-8 xs:hidden'  onClick={toggleAboutPopup}>
  <img src={`/assets/icons/caret-down-black.svg`} alt="" className=''/>
  </button>
  
  <div className='flex items-start leading-none flex-col'>
  <h1 className='text-[40px] font-semibold text-start md:text-xl'>
  {props.fullname}
  </h1>
  <h1 className='text-sm  text-darkGrey  font-medium text-start md:text-xs'>
  {props.role}
  </h1>
  </div>
  <div>
    <h1 className='text-base text-darkGrey  font-medium text-start md:text-sm' >
  {props.bio}
    </h1>
  </div>
  <div className='flex flex-col  w-full text-start text-darkGrey gap-2 md:text-sm'>
  <h1>{props.name}'s style</h1>
  <div className='flex gap-3 items-center w-full flex-wrap'>
  <button className='bg-[#eff7ff] rounded-full py-2  px-3  flex items-center justify-center gap-1'>
  
  <h1 className='text-black text-sm  md:text-xs'>{props?.firstStyle} </h1>
  </button>
  <button className='bg-[#eff7ff] rounded-full py-2  px-3  flex items-center justify-center gap-1'>
  
  <h1 className='text-black text-sm  md:text-xs'>{props?.secondStyle} </h1>
  </button>
  <button className='bg-[#eff7ff] rounded-full py-2  px-3  flex items-center justify-center gap-1'>
  
  <h1 className='text-black text-sm  md:text-xs'>{props?.thirdStyle} </h1>
  </button>
  </div>
  </div>
  </div>
  <div className='text-center '>
  <button className='flex items-center  h-[40px] md:h-[30px] py-[25px] px-[30px] md:py-3 md:px-4  xs:text-xs text-base md:text-sm  xs:h-[30px] text-center  bg-[#054f31]  w-full text-center text-white rounded-full xs:h-[40px] '>
    <h1 className='text-center mx-auto'>
  Choose your Guide
  </h1>
  </button>
  </div>
  </div>
)}

</div>
    </div>
  </div>
)}
      {isVisible && (
        <div
          className="fixed ease-out duration-300 bg-white p-2 pointer-events-none rounded-full z-50 md:p-2 xs:p-1 xs:hidden text-sm"
          style={{ left: `${position.x + 10}px`, top: `${position.y - 15}px` }}
        >
          <h3 className="font-semibold md:text-sm xs:text-[10px] xs:font-normal">{headerContent}</h3>
        </div>
      )}
{props.benefit && (
  <div className='flex  bg-white rounded-[20px]  items-center justify-between  w-full px-[140px]  py-20  2xl:px-4  lg:flex-col      xs:py-10'>
<div className='flex flex-col  font-semibold gap-6   w-[410px] items-start md:self-start   xs:w-[400px]  2xs:w-full'>
  <div className='flex flex-col gap-2'>
<h1 className='text-base xs:text-sm'>
{props.feat}
</h1>
<h1 className='text-[28px] leading-none xs:text-lg'>
{props.feature}
</h1>
</div>
<ul>
{features.map((data, index)=> (
  <li key={index} className='text-lg  leading-[24px] xs:text-sm' >
{data.list}
  </li>
))}
</ul>
<Button  action="Tell me more" classic  link="/guidance"/>
</div>
<div className=' relative  md:self-end xs:flex flex-col xs:w-full  '>
<img src={props.main} className='w-auto h-auto rounded-[20px]  bounce xs:hidden' alt='' style={{backgroundColor: `${props.bg}`, width: `${props.width}`}} />
<img src={props.float} className='absolute bounce xs:static ' style={{top: `${props.top}`, left: `${props.left}`, width: `${props.width1}`}} alt=''/>
<img src={props.float2} className='absolute bounce xs:static xs:self-end ' style={{top: `${props.top2}`, left: `${props.left2}`, width: `${props.width2}`}} alt=''/>
<img src={props.float3} className='absolute bounce xs:hidden  md:self-end  ' style={{top: `${props.top3}`, left: `${props.left3}`, width: `${props.width3}`}} alt=''/>
</div>
  </div>
)}
    </>
  );
};

export default Card;
