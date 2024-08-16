import { useInView } from "framer-motion";
import Button from "../../buttons";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const OurGoals = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:false });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 764px)' });
    const floats= [
        {id:1,
            img: '/assets/images/absorb.png',
            text: 'Eliminate money stress',
            rotate: 4,
            fromY: 100,
            toY: 0,
            top: 0,
            
        },
        {id:2,
            img: '/assets/images/pluck.png',
            text: 'Deal with Debt',
            rotate: 6,
bottom: 0,
fromY: -400,
toY: 0,
        },
        {id:3,
            img: '/assets/images/gather.png',
            text: 'Manage money better',
            rotate: -10,
bottom: 250,
fromX: 600,
toX: 0,
left:60,
        },
        {id:4,
            img: '/assets/images/water.png',
            text: 'Buy the perfect home',
            rotate: 10,
bottom: 250,

fromX: -600,
toX: 0,
right:60,
        },
        {id:5,
            img: '/assets/images/can.png',
            text: 'Change job or career',
            rotate: 10,
            fromXY: { x: 350, y: 50 },
            toXY: { x: 0, y: 20 },
            top: 50,
            left: 340,
            hidden: 'xl:hidden'
        },
        {id:6,
            img: '/assets/images/plant.png',
            text: 'Plan for a family',
            rotate: -10,
bottom: 50,
fromXY: { x: 350, y: -250 },
toXY: { x: 0, y: 20 },
left: 340,
     hidden: 'xl:hidden'
        },
        {id:7,
            img: '/assets/images/can.png',
            text: 'Change job or career',
            rotate: 10,
            fromXY: { x: -300, y: 200 },
            toXY: { x: 0, y: 20 },
            top: 50,
            right: 340,
                 hidden: 'xl:hidden'
        },
        {id:8,
            img: '/assets/images/plant.png',
            text: 'Plan for a family',
            rotate: -10,
bottom: 50,
fromXY: { x: -300, y: -350 },
toXY: { x: 0, y: 20 },
right: 340,
     hidden: 'xl:hidden'
        },
    ]
    return ( <section  className="flex flex-col  gap-3 items-center justify-center  h-screen  md:hidden   relative  md:py-10 md:h-auto sm:py-4   4xl:h-[70vh]  4xl:w-[80%]  4xl:mx-auto  4xl:my-20"  ref={ref}>
<div className="flex flex-col gap-3 items-center justify-center sm:px-4 ">
<h1 className="text-[51px] leading-[56px] font-semibold  text-center   md:text-4xl  sm:text-3xl">
Your Goals<br className="sm:hidden"/> are ours too
</h1>
<h1 className="text-base font-semibold text-center xs:text-sm">
We’ll guide and support you though all money<br  className="sm:hidden" /> moments and milestones.
</h1>
<Button classic action="Learn more"  link="/learn"/>
</div>

{floats.map((data, index)=> (
    <div className={`w-[195px] lg:w-[150px] md:w-[120px] md:h-[134px]  lg:h-[174px]  h-[221px]  bg-lightblue absolute   bg-[#eff7ff] text-[#465766] rounded-lg shadow-lg flex flex-col items-start  p-4   justify-between   text-start ${data.hidden}`}   style={{  

    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
    zIndex: 2,
    
        ...(data.top !== undefined ? { top: `${data.top}px` } : { bottom: `${data.bottom}px` }),
        ...(data.left !== undefined ? { left: `${data.left}px` } : { right: `${data.right}px` }),
...(isSmallScreen ? {display: 'none'} : {   transform: ` rotate(${data.rotate}deg) 
    ${
      data.fromXY
        ? (isInView
            ? `translate(${data.toXY.x}px, ${data.toXY.y}px)`
            : `translate(${data.fromXY.x}px, ${data.fromXY.y}px)`)
        : data.fromY
          ? (isInView
              ? `translateY(${data.toY}px)`
              : `translateY(${data.fromY}px)`)
          : (isInView
              ? `translateX(${data.toX}px)`
              : `translateX(${data.fromX}px)`)
    }`,})
    }} key={index}> 
    <img src={data.img} alt="" className="w-[140px]  mx-auto md:w-[100px] md:w-[80px]"/>
    <h1 className="text-[20px]  font-semibold leading-[21px] lg:text-base  lg:leading-none  md:text-sm   md:leading-none">
    {data.text}
    </h1>
    </div>
))}

    </section> );
}
 
export default OurGoals;