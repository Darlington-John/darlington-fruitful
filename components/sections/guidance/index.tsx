
import Loader from "../../loader";
import Features from "../landing-page/features";
import Guides from "../landing-page/guides";
import MembersBenefits from "../landing-page/member-benefits";
import Partner from "../landing-page/partner";
import ChooseGuide from "./choose-your-guide";
import GrowWithGuide from "./grow-with-guide";

const Guidance = () => {
    return (  <div className="relative  z-30 bg-white  mb-[70vh]" >
        <GrowWithGuide/>
<Guides/>
<Features/>
       </div>);
}
 
export default Guidance;