import { Slider } from "@nextui-org/react";
import { useState } from "react";
import { Range } from "react-range";


const Tailored = () => {
 
    const [sliderValue, setSliderValue] = useState(8);
    const initialMultipliers = [
        {
            multiplier: 9,
            company: 'US Stocks',
            background: '#c5e6a1',
        },
        {
            multiplier: 7,
            company: 'International Stocks',
            background: '#f8d360',
        },   {
            multiplier:6,
            company: 'Emerging Markets Stocks',
            background: '#f3ebfb',
        },   {
            multiplier: 4,
            company: 'US Aggregate Bonds',
            background: '#b0d9ff',
        },   {
            multiplier: 3,
            company: 'US Corporate Bonds',
            background: '#f9dd8f',
        },
        {
            multiplier: 2,
            company: 'Municipal Bonds',
            background: '#c2e1ff',
        }
    ];
    const newMultipliers = [
        {
            multiplier: 5,
            company: 'US Stocks',
            background: '#f3ebfb',  // Light Purple
        },
        {
            multiplier: 9,
            company: 'International Stocks',
            background: '#b0d9ff',  // Light Blue
        },
        {
            multiplier: 4,
            company: 'Emerging Markets Stocks',
            background: '#f9dd8f',  // Light Yellow
        },
        {
            multiplier: 7,
            company: 'US Aggregate Bonds',
            background: '#f8d360',  // Gold
        },
        {
            multiplier: 2,
            company: 'US Corporate Bonds',
            background: '#c5e6a1',  // Light Green
        },
        {
            multiplier: 6,
            company: 'Municipal Bonds',
            background: '#c2e1ff',  // Light Blue
        }
    ];
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (id) => {
      setActiveButton(id);
    };
    const multipliers = activeButton === 0 ? initialMultipliers : newMultipliers;
    return (
          <section className="flex flex-col items-center  px-[66px] py-20  gap-20    2xl:px-4">
            <div className="flex  flex-col gap-10  items-center ">
<div className="flex flex-col gap-0  ">
<h1 className="text-[51px]  font-semibold text-center  md:text-3xl">
Tailored to you
</h1>

<h1 className="text-lg font-semibold  text-center leading-tight  md:text-base  md:font-normal">
We’ll strike the right risk-reward balance for your 
<br className="md:hidden"/>unique goals and timeline.
</h1>
</div>
</div>
<div className="flex items-center justify-center   gap-24  lg:flex-col  lg:w-full  md:gap-10">
<div className="flex flex-col gap-10   items-start w-[340px]    lg:w-[500px]  lg:gap-4 xs:w-full">
    <div className="flex flex-col gap-2 w-full   ">
        <h1 className="font-semibold  text-lg lg:text-center">
Portfolio Type
        </h1>
        <div className="bg-[#f5f7fb]  flex w-full p-1 rounded-full">
<button className={`flex-1  rounded-full py-2.5  font-bold  text-center ${activeButton === 0 ? 'bg-white  ' : 'text-[#98a2b3]'}`}  onClick={() => handleButtonClick(0)}> Core</button>
<button className={`flex-1  rounded-full py-2.5  font-bold  text-center ${activeButton === 1 ? 'bg-white  ' : 'text-[#98a2b3]'}`}  onClick={() => handleButtonClick(1)}>ESG</button>
        </div>
    </div>
<div className="flex  gap-4    w-full  flex-col">
<div className="w-full flex flex-wrap items-center  justify-between">
<h1 className="text-lg font-semibold  xs:text-base">Risk Preference</h1>
<h1 className="font-semibold">{sliderValue}</h1>
</div>
<Range
                step={1} // Set step intervals
                min={1}
                max={10}
                values={[sliderValue]}
                onChange={(newValues) => setSliderValue(newValues[0])}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                        }}
                        className="bg-[#e7e7e7] relative w-full h-[3px]"
                    >
                        {children}
                        {[...Array(10)].map((_, index) => {
                            const stepPosition = (index / 9) * 100;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        left: `${stepPosition}%`,
                                        zIndex: 1,
                                    }}
                                    className="h-[7px] w-[7px] bg-[#e7e7e7] absolute rounded-full z-10 top-[-2px]"
                                />
                            );
                        })}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            zIndex: 2,
                        }}
                        className="h-[20px] w-[20px] bg-black rounded-full relative hover:ring-8 ring-[#d3d3d3] ease-out duration-300"
                    >
                        {/* Display the selected value above the thumb */}
                        
                    </div>
                )}
            />


</div>
<p className="text-base font-semibold leading-[22px]  lg:text-center  xs:text-sm">
Together, we'll decide on a bespoke investing approach built on low-cost, diversified ETF funds that span global asset classes. We handle the hard stuff like building your diversified portfolio and managing risk. Then we automate investing overtime to build long-term wealth with ease.
</p>
</div>
<div className="flex flex-col  gap-2   items-start w-[500px]  lg:self-end  lg:w-full">
{multipliers.map((multiplier, index) => {
                const width = Math.min(sliderValue * multiplier.multiplier, 100); // Calculate the width (capped at 100%)

                return (
                    <div className="grid grid-cols-2  gap-20   items-center  w-full  sm:grid-cols-1  sm:gap-4" key={multiplier.multiplier}>
<h1 className="text-lg  font-semibold lg:order-1 lg:text-end   sm:text-start">{multiplier.company}</h1>
<div className=" py-4 relative   px-3 sm:order-2">
<h1 className="relative z-20  ">{`${width}`}%</h1>
<div className="absolute top-0 left-0 h-full  rounded-md z-10 ease-out duration-300  "   style={{
                            width: `${width}%`,
                            backgroundColor: `${multiplier.background}`
                        }}>

</div>
</div>
</div>
                );
            })}

</div>
</div>
<h1 className="text-xs  font-[800]">
Investing involves risk, including the possible loss of principal. It isn't possible<br/> to invest directly in an index. Past performance does not guarantee future results.
</h1>
    </section>);
}
 
export default Tailored;