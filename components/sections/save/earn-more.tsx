import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../../buttons";


const EarnMore = ({glowRef1, glow}) => {


    const features = [
        {
            feat: '5.00% APY savings account, more than 10x the national average*'},
        {
            feat:'No account fees'
        },
        {
            feat:'Unlimited fee-free transfers'
        },
        {
            feat:'No minimum deposit to earn 5.00% APY'
        },
        {
            feat:'FDIC insured up to $250,000 per depositor based on the ownership category†'
        },
        {
            feat:'Get set up in minutes'
        },
    ]
    const [inputValue, setInputValue] = useState(20000);

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Regular expression to test if the value contains only digits
          setInputValue(value);
        }
      };

  
    const calculatePercentage = (percentage) => {
      return (inputValue * percentage).toFixed(2);
    };
  
    return ( <section className="h-screen w-full flex  items-center justify-center px-[224px]  relative  2xl:px-20  lg:px-4  lg:justify-normal  md:h-auto  md:py-20  2xs:py-10" >
            <div className="h-full blur-3xl absolute  w-screen left-0  mx-auto z-10" style={glow} ></div>
<div className="flex gap-4  relative z-20 items-center  lg:flex-col  lg:w-full"  ref={glowRef1} style={glow}>
    <div className="flex flex-col gap-10 items-start  lg:self-start md:gap-4">
        <h1 className="text-[40px]  font-semibold leading-none  md:text-4xl  sm:text-2xl">
        Earn more on savings
        </h1>
        <ul className=" font-semibold flex gap-2 flex-col sm:gap-0">
{features.map((feature)=>(
    <li key={feature.feat} className="text-lg leading-none  md:text-base  md:leading-snug  sm:leanding-tight   sm:text-sm  sm:font-normal" >
{feature.feat}
    </li>
))}
        </ul>
    <Button link="/get-started" orange  action="Get started"/>
    </div>
<div className="bg-[#f7fbff]  rounded-2xl  p-8 flex flex-col gap-6  w-[550px]  lg:self-end  sm:w-full  2xs:p-2">

<div className="flex flex-col gap-4">
<h1 className="text-base  font-normal leading-snug md:text-sm">
Enter your cash savings below<br/>
to estimate yearly interest earned.
</h1>
<div>
      <form className="flex items-center">
<label htmlFor="percent" className="text-[90px] md:text-7xl  sm:text-5xl 2xs:text-4xl">
$
</label>
<input
name="percent"
        value={inputValue}
        onChange={handleChange}
className="text-[90px]  font-normal w-full outline-none  bg-[#f7fbff] md:text-7xl  sm:text-5xl 2xs:text-4xl"
type="text"

      />
      </form>
      <div className="flex flex-col   bg-grey gap-[1px] justify-around">
      <div className="grid  grid-cols-3 bg-[#f7fbff]  font-[800]  py-2 text-sm  sm:text-xs  ">
    <h1>Fruitful</h1>
    <h1 className="place-self-center">5% APY</h1>
    <h1 className="place-self-end">${calculatePercentage(5)}</h1>
    
</div>
<div className="grid  grid-cols-3 bg-[#f7fbff]  font-[800]   py-2 text-sm  sm:text-xs">
    <h1>Apple</h1>
    <h1 className="place-self-center">4.40% APY</h1>
    <h1 className="place-self-end">${calculatePercentage(4.40)}</h1>
    
</div>
<div className="grid  grid-cols-3 bg-[#f7fbff]  font-[800]   py-2 text-sm  sm:text-xs">
    <h1>Natl Avg</h1>
    <h1 className="place-self-center">0.36% APY</h1>
    <h1 className="place-self-end">${calculatePercentage(0.36)}</h1>
    
</div>
<div className="grid  grid-cols-3 bg-[#f7fbff]  font-[800]   py-2 text-sm  sm:text-xs">
    <h1>Chase</h1>
    <h1 className="place-self-center">0.01% APY</h1>
    <h1 className="place-self-end">${calculatePercentage(0.01)}</h1>
    
</div>
      </div>

   
    </div>
</div>
</div>
</div>
    </section> );
}
 
export default EarnMore;