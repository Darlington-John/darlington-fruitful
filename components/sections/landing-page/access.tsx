
const Access = () => {
    const information = [
        {
            id:1,
            info: 'Expert advice and support from your dedicated Guide, a CFP® Professional'
        },
        {
            id:2,
            info: '5.00% APY High Yield Savings Account, more than 10x the national average*'
        },
        {
            id:3,
            info: '1-to-1 video sessions focused on hitting your goals with progress check-ins, quick syncs and anytime messaging'
        },
        {
            id:4,
            info: 'Tailored investment portfolios with expert support at every step and no management fees'
        },
    ]
    return ( <section className="flex flex col items-center justify-center  py-10 px-4">
<div className="flex flex-col items-center justify-center gap-6">
<h1 className="text-[21px]  font-semibold  text-center">
All plans provide access to
</h1>
<div className="grid grid-cols-2 gap-x-16 gap-y-8 md:grid-cols-1  2xs:gap-4">
    {information.map((data, index)=> (
    <div className="flex gap-4 items-start text-center w-[330px]  2xs:w-full xs:gap-2" key={index}>
    <img src={'/assets/icons/mark.svg'} alt="" className="w-5 xs:w-4"/>
    <h1 className="text-base  font-semibold text-start leading-[20px] 2xs:text-sm">
 {data.info}
    </h1>
        </div>
    ) )}

</div>
</div>
<div>

</div>
    </section> );
}
 
export default Access;