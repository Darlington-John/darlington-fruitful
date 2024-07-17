import Link from 'next/link';
import React, { useRef, useState } from 'react'

const data = [
    {

      content: 'Guidance' ,

    }
   ];
   const features = [
    {
      link: '/guidance',
      content: 'Guidance' ,
      feature: 'Expert 1:1 advice and support'
    },
    {
      link: '/save',
      content: 'Save' ,
      feature: ' Earn 5.00% APY on your savings'
    },
    {
      link: '/invest',
      content: 'Invest' ,
      feature: 'Smarter investing set up for you'
    },
   ];
   const AccordionItem = ({ isOpen, onClick }) => {
    const contentHeight = useRef<HTMLDivElement | null>(null);
  
    return (
      <div className="border-1 border-b-[#00000066] overflow-hidden text-[28px] border-b w-full flex flex-col">
        <button
          className={`w-full text-left py-3 px-1 flex items-center justify-between font-medium border-none pointer leading-none xs:py-2 ${isOpen ? '' : ''}`}
          onClick={onClick}
        >
          <p className="text-[28px] font-semibold xs:text-base">Members benefits</p>
          <img
            src={'/assets/icons/caret-down.svg'}
            alt=""
            className={`w-3 ease-out duration-300 ${isOpen ? 'rotate-[180deg]' : ''}`}
          />
        </button>
        <div
          ref={contentHeight}
          className="ease-out duration-300"
          style={
            isOpen && contentHeight.current
              ? { height: contentHeight.current.scrollHeight }
              : { height: '0px' }
          }
        >
          <div className="flex flex-col gap-3 py-2">
            {features.map((data, index) => (
              <Link href={data.link} className="flex flex-col leading-none gap-2 xs:gap-0" key={index}>
                <p className="text-[28px] font-semibold xs:text-base">{data.content}</p>
                <p className="text-base xs:text-sm">{data.feature}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
   const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='w-full'>
       {data.map((item, index) => (
       <AccordionItem
        key={index}
       
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
  
  export default Accordion;