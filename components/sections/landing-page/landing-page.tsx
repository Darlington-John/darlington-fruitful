import Features from "./features";
import Guides from "./guides";
import Home from "./hero";
import MembersBenefits from "./member-benefits";
import Partner from "./partner";
import WorkWith from "./work-with";

const LandingPage = () => {
    return ( 
<>
        <Home/>
        <WorkWith/>
        <Partner/>
       <Guides/>
       <MembersBenefits/>
       <Features/>
       </>
     );
}
 
export default LandingPage;