import Card from "../../cards";

const InvestmentPov = () => {
    const pov =[
        {
            img:'/assets/images/asorbBlue.png',
            header: 'Keep it simple',
            content: 'Asset-based and tiered management fees charged by robo-advisors and legacy firms can be confusing. By not charging those fees, we keep things simple and transparent'
        },
        {
            img:'/assets/images/plantBlue.png',
            header: 'Be goal-oriented',
            content: `Every goal needs its own plan. Tell us what you're saving for, your timeline, your needs, and contributions. We'll create a tailored approach with just the right amount of risk to hit your targets.`
        },
        {
            img:'/assets/images/MeasureBlue.png',
            header: 'Keep it simple',
            content: 'Asset-based and tiered management fees charged by robo-advisors and legacy firms can be confusing. By not charging those fees, we keep things simple and transparent'
        },
        {
            img:'/assets/images/forest.png',
            header: 'Keep it simple',
            content: 'Asset-based and tiered management fees charged by robo-advisors and legacy firms can be confusing. By not charging those fees, we keep things simple and transparent'
        },
        {
            img:'/assets/images/waterMech.png',
            header: 'Keep it simple',
            content: 'Asset-based and tiered management fees charged by robo-advisors and legacy firms can be confusing. By not charging those fees, we keep things simple and transparent'
        },
        {
            img:'/assets/images/love.png',
            header: 'Keep it simple',
            content: 'Asset-based and tiered management fees charged by robo-advisors and legacy firms can be confusing. By not charging those fees, we keep things simple and transparent'
        },
    ]
    return (
          <section className="flex flex-col items-center  px-[66px] py-20  gap-8    2xl:px-4  4xl:px-[200px]">
<div className="flex flex-col gap-0  ">
<h1 className="text-[51px]  font-semibold text-center  md:text-3xl">
    Investment POV
</h1>
<h1 className="text-lg font-semibold  text-center leading-tight  md:text-base  md:font-normal">
Investing can be confusing and over-complicated. Our <br className="md:hidden"/>portfolios are built on clear, effective principles.
</h1>
</div>
<div className="grid grid-cols-2 gap-8  w-full  md:gap-4  xs:grid-cols-1">
    {pov.map((data) =>(
        <Card data={data} {...data}  key={data.header} investment/>
    ))}
</div>
<h1 className="text-xs  font-[800]">
Investing involves risk, including the possible loss of principal. It isn't possible<br/> to invest directly in an index. Past performance does not guarantee future results.
</h1>
    </section>);
}
 
export default InvestmentPov;