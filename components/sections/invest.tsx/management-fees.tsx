
import { useState } from "react";
import Button from "../../buttons";


const ManagementFees = ({glowRef1, glow}) => {


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
    const [inputValue, setInputValue] = useState(75000);

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Regular expression to test if the value contains only digits
          setInputValue(value);
        }
      };

  
    const calculatePercentage = (percentage) => {
      return (inputValue * percentage).toFixed(2);
    };
  
    return ( <section className="h-screen w-full flex  items-center justify-center px-[224px]  relative  2xl:px-20  lg:px-4  lg:justify-normal  md:h-auto  md:py-20  2xs:py-10  "  style={glow} ref={glowRef1}>
<div className="flex gap-10  relative z-20 items-center  lg:flex-col  lg:w-full"   >

<div className="bg-[#d7e8cd]  rounded-2xl  p-8 flex flex-col gap-6  w-[550px]  lg:self-end  sm:w-full  2xs:p-2  shrink-0">

<div className="flex flex-col gap-4">
<h1 className="text-base  font-normal leading-snug md:text-sm">
Enter an investment amount
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
className="text-[90px]  font-normal w-full outline-none  bg-[#d7e8cd] md:text-7xl  sm:text-5xl 2xs:text-4xl"
type="text"

      />
      </form>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-[24px]   md:text-base  sm:text-sm">
        Management fees paid over 10 years
        </h1>
      <div className="flex flex-col   bg-grey gap-[1px] justify-around">
      <div className="grid  grid-cols-3 bg-[#d7e8cd]  font-[800]  py-3 text-sm  sm:text-xs  ">
    <h1>Fruitful</h1>
    <h1 className="place-self-center">0.00%</h1>
    <h1 className="place-self-end">${calculatePercentage(0)}</h1>
    
</div>
<div className="grid  grid-cols-3 bg-[#d7e8cd]  font-[800]   py-3 text-sm  sm:text-xs">
    <h1>Robo-Advisors</h1>
    <h1 className="place-self-center">0.25%</h1>
    <h1 className="place-self-end">${calculatePercentage(0.25)}</h1>
    
</div>
<div className="grid  grid-cols-3 bg-[#d7e8cd]  font-[800]   py-3 text-sm  sm:text-xs">
    <h1>Traditional visors</h1>
    <h1 className="place-self-center">1%</h1>
    <h1 className="place-self-end">${calculatePercentage(1)}</h1>
    
</div>

      </div>
<p className="text-xs  font-normal leading-[14px]">
All 3 fee calculations assume an annualized rate of return of 8% and annual contributions of $5,000. The rates of return shown are net of the average management fees displayed. An investor may have outcomes that are different than what is displayed. All investments have risk.
</p>
      </div>
    </div>
</div>
</div>
<div className="p-4   w-full  2xs:p-0 ">
<div className="w-[400px] flex flex-col gap-5  xs:w-full">
<h1 className="text-[40px]  font-semibold xs:text-2xl">
0% management fees
</h1>
<h1 className="text-lg leading-[24px]  xs:text-base    2xs:text-sm">
Don’t let pesky management fees at traditional and robo advisors slow your growth. The worst place to take fees is from your investments, which should be, well, growing, not slowing. That’s why investment management is included in your membership at no extra cost.
</h1>
</div>
</div>
</div>
    </section> );
}
 
export default ManagementFees;