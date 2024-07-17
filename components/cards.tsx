
import { useState, useEffect } from 'react';

const Card = (props: any) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [headerContent, setHeaderContent] = useState('');
  
    const handleMouseMove = (e, content) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHeaderContent(content);
      setIsVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const rotateClass = `-rotate-[${props.rotate}deg]`;
    const rotateHoverClass = `hover:rotate-[${props.rotateH}deg]`;
    return ( 
        <>
        {props.guide && (
            <div className={`bg-lightOrange rounded-xl  h-[300px]  w-[230px]  overflow-hidden hover:scale-[1.15]  ease-out duration-300  guide     drop-shadow-2xl  -rotate-[${props.rotate}deg]  relative  hover:z-30  cursor-pointer`}  style={{
              transform: `rotate(${props.rotate}deg)`,
              transition: 'transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1)',
            }}
            onMouseMove={(e) => handleMouseMove(e, props.name)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotateH}deg) scale(1.15)`;
            }}
            onMouseLeave={(e) => {
              handleMouseLeave(e);
              (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotate}deg)`;
            }}>
<img src={props.img} alt="" className="h-full w-full object-cover object-center "/>
<video muted autoPlay loop  src={props.video} className="w-full h-full object-cover  " />

            </div>
        )}
        {isVisible && (
        <div
          className=" fixed  ease-out  duration-300 bg-white p-2  pointer-events-none rounded-full z-50 md:p-2  xs:p-1 xs:hidden  text-sm"
          style={{ left: `${position.x + 10}px`, top: `${position.y + -15}px` }}
        >
          <h3 className='font-semibold md:text-sm  xs:text-[10px]  xs:font-normal'>{headerContent}</h3>
        </div>
      )}
        </>
     );
}
 
export default Card;