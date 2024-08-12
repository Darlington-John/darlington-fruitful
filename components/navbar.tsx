import { useContext, useEffect, useRef, useState } from "react";
import { FruitfulContext } from "./context";
import Link from "next/link";
import Button from "./buttons";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScrollBeyond = () => {
      const scrollTop = window.scrollY;  // Get the vertical scroll position
      const scrollThreshold = 500;  // Set the height at which the logo should change
  
      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScrollBeyond);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScrollBeyond);
      };
    }, []);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  
    const elementStyle = {
      transition: 'all 0.5s',
      opacity: isVisible ? 1 : 0,
      transform:  isVisible ? 'translateY(0)' : 'translateY(-50px)'
    };
       const BarsIcon = '/assets/icons/Bars.svg'
       const XmarkIcon = '/assets/icons/Xmark.svg'

    const [icon, setIcon] = useState(BarsIcon);
    const linkname = usePathname();
    useEffect(() => {
      const overlayElement = document.getElementById('myOverlay');
  overlayElement.style.height = '0%';
  setIsOverlayOpen(false);
  setIcon(BarsIcon);
    }, [linkname]);
  // Get the current path

    const handleToggleOverlay = () => {
      toggleOverlay();
      setIsOverlayOpen(!isOverlayOpen);
      setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
    };
    const{isOverlayOpen, setIsOverlayOpen} = useContext(FruitfulContext);
    const router = useRouter();
    const { pathname } = router;
    return (  <nav className="flex items-center justify-between  fixed top-8 left-0 z-[50] w-full px-[66px]   py-2  lg:px-5 md:top-4  xs:top-0 " >

<Link href="/"  style={elementStyle}>
{(pathname === '/guidance' || pathname === '/save' || pathname === '/invest' || pathname==='/pricing')  ? (<img src={'/assets/icons/logoBlack.svg'} alt="" className="w-[110px] xs:w-20  "/>): (isScrolled ? (
          <img src="/assets/icons/logoBlack.svg" alt="Second Logo"  className="w-[110px] xs:w-20  "/>
        ) : (
          <img src={ isOverlayOpen ?'/assets/icons/logoWhite.svg': '/assets/icons/logo.svg'} alt="" className={`w-[110px] xs:w-20   `}/>
        ))}


    </Link>
    <div className="md:hidden">
    <MembersBenefits  style={elementStyle} />
    </div>
<div className="flex gap-4  items-center">
    <div style={elementStyle} className="md:hidden">
<Button link="/login" login action="Login" />
</div>
<div className={`ease-out duration-300 ${isOverlayOpen? 'opacity-0':''}`}>
<Button link="/get-started" classic  action="Get started"/>
</div>
<button className="  h-10 w-10  bg-[#9a9a9a66]  rounded-full  md:flex items-center justify-center hidden xs:h-8 xs:w-8 backdrop-blur-lg" onClick={handleToggleOverlay}>
<img src={icon} alt="" className="w-4 xs:w-[12px]" />
</button>
</div>
    </nav>);
}

 export const MembersBenefits  = (props: any) => {
    const{isBenefit, setIsBenefit, isVisible, setIsVisible,  benefitRef, toggleBenefitPopup, handleClickOutside} = useContext(FruitfulContext);
    const benefits =[
         {
        id:1,
        link: '/guidance',
        feature:'Guidance',
        content: 'Expert 1:1 advice and support'
    },
    {
        id:2,
        link: '/save',
        feature:'Save',
        content: 'Earn 5.00% APY  on your savings'
    },
    {
        id:3,
        link: '/invest',
        feature:'Invest',
        content: 'Smarter investing set up for you'
    },
]
    return ( <div className="   z-40   flex flex-col gap-2 items-center " style={props.style}>
        <div className="font-medium text-white gap-6 py-4  px-8   backdrop-blur-lg bg-[#9a9a9a66] flex items-center justify-between rounded-xl  relative z-40 ">
<div className="flex gap-2 items-center  cursor-pointer" onClick={toggleBenefitPopup}>
<h1>
    Member Benefits
</h1>
<img src={'/assets/icons/down.svg'} alt="" className={`w-3 spin  ${isVisible ? '' : 'spin-hidden'}`}/>
</div>
<Link href="pricing">
<h1>Pricing</h1>
</Link>
</div>

{isBenefit && (
    <div className={`rounded-xl py-2  px-2   backdrop-blur-lg bg-[#9a9a9a66] absolute  popup z-30 flex   ${isVisible ? '' : 'popup-hidden'}`} ref={benefitRef}>
        {benefits.map((benefit, index)=> (
            <Link href={benefit.link} className="flex  items-center  justify-center " key={index}>
    <div className="flex flex-col gap-1  px-4 py-3  text-white w-[190px] hover:bg-[#00000014] rounded-lg leading-none  ease-out duration-300">
<h1 className="text-base">
{benefit.feature}
</h1>
<p className="leading-4  text-sm">
{benefit.content}
</p>
</div>
</Link>
        ))}

</div>
)}

    </div> );
 }
 const toggleOverlay = () => {
  const overlayElement = document.getElementById('myOverlay');


  if (overlayElement.style.height === '100%') {
    overlayElement.style.height = '0%';

  } else {
    overlayElement.style.height = '100%';
  }
    

  // Use useEffect to watch for changes in the pathname

};


export default Navbar;