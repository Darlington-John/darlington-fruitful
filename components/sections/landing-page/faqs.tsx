import { useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const data = [
    {

      content: 'What is Fruitful?' ,
features: [
    {

        content: 'Fruitful is a financial wellness membership that provides access to:' ,
      },
      {

        content: '1. Expert advice and support from a dedicated Fruitful Guide, who is a CERTIFIED FINANCIAL PLANNER™ Professional that helps with all aspects of your finances.' ,

      },
      {

        content: '2. A 5.00% APY High Yield Savings Account, more than 10x national average*' ,

      },
      {

        content: '3. Tailored investment portfolios with expert support at every step and no management fees.' ,

      },
      {

        content: 'The combo of these 3 core benefits allows our members to organize and optimize their finances in a way that’s simple, smart, stress-free, and sustainable. Members can improve their finances, make real progress toward goals, and eliminate stress. That sounds nice!' ,

      },
      {

        content: '*Rates according to FDIC Monthly Rate Cap Information as of July 18, 2024.' ,

      },
]
    },
    {

        content: 'Why is it good?' ,
        features: [
              {
                content: 'Thinking about money can be stressful and confusing. It’s all too common to have looming anxiety about your finances, feel overwhelmed, or be unsure about how to make progress toward your goals. Our all-encompassing membership makes managing your money easy, effective, and empowering. That means providing a real expert human to support and advise you at every turn. That means creating a blueprint with easy-to-implement steps. That means simpler, smarter ways to save and invest that support your personal goals. And that means doing it all at a transparent, more affordable cost.' ,
              },
        ]
      },
      {

        content: 'Do I need to be a Fruitful Member to access all member benefits?' ,
        features: [
              {
                content: 'Yes, an active Fruitful Membership is required to work with a Fruitful Guide as well as open and maintain a high yield savings account and investment management account(s). Handling your finances should be simple and seamless, so our membership provides complementary services and tools that help memb' ,
              },
        ]
      },
      {

        content: 'What credentials do Fruitful Guides have?' ,
        features: [
              {
                content: 'All Fruitful Guides are CERTIFIED FINANCIAL PLANNER™ Professionals, the highest level of credibility in personal finance. This means all Guides have met intensive education, training and ethical standards, are equipped to help Members with all aspects of their finances in a capable and trustworthy way, and are required to act as fiduciaries for Members. Guides are additionally registered as investment adviser representatives with Fruitful, an SEC-registered investment adviser.' ,
              },
        ]
      },
      {

        content: 'What can Fruitful Guides help me with?' ,
        features: [
              {
                content: `Any part of your life that involves money. Our Guides provide support and advice on each aspect of members' financial worlds while considering all aspects - from managing monthly finances and getting organized to saving and investing, from buying a home to negotiating compensation and choosing benefits, from strategizing around taxes to starting a family and combining finances, and from retirement to insurance and legacy planning.` ,
              },
        ]
      },
      {

        content: 'Can I change my Fruitful Guide?' ,
        features: [
              {
                content: `Yes, you can change your Fruitful Guide at any time, for any reason. We’re committed to your success, and we'll make sure we find the right Guide for you.` ,
              },
        ]
      },
      {

        content: 'Why is it good?' ,
        features: [
              {
                content: 'Thinking about money can be stressful and confusing. It’s all too common to have looming anxiety about your finances, feel overwhelmed, or be unsure about how to make progress toward your goals. Our all-encompassing membership makes managing your money easy, effective, and empowering. That means providing a real expert human to support and advise you at every turn. That means creating a blueprint with easy-to-implement steps. That means simpler, smarter ways to save and invest that support your personal goals. And that means doing it all at a transparent, more affordable cost.' ,
              },
        ]
      },
      {

        content: 'How do I start?' ,
        features: [
              {
                content: 'Choose your Guide, sign-up to become a Fruitful Member (try it risk-free for 30 days), and schedule your 1st session. Tell us about you. Hear about us. Your financial wellness journey just started.' ,
              },
        ]
      },
   ];


   const AccordionItem = ({ isOpen, onClick,...props }) => {
    const contentHeight = useRef<HTMLDivElement | null>(null);
    const features = props.features || [];
    const ref = useRef(null);
    const isInView = useInView(ref, { once:false });
    const float= {
            transform: isInView ? "none" : "rotate(-10deg)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
    return (
      <div className=" overflow-hidden text-[28px]  w-full flex flex-col bg-[#F5F7FB] rounded-[12px] " style={float} ref={ref}>
        <button
          className={`w-full text-left h-[72px]  flex items-center justify-between font-medium  pointer leading-none    px-12  hover:bg-[#eef2f8]  ease-out duration-300 rounded-[12px] outline-none sm:h-[50px] sm:px-4  ${isOpen ? '' : ''}`}
          onClick={onClick}
        >
          <p className="text-[20px] font-semibold sm:text-base">{props.content}</p>
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
          <div className="flex flex-col gap-4 pb-8  px-12 sm:px-4  sm:pb-2">
            {features.map((data, index) => (
    
                <p className="text-[18px] font-semibold sm:text-sm " key={index}>{data.content}</p>
      
            ))}
          </div>
        </div>
      </div>
    );
  };
   const Accordion = () => {
    const [activeIndices, setActiveIndices] = useState([]);

    const handleItemClick = (index) => {
      setActiveIndices((prevIndices) => 
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index)
          : [...prevIndices, index]
      );
    };
   
    return (
     <div className='w-full flex flex-col gap-4'>
       {data.map((item, index) => (
       <AccordionItem
        key={index}
       {...item}
        isOpen={activeIndices.includes(index)}
        onClick={() => handleItemClick(index)}
        features={item.features}
       />
      ))}
     </div>
    )
   };
  

  const Faqs = () => {
    const divRef = useRef(null);


    return ( 
        <div className='p-20 px-60  flex lg:px-10 md:px-4 rounded-b-[40px]   ease-in duration-300' ref={divRef}>
        <Accordion/>
        </div>
     );
  }
   
  export default Faqs;