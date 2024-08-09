import { useInView } from "framer-motion";
import EarnMore from "./earn-more";
import EarnSavings from "./earn-savings";
import { CSSProperties, useRef } from "react";
import SavingsSecure from "./savings-secure";
import StartSavingSmarter from "./start-saving-smarter";
import SingleViewSection from "./view";
import MishaSpeech from "./misha-speech";
import MishaVid from "./misha-vid";
import Faqs from "../landing-page/faqs";

const Save = () => {

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
        glow.backgroundColor = "#F9E1D3";
      } else if (isInView2) {
        glow.backgroundColor = "#D3F9E1";
      } else if (isInView3) {
        glow.backgroundColor = "#E1D3F9";
      }
    return (  
        <div className="relative  z-30 bg-white  mb-[70vh] "   style={{...glow}}>
<EarnSavings/>
<EarnMore glowRef1={glowRef1}  glow={glow} />
<SavingsSecure  glowRef2={glowRef2}  glow={glow}/>
<StartSavingSmarter glowRef3={glowRef3}  glow={glow}/>
<MishaSpeech/>
<MishaVid/>
<Faqs/>
       </div>
    );
}
 
export default Save;