import Access from "../landing-page/access";
import Faqs from "../landing-page/faqs";
import Membership from "../landing-page/membership";
import OurGoals from "../landing-page/our-goals";
import Pricing from "./pricing";

const Price = () => {
    return (<div className="relative  z-30 bg-white  mb-[70vh] ">
        <Pricing/>
        <Membership/>
        <Access/>
        <OurGoals/>
        <Faqs/>
    </div>  );
}
 
export default Price;