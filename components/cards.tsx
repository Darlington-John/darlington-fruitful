import { useInView } from 'framer-motion';
import { useState, useEffect, useRef, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from './buttons';
import { FruitfulContext } from './context';
import { useRouter } from 'next/router';
import Link from 'next/link';


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
  const cardRef = useRef(null);

  useEffect(() => {
    if (props.onScroll) {
      props.onScroll(cardRef, props.id);
    }
  }, [props.onScroll, props.id]);
  const{selectedGuide, setSelectedGuide} = useContext(FruitfulContext);
  const handleButtonClick = () => {
    setSelectedGuide(props.name);  // Set the context value when button is clicked
    toggleAboutPopup();
  };

  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      {props.guide && (
          <div
          className={`bg-lightOrange rounded-xl   w-[230px]   ease-out duration-300 guide drop-shadow-2xl relative hover:z-30 cursor-pointer   dxs:drop-shadow h-[300px] relative    4xl:h-[350px]    4xl:w-[260px] ${pathname ==='/' &&'  overflow-hidden'}    ${selectedGuide === props.name && ' ring-2  ring-green   ring-inset  z-30'}`}
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
          {selectedGuide=== props.name && (
            <div className='bg-lightGreen p-2 rounded-full border border-green absolute -top-2 -left-2'>
<img src={'/assets/images/check.svg'} className='w-4  img'/>
</div>
          )}
          
          <img src={props.img} alt="" className="h-full w-full object-cover object-center" />
          <video muted autoPlay loop src={props.video} className={`w-full h-full object-cover  rounded-xl  ${selectedGuide === props.name && ' border-2  border-green   border-inset  z-30'}`} />

        </div>

      )}
      {props.sliderGuide && (    <div className={`keen-slider__slide number-slide  bg-lightOrange rounded-xl h-[300px]  w-[230px]   ease-out duration-300    relative  ${selectedGuide === props.name && ' ring-2  ring-green   ring-inset  z-30'}`}  onClick={toggleAboutPopup}  style={{overflow: 'scroll'}}>
        {selectedGuide=== props.name && (
            <div className='bg-lightGreen p-2 rounded-full border border-green absolute top-2  left-2'>
<img src={'/assets/images/check.svg'} className='w-4'/>
</div>
          )}
                        {props.slide ===props.slideIndex ? (          <video muted autoPlay loop src={props?.video} className={`w-full h-full object-cover  ${selectedGuide === props.name && ' border-2  border-green   border-inset  z-30'}`} />) : (<img src={props?.img} alt="" className="h-full w-full object-cover object-center" />) }
                        <button className=" p-1 text-sm absolute bottom-2  bg-[#9a9a9a66]  backdrop-blur-sm text-white rounded-lg text-nowrap right-2   2xs:text-xs">
Watch {props?.name}
                            </button>
                    </div>)}
      
            {about && (
  <div className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8 xs:justify-end  xs:items-end  xs:px-0 `}>
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
  {pathname !=='/profile' &&  (
  <div className='text-center '>
    {pathname.startsWith( '/get-started') ? (<button className='flex items-center  h-[40px] md:h-[30px] py-[25px] px-[30px] md:py-3 md:px-4  xs:text-xs text-base md:text-sm  xs:h-[30px] text-center  bg-[#054f31]  w-full text-center text-white rounded-full xs:h-[40px] ' onClick={handleButtonClick}>
    
    <h1 className='text-center mx-auto'>
    {selectedGuide === props.name? 'Good choice'  :(<> Choose  {props.name} </>)}
 
  </h1>
  </button>): (
    <Link href="/get-started?step=1">
    <button className='flex items-center  h-[40px] md:h-[30px] py-[25px] px-[30px] md:py-3 md:px-4  xs:text-xs text-base md:text-sm  xs:h-[30px] text-center  bg-[#054f31]  w-full text-center text-white rounded-full xs:h-[40px] '>
    
    <h1 className='text-center mx-auto'>
Choose your Guide
  </h1>
  </button>
  </Link>
  )}
  
  {/* This should be stored in context */}
  </div>
  )}
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
  <div className='flex  bg-white rounded-[20px]  items-center justify-between  w-full px-[140px]  py-20  2xl:px-4  lg:flex-col      xs:py-10     self-center sticky   self-center top-32  4xl:py-40'>
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
<img src={props.float3} className='absolute bounce md:hidden  md:self-end  ' style={{top: `${props.top3}`, left: `${props.left3}`, width: `${props.width3}`}} alt=''/>
</div>
  </div>
)}
{props.saving && (
  <div className=' flex flex-col items-center gap-2 w-[270px] h-[390px]  rounded-2xl  shadow-xl  justify-between px-5  py-8  sm:py-4 sm:px-3  xs:py-2 xs:px-2  sticky   self-center top-32  bg-white  sm:w-[200px] sm:h-[280px] xs:h-[220px]  xs:w-[150px]  4xl:top-80 ' ref={cardRef}  style={{transform: `rotate(${props.rotate}deg)`}}>
<img src={props.img} alt='' className='w-[160px]  h-[160px] object-cover overflow-hidden  sm:w-32 sm:h-32  xs:w-24 xs:h-24'/>
<div className='flex flex-col gap-2  sm:gap-0 '>
<h1 className='text-lg font-semibold  xs:font-normal  leading-none   sm:text-base xs:text-sm '>
  {props.header}
</h1>
<h1 className='text-base font-semibold  xs:font-normal  leading-[22px]   text-[#5b616b] sm:text-sm  sm:leading-tight  xs:text-xs  xs:leading-none'>
  {props.main}
</h1>
</div>
  </div>
)}
{props.investment && (
  <div className='w-full flex  gap-6  items-center  p-6 padding-4 rounded-[32px]    h-[180px]   border-[#eceff4]  border    shadow-lg  xl:p-3  lg:h-auto  lg:gap-3   md:flex-col md:py-6  md:rounded-md '>
<img src={props.img} alt=''  className='rounded-[16px]  h-[130px] w-[130px]  object-cover  lg:h-[100px]  lg:w-[100px]  md:self-end'/>
<div className='flex flex-col gap-3  w-[450px] md:w-auto'>
<h1 className='text-[28px]  font-bold leading-none  xl:text-2xl  md:font-semibold  sm:text-xl'>
{props.header}
</h1>
<p className='text-base  font-semibold leading-[22px]  xl:text-sm'>
{props.content}
</p>
</div>
  </div>
)}
    </>
  );
};

export default Card;
