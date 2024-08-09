import { useRef, useState } from "react";
import Button from "../../buttons";
const EarnSavings = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const maxTranslate = 20; // Maximum translation in pixels
    const imageSrc = '/assets/images/phoneView.svg'; // Replace with your image path
    
    const imageRef = useRef(null);

    const handleMouseMove = (event) => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth > 1023) { // Disable movement if screen width <= 1023px
          const container = event.currentTarget;
          const containerRect = container.getBoundingClientRect();
    
          if (imageRef.current) {
            const imageRect = imageRef.current.getBoundingClientRect();
            const maxX = (containerRect.width - imageRect.width) / 2;
            const maxY = (containerRect.height - imageRect.height) / 2;
    
            const mouseX = event.clientX - containerRect.left;
            const mouseY = event.clientY - containerRect.top;
    
            const offsetX = ((mouseX / containerRect.width) * 2 - 1) * maxTranslate;
            const offsetY = ((mouseY / containerRect.height) * 2 - 1) * maxTranslate;
    
            setOffset({
              x: Math.max(-maxX, Math.min(maxX, offsetX)),
              y: Math.max(-maxY, Math.min(maxY, offsetY)),
            });
          }
        } else {
          setOffset({ x: 0, y: 0 }); // Reset offset if movement is disabled
        }
      };
    
    return ( 
        <section className="h-screen w-full  flex  items-center justify-between px-[66px]  gap-20    lg:pt-40  l  lg:gap-4  lg:h-full  md:pt-28 md:pt-20 xs:pt-16  lg:px-8   xs:px-4  md:flex-col"  onMouseMove={handleMouseMove}>
        <div className="flex  flex-col gap-8  flex-1 items-start   lg:flex-auto lg:gap-4 md:gap-2  " >
            <h1 className="text-[90px] font-semibold leading-[77px]  lg:text-[40px]  lg:leading-none md:text-4xl  xs:text-2xl  w-[500px]    lg:w-full   ">
           Earn 5.00%
APY on your
savings
            </h1>
            <div className="flex flex-col xs:gap-2 ">
        <h1 className="text-lg font-semibold md:text-base xs:leading-none  xs:font-normal xs:text-sm">
Earn more than 10x the national average on your<br/> savings.* No account fees. No minimums.
        </h1>
        <h1 className="text-lg font-semibold md:text-base xs:leading-none  xs:font-normal xs:text-sm">
        No nonsense.
        </h1>
            </div>
            <Button action="Get started" classic   link="/get-started" big/>
        
        </div>
        <div className="flex-1    rounded-2xl   h-[608px]  md:h-[400px]  relative self-end lg:flex-none  relative  shrink-0   md:self-center ">
     <img src={imageSrc}
        alt="Follow"
        ref={imageRef}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}   className="w-auto h-full ease-out duration-300  shadow-lg  mx-auto rounded-2xl"/>
        <img src={'/assets/images/vac.svg'} alt="" className="absolute  bottom-60 -left-16  bounce w-72"/>
        <img src={'/assets/images/home.svg'} alt="" className="absolute  bottom-32  -left-16  bounce w-72"/>
        <img src={'/assets/images/self.svg'} alt="" className="absolute  top-40  -right-16  bounce w-72"/>
        </div>
            </section>
     );
}
 
export default EarnSavings;