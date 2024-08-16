import Button from "../../buttons";

const Pricing = () => {
    return (<section className="h-screen  flex flex-col gap-4 items-center justify-center sm:h-auto  sm:py-20">
<h1 className="text-[90px]  font-semibold  text-center  leading-[77px]  lg:text-7xl md:px-4  lg:text-5xl    sm:text-4xl ">
Our pricing is simple<br className=""/>
and transparent
</h1>
<h1 className="text-lg   font-semibold  text-center    xs:text-sm  ">
...and less than half² the cost of traditional advisory firms.
</h1>
<Button link="/get-started?step=1" action="Get started" big classic/>
    </section>  );
}
 
export default Pricing;