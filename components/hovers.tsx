import { useContext } from "react";
import { FruitfulContext } from "./context";

const Hover = () => {
    const{hoverItems} = useContext(FruitfulContext);
    return ( 
        <>
        {hoverItems.map((item) => (
    <div className="flex  fixed z-[1000] pointer-events-none"
    style={{ top: item.y , left: item.x }}  key={item.id}
    >
<img src={"/assets/icons/bigLeaf.svg"} alt="" className=" spread-up"/>
<img src={"/assets/icons/bigLeaf.svg"} alt="" className=" spread-left"/>
<img src={"/assets/icons/twoLeaf.svg"} alt="" className=" spread-right"/>
    </div>
    ))}
    </>
      );
}
 
export default Hover;