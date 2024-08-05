import Slider from "../../slider";
import Access from "./access";
import Faqs from "./faqs";
import Features from "./features";
import Guides from "./guides";
import Home from "./hero";
import MayaSpeech from "./maya";
import MembersBenefits from "./member-benefits";
import Members from "./members";
import Membership from "./membership";
import OurGoals from "./our-goals";
import Partner from "./partner";
import WorkWith from "./work-with";

const LandingPage = () => {
    return ( 
<div className="relative  z-30 bg-white  mb-[70vh]">
        <Home/>
        <WorkWith/>
        <Partner/>
       <Guides/>
       <MembersBenefits/>
       <Features/>
   <MayaSpeech/>
   <Members/>
   <Membership/>
   <Access/>
   <OurGoals/>
   <Faqs/>
       </div>
     );
}
 
export default LandingPage;