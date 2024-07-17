import { useState, useEffect, useRef } from 'react';

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

  const [about, setAbout] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);
  const toggleAboutPopup = () => {
    if (!about) {
      setAbout(true);
      setIsAboutVisible(true);
    } else {
      setIsAboutVisible(false);
      setTimeout(() => setAbout(false), 500);
    }
    
  };
  const handleClickOutside = (event) => {
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setIsAboutVisible(false);
      setTimeout(() => setAbout(false), 500);
    }
    
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      {props.guide && (
        <div
          className={`bg-lightOrange rounded-xl h-[300px] w-[230px] overflow-hidden hover:scale-[1.15] ease-out duration-300 guide drop-shadow-2xl relative hover:z-30 cursor-pointer`}
          style={{
            transform: `rotate(${props.rotate}deg)`,
            transition: 'transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1)',
          }}
        onMouseMove={(e) => handleMouseMove(e, `More about ${props.name}`)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotateH}deg) scale(1.15)`;
          }}
          onMouseLeave={(e) => {
            handleMouseLeave();
            (e.currentTarget as HTMLDivElement).style.transform = `rotate(${props.rotate}deg)`;
          }}
          onClick={toggleAboutPopup}
        >
          <img src={props.img} alt="" className="h-full w-full object-cover object-center" />
          <video muted autoPlay loop src={props.video} className="w-full h-full object-cover" />

        </div>

      )}
            {about && (
  <div className={`fixed bottom-[0px]  h-full w-full  z-30 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8`}>
    <div className={`w-[900px]  rounded-[20px] pop  duration-300 ease-in-out bg-white flex flex-col   overflow-hidden ${isAboutVisible ? '' : 'pop-hidden'}`} ref={aboutRef} >
<div className='flex   gap-3  w-full'>
<video className='w-1/2  object-cover' src={props.video} muted autoPlay  loop></video>
<div className='w-1/2  flex  gap-3 bg-white flex-col p-4'>
<button className='flex items-center justify-center  rounded-full h-10 w-10  bg-[#f9fafb]  relative   self-end'  onClick={toggleAboutPopup}>
<img src={`/assets/icons/caret-down-black.svg`} alt="" className=''/>
</button>
<div className='flex items-start leading-none flex-col'>
<h1 className='text-[40px] font-semibold text-start'>
{props.fullname}
</h1>
<h1 className='text-sm  text-darkGrey  font-medium text-start'>
{props.role}
</h1>
</div>
<div>
  <h1 className='text-base text-darkGrey  font-medium text-start' >
{props.bio}
  </h1>
</div>
</div>
</div>
    </div>
  </div>
)}
      {isVisible && (
        <div
          className="fixed ease-out duration-300 bg-white p-2 pointer-events-none rounded-full z-50 md:p-2 xs:p-1 xs:hidden text-sm"
          style={{ left: `${position.x + 10}px`, top: `${position.y - 15}px` }}
        >
          <h3 className="font-semibold md:text-sm xs:text-[10px] xs:font-normal">{headerContent}</h3>
        </div>
      )}

    </>
  );
};

export default Card;
