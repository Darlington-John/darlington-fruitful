
import { useState, useEffect, useRef } from 'react';


const MembersBenefits = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerTop, setContainerTop] = useState(0);
    const containerRef = useRef(null);
    const [maxFontSize, setMaxFontSize] = useState(160);
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setScrollPosition(window.scrollY);
          setContainerTop(rect.top + window.scrollY);
        }
      };
  
      const handleResize = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth <= 500) {
          setMaxFontSize(50);
        } else if (screenWidth <= 760) {
          setMaxFontSize(80);
        } else if (screenWidth <= 1023) {
          setMaxFontSize(100);
        } else {
          setMaxFontSize(160);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      handleScroll(); // Run the scroll handler initially to set initial state
      handleResize(); // Run the resize handler initially to set initial state
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const maxScroll = 1800; // Max scroll height where changes will occur
    const minFontSize = 52; // Minimum font size

    const colorChangeThreshold = 1000;
    const currentScroll = scrollPosition - containerTop;
    const clampedScroll = Math.max(0, Math.min(currentScroll, maxScroll));
    const minPosition = 80;
    const position = Math.max(minPosition, maxScroll - clampedScroll);

    const fontSize = maxFontSize - ((maxFontSize - minFontSize) * (clampedScroll / maxScroll));
    const adjustedScroll = Math.max(0, clampedScroll - colorChangeThreshold);
    const maxAdjustedScroll = maxScroll - colorChangeThreshold;
    const colorValue = Math.max(0, 255 - ((adjustedScroll / maxAdjustedScroll) * 255));
    const color = clampedScroll >= maxScroll ? '#000000' : `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    return ( <section className="flex flex-col w-full relative overflow-hidden" ref={containerRef}>
        <div className="relative  w-full h-[240vh]  4xl:h-[150vh]  bg-[#B0DAED]  rounded-t-[40px]    xs:h-[180vh]">
<img src={'/assets/images/leftTree.png'} className="absolute left-0 bottom-40  h-[1132px]  object-cover  "  alt=''/>
<img src={'/assets/images/rightTree.png'} className="absolute right-0 bottom-0  h-[1395px] object-cover "  alt=''/>
<img src={'/assets/images/people.webp'} className="absolute  bottom-0  w-full " alt=''/>
</div>
<div className="w-full bg-[#F8F0D8] p-28">
</div>
<div className="w-full bg-[#E0F0FF] p-28">
</div>
<h1 className="  text-center font-semibold text-white leading-none"   style={{      position: 'absolute',
        bottom: `${position}px`,
        fontSize: `${fontSize}px`,
        width: '100%',
        textAlign: 'center',
        transition: 'all 0.1s linear',
        color: color,
        }}>Membership <br/>Benefits</h1>
<h1 className="  text-center  font-semibold text-white leading-tight  absolute bottom-[30px] text-base w-full  "   style={{      
        color: color,
        }}>Get expert advice and access to smarter, simpler   <br/>ways to save and invest all in one place.
      </h1>
    </section> );
}
 
export default MembersBenefits;