
import { useInView } from "framer-motion";
import IvestWithoutStress from "./invest-without";
import InvestmentPov from "./investment-pov";
import ManagementFees from "./management-fees";
import PortfolioPath from "./portfolio-path";
import SmarterInvesting from "./smarter-investing";
import Tailored from "./tailored-to-you";
import { CSSProperties, useRef } from "react";
import StephSpeech from "./steph-speech";
import StephVid from "./steph-vid";
import Faqs from "../landing-page/faqs";

const Invest = () => {
    const glowRef1 = useRef<HTMLDivElement>(null);
    const glowRef2 = useRef<HTMLDivElement>(null);
    const glowRef3 = useRef<HTMLDivElement>(null);
  
    const isInView1 = useInView(glowRef1, { once: false });
    const isInView2 = useInView(glowRef2, { once: false });
    const isInView3 = useInView(glowRef3, { once: false });
  
    let glow: CSSProperties = {
      backgroundColor: "white",
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
    };
    if (isInView1) {
        glow.backgroundColor = "#f2f7ee";
      } else if (isInView2) {
        glow.backgroundColor = "#eff7ff";
      } 
    return (  <div className="relative  z-30 bg-white  mb-[70vh] " style={{...glow}}>
<SmarterInvesting/>
<ManagementFees  glowRef1={glowRef1}  glow={glow}/>
<InvestmentPov/>
<PortfolioPath/>
<Tailored/>
<IvestWithoutStress glowRef2={glowRef2}  glow={glow}/>
<StephSpeech/>
<StephVid/>
<Faqs/>
    </div>);
}
 
export default Invest;