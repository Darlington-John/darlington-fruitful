import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "./cards";


 

const Slider = (props:any) => {

    const guides = props.guides || [];
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 2,
    // mode: "free-snap",
    slides: {
        perView: 2.1,
        spacing: 10,
        origin: 'center'
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
  })
  
  const [currentSlide, setCurrentSlide] = useState(2)
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
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="sm:flex flex-col gap-3   hidden">
                {/* {guides.map((data, index)=> (
 <Card guide name={data.name} img={data.img} video={data.video} rotate={data.rotate} rotateH={data.rotateH} {...data} key={index} more="More about" about  half  hfull/>
            ))} */}
                <div className="flex gap-3 items-center justify-center ">
          {
          guides.map((data,index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index)
                }}
                className={"bg-lightOrange    overflow-hidden rounded-full  h-10 w-10" + (currentSlide === index ? " border-2 border-green" : "")}
              >
              <img src={data.img} alt="" className="h-full w-full object-cover " />
              </button>
            )
          })}
        </div>
      
      <div ref={sliderRef} className="keen-slider">
        {guides.map((data,index)=>(
                <Card sliderGuide  data={data} {...data} key={index}   slideIndex={index} slide={currentSlide} about={props.about} half  hfull={props.hfull} full={props.full} close={props.close}/>
        ))}
      </div>

     
  
    </div>
  )
}
export default Slider;