const SavingsSecure = ({glowRef2, glow}) => {
    return ( <div className="flex  items-center justify-center gap-4  h-screen px-4  xs:flex-col  xs:h-auto  xs:py-20   2xs:py-16  4xl:h-[70vh]" style={glow}  ref={glowRef2}>
<img src={'/assets/images/growMoney.png'} className="w-[600px]  xl:w-[500px] rounded-2xl h-auto  lg:w-[300px]  sm:w-[200px]   xs:self-start  2xs:self-end" alt=""/>
<div className="flex flex-col  gap-2 items-start w-[420px]  xs:self-end  sm:w-[380px]  2xs:w-full ">
<h1 className="text-[90px]  font-semibold  leading-[77px]   lg:text-[70px]  lg:leading-[60px]  md:text-[50px] md:leading-none sm:text-3xl  xs:text-2xl">
Your savings are secure
</h1>
<p className="text-lg font-semibold leading-snug md:text-base  xs:text-sm ">
Fruitful high yield savings accounts are held at our partner bank – Emigrant Bank, Member FDIC, which was founded in 1850, and is one of the largest privately held banks in the United States. All accounts are FDIC insured up to $250,000 per depositor based on the ownership category†.
</p>
</div>
    </div> );
}
 
export default SavingsSecure;