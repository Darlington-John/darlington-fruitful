
import Link from 'next/link';
import Accordion from './accordion';

const Overlay = () => {
  return (
    <div className=" hidden h-[0px] w-full fixed z-40 top-0 right-0 bg-white    md:flex      flex-col gap-16 justify-end  fade ease-out duration-[0.5s]   " id="myOverlay">
      <div className='h-full overflow-scroll  flex     px-4 flex-col gap-16   px-4 pt-40 xs:gap-6'>
      <div className={`flex gap-2 flex-col  `}>

 <Accordion/>
 <Link href="/pricing" className="border-1  border-b-[#00000066] overflow-hidden text-[28px] border-b  w-full flex  flex-col" >
 <p className=' text-[28px] font-semibold xs:text-base'>Pricing</p>
 </Link>
 </div>
 <div className={`flex flex-col gap-4 fade  `}>
  <Link href='/login' className='w-full'>

<button className='rounded-[20px] bg-black text-white text-[22px] font-semibold py-4 text-center xs:text-base xs:py-2 w-full'>
Login
</button>
</Link>
<Link href="/get-started?step=1"  className='w-full'>
<button className='rounded-[20px]   text-black border border-black  text-[22px] font-semibold py-4 text-center  xs:text-base xs:py-2  w-full'>
Sign up
</button>
</Link>
 </div>

 </div>
    </div>
  );
};

export default Overlay;
