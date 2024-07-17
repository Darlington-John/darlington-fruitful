import Head from "next/head";

import 'tailwindcss/tailwind.css'
import Layout from "../../layout";
import Button from "../../buttons";
import { useState, useEffect, useRef } from 'react';
const headerData = [
  { start: 0, end: 1.5, text: 'Maya' },
  { start: 1.5, end: 3, text: 'Andrew' },
  { start: 3, end: 4.5, text: 'Raquel' },
  { start: 4.5, end: 6, text: 'Daniella' },
  { start: 6, end: 7.5, text: 'Durriya' },
  { start: 7.5, end: 9, text: 'Steph' },
  { start: 9, end: 10.5, text: 'Sharise' },
  { start: 10.5, end: 12, text: 'Rebecca' },
  { start: 12, end: 13.5, text: 'Misha' },
  { start: 13.5, end: 15, text: 'Colin' },
];
const Home = () => {
  const [currentHeader, setCurrentHeader] = useState(headerData[0].text);
  const [fadeClass, setFadeClass] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const header = headerData.find(
        (item) => currentTime >= item.start && currentTime < item.end
      );

      if (header && header.text !== currentHeader) {
        setFadeClass('fade-out');
        setTimeout(() => {
          setCurrentHeader(header.text);
          setFadeClass('fade-in');
        }, 500); // Half the duration of the fade-out to ensure smooth transition
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Reset headers and state when the video loops
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    };
  }, [currentHeader]);
  const [widthPercentage, setWidthPercentage] = useState(100); // Start with 100%

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newWidthPercentage = Math.max(0, 100 - (scrollY / 20)); // Adjust the divisor to control the rate of width reduction
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
    transition: 'width 0.1s ease-out', // Smooth 
    minWidth:' 93%',
  };
    return (    
      <>
          <Head>
            <title>Fruitful - Finances defined for you</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='flex h-screen   relative flex-col md:justify-end  justify-center  mx-auto overflow-hidden rounded-b-2xl'  style={elementStyle}>
          <video  autoPlay  muted  loop src={"/assets/videos/hero.mp4"}  className='    z-10 top-0  absolute w-full xs:invisible'  style={{height: '100vh', overflow: 'hidden', objectFit: 'cover'}}  ref={videoRef} preload="auto"/>
          <video  autoPlay  muted  loop src={"/assets/videos/mobileVid.mp4"}  className='    z-10 top-0  absolute w-full  hidden  xs:block' style={{height: '100vh', overflow: 'hidden', objectFit: 'cover'}}  preload="auto"/>
          <div className="flex relative items-start z-20 md:py-6">
<div className="flex flex-col gap-6  items-start w-full px-[66px] md:px-4  text-white md:gap-4 xs:gap-0 ">
  <div className="text-white  text-[90px] leading-[80px] md:leading-none   md:flex gap-2 items-center md:text-[35px] md:flex-wrap  xs:text-3xl  xs:pb-2">
    <h1 className="font-semibold 2xs:hidden">Finances</h1>
    <h1 className="font-semibold 2xs:hidden">figured out</h1>
    <h1 className="font-semibold 2xs:hidden">for you</h1>
    <h1 className="font-semibold 2xs:block hidden">Finances figured out for you</h1>
  </div>
  <div className="flex text-[26px]  font-semibold  gap-2 xs:flex-wrap xs:text-base 2xs:text-lg xs:hidden">
  <h1 className={`  ease-out duration-300  ${fadeClass}`}>{currentHeader}</h1>
  <h1 >is a real Fruitful Member</h1>
  {/* tastes like she might be the one*/}
  </div>
  <Button action="Get started" white  link="/get-started"/>
  </div>
          </div>
           <div className="flex w-full  py-4   px-8 bg-lightGreen   text-green  absolute  z-20 bottom-0  flex-col items-center text-center leading-none gap-0 md:relative  md:py-2 md:px-2 ">
            <h1 className="font-semibold text-sm md:text-xs">Membership is risk-free for 30 days

</h1>
<h1 className="text-sm md:text-xs">Try Fruitful for a month! Not your thing? Get a full refund. No fuss.
</h1>
          </div>
          </div>
          </>
  );
}
 
export default Home;