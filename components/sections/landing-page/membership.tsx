
import { useRef, useState } from 'react';
import Button from '../../buttons';
import { useInView } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Membership = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [activeDiv, setActiveDiv] = useState(1);
    const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divNumber) => {
    setHoveredDiv(divNumber);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };
    const handleButtonClick = (buttonNumber) => {
      setActiveButton(buttonNumber);
    };

    const getBackgroundStyles = (divNumber) => {
        switch (divNumber) {
          case 0:
            return {
           backgroundImage: `url(/assets/images/banana.webp),url(/assets/images/vase.webp)`, backgroundPosition: '210px -70px, bottom left', backgroundSize: '150px, 100px', backgroundRepeat: 'no-repeat'
            };
          case 1:
            return {
backgroundImage: `url(/assets/images/orange.webp)`, backgroundPosition: '0px -100px', backgroundSize: '100px', backgroundRepeat: 'no-repeat'
            };
          case 2:
            return {
         backgroundImage: `url(/assets/images/hang.webp)`, backgroundPosition: '0px -140px, bottom left', backgroundSize: '100px', backgroundRepeat: 'no-repeat'
            };
          default:
            return {};
        }
      };
    
      const divStyles = (divNumber) => {
        const isActive = hoveredDiv === divNumber || (hoveredDiv === null && divNumber === 1);
        return {

          backgroundColor: isActive ? '#fee9d1' : 'transparent',
          cursor: 'pointer',
          overflow: 'hidden',
  
        //   height:  isInView ? "310px" : "0",
          transition: "width 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, transform  0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, background 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          ...getBackgroundStyles(divNumber),
        };
      };

      const ref = useRef(null);
      const isInView = useInView(ref, { once:false });
      const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });

      // Determine width and transition based on screen size and isInView
     
    return (  <section className="flex flex-col  gap-10 items-center justify-center  py-20" ref={ref} >
<div className="flex flex-col items-center  justify-center  leading-none  gap-3">
<h1 className="text-center  text-[40px]  font-semibold xs:text-3xl">
Fruitful Membership
</h1>
<h1 className="text-center  text-sm  ">
Membership is risk-free for 30 days
</h1>
<div className='flex items-center gap-3 flex-wrap justify-center'>
<button className={`'flex flex-col items-center justify-center border rounded-[20px] py-2  w-[200px]   ' ${activeButton === 1 ? 'bg-black text-white' : ''}`}  onClick={() => handleButtonClick(1)}>
    <h1 className='font-semibold text-base  xs:text-sm'>Solo</h1>
    <h1 className=' text-xs'>For just you</h1>
</button>
<button className={`'flex flex-col items-center justify-center border rounded-[20px] py-2  w-[200px] ' ${activeButton === 2 ? 'bg-black text-white' : ''}`}  onClick={() => handleButtonClick(2)}>
    <h1 className='font-semibold text-base text-base  xs:text-sm'>
Joint</h1>
    <h1 className=' text-xs'>
For you and your partner</h1>
</button>
</div>
</div>
<div className='flex items-center justify-center gap-10   flex-wrap dxs:px-4'>
<div className={`flex flex-col justify-end  gap-10  h-[310px]    rounded-[32px]  shadow-2xl  4xl:shadow-xl  hover:scale-110 transition duration-300 ease-in-out items-center p-5  rotate-[-5deg] translate-y-6  dxs:rotate-[odeg]  dxs:w-full  ${ isSmallScreen ? 'w-[360px]' : (isInView ? 'w-[360px]' : 'w-0')} `}   style={divStyles(0)}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}  >
<div className='flex flex-col gap-2 w-full items-center'>
<div className=' relative leading-none flex  items-baseline'>
<h1 className='text-[26px]  text-green  font-bold  top-0 left-0  self-start'>
$
</h1>
<h1 className='text-[80px]  text-green  font-bold text-center'>
 {activeButton === 1 ? '98' : '148'}
</h1>
<h1 className='text-[12px]  text-green   text-center  absolute right-[-50px] bottom-3'>
/ month
</h1>

</div>
<div className='text-center leading-none flex flex-col gap-1'>
    <h1 className='text-green  text-[21px] font-bold'>
        Monthly
    </h1>
    <h1 className='text-green  text-[12px] font-semibold '>
       ${activeButton === 1 ? '98' : '148'} paid every month
    </h1>
</div>
</div>
<div className='flex flex-col gap-2 w-full items-center'>
<button className='text-center w-full h-[50px] hover:bg-green border-green  border rounded-[10px] font-semibold text-sm text-green  transition duration-300  hover:text-lightOrange' >
Start with monthly
</button>
</div>
</div>
 <div className={`flex flex-col justify-end  gap-10  h-[310px]    rounded-[32px]  shadow-2xl  4xl:shadow-xl  hover:scale-110 transition duration-300 ease-in-out items-center p-5 relative    dxs:rotate-[odeg]  dxs:w-full  ${isSmallScreen ? 'w-[360px]' : (isInView ? 'w-[360px]' : 'w-0')} `}   style={divStyles(1)}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}>
<div className='absolute top-4  right-4 bg-lightGreen  rounded-full text-sm font-bold py-1 px-6 text-green '>
Most Popular
</div>
<div className='flex flex-col gap-2 w-full items-center'>
<div className=' relative leading-none flex  items-baseline'>
<h1 className='text-[26px]  text-green  font-bold  top-0 left-0  self-start'>
$
</h1>
<h1 className='text-[80px]  text-green  font-bold text-center'>
{activeButton === 1 ? '92' : '138'}
</h1>
<h1 className='text-[12px]  text-green   text-center  absolute right-[-50px] bottom-3'>
/ month
</h1>

</div>
<div className='text-center leading-none flex flex-col gap-1'>
    <h1 className='text-green  text-[21px] font-bold'>
       Quarterly
    </h1>
    <h1 className='text-green  text-[12px] font-semibold '>
       ${activeButton === 1 ? '275' : '415'} paid every 3 months
    </h1>
</div>
</div>
<div className='flex flex-col gap-2 w-full items-center'>
<button className='text-center w-full h-[50px] hover:bg-green border-green  border rounded-[10px] font-semibold text-sm text-green  transition duration-300  hover:text-lightOrange' >
Start with quarterly
</button>
</div>
</div>
<div className={`flex flex-col justify-end  gap-10  h-[310px]     rounded-[32px]  shadow-2xl  4xl:shadow-xl  hover:scale-110 transition duration-300 ease-in-out items-center p-5 rotate-[5deg] translate-y-6   dxs:rotate-[odeg]  dxs:w-full  ${isSmallScreen ? 'w-[360px]' : (isInView ? 'w-[360px]' : 'w-0')}`}   style={divStyles(2)}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}>
<div className='flex flex-col gap-2 w-full items-center'>
<div className=' relative leading-none flex  items-baseline'>
<h1 className='text-[26px]  text-green  font-bold  top-0 left-0  self-start'>
$
</h1>
<h1 className='text-[80px]  text-green  font-bold text-center'>
{activeButton === 1 ? '83' : '125'}
</h1>
<h1 className='text-[12px]  text-green   text-center  absolute right-[-50px] bottom-3'>
/ month
</h1>

</div>
<div className='text-center leading-none flex flex-col gap-1'>
    <h1 className='text-green  text-[21px] font-bold'>Annually
    </h1>
    <h1 className='text-green  text-[12px] font-semibold '>
       ${activeButton === 1 ? '998' : '1,498'} paid every year
    </h1>
</div>
</div>
<div className='flex flex-col gap-2 w-full items-center'>
<button className='text-center w-full h-[50px] hover:bg-green border-green  border rounded-[10px] font-semibold text-sm text-green  transition duration-300  hover:text-lightOrange' >
Start with annually
</button>
</div>
</div>
</div>  
    </section>);
}
 
export default Membership;