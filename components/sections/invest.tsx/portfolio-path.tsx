

const PortfolioPath = () => {
 
    const folio = [
        {
            img: '/assets/images/magic.svg',
            content: `Set-up & Supported by your Guide`
        },
        {
            img: '/assets/images/flash.svg',
            content: `No management
fees, no minimums,
no nonsense`
        },
        {
            img: '/assets/images/spin.svg',
            content: `Tailored to
your goals
and timeline`
        },

        {
            img: '/assets/images/law.svg',
            content: `Easy, automated
contributions and
rebalancing`
        },
    ]
    return (
          <section className="flex flex-col items-center  px-[66px] py-20  gap-8    2xl:px-4">
            <div className="flex  flex-col gap-10  items-center ">
<div className="flex flex-col gap-0  ">
<h1 className="text-[51px]  font-semibold text-center  md:text-3xl">
Portfolio Paths
</h1>
<h1 className="text-lg font-semibold  text-center leading-tight  md:text-base  md:font-normal">
Our portfolios are carefully constructed to maximize diversification and optimize<br className="md:hidden"/> for building long-term wealth, while minimizing expenses
</h1>
</div>
<div className="flex gap-20  items-start flex-wrap md:justify-center  md:gap-6">
    {folio.map((data)=>(
        <div className="flex gap-3 w-[120px] flex-col items-center" key={data.content}>
<img src={data.img} alt="" className="w-7"/>
<p className="text-center text-[#5b616b]  font-bold text-xs">
{data.content}
</p>
</div>
    ))}

</div>
</div>
<div className="flex  gap-8 flex-wrap justify-center  ">
  <div className="flex   flex-col gap-5  w-[500px]  h-[550px]  xs:h-auto  bg-[#2C5957]  rounded-[32px]  items-start p-6  xs:w-full">
<img src={'/assets/images/rush.webp'} alt="" className="w-full rounded-[32px] "/>
<div className="flex flex-col gap-3">
<h1 className="font-bold  text-[40px] text-white md:text-2xl">
Core
</h1>
<p className="text-base font-semibold  text-white  xs:text-sm">Our globally diversified portfolio designed to make your<br className="xs:hidden"/> money work smarter and harder for you.</p>
</div>
  </div>
  <div className="flex   flex-col gap-5  w-[500px]  h-[550px]  bg-[#769c8b]  rounded-[32px]  items-start p-6  xs:h-auto  xs:w-full">
<img src={'/assets/images/growth.webp'} alt="" className="w-full rounded-[32px] "/>
<div className="flex flex-col gap-3">
<h1 className="font-bold  text-[40px] text-white md:text-2xl">
ESG
</h1>
<p className="text-base font-semibold  text-white xs:text-sm">Our diversified portfolio designed around <br className="xs:hidden"/> environmental, social, and governance considerations.
</p>
</div>
  </div>
</div>
<h1 className="text-xs  font-[800]">
Investing involves risk, including the possible loss of principal. It isn't possible<br/> to invest directly in an index. Past performance does not guarantee future results.
</h1>
    </section>);
}
 
export default PortfolioPath;