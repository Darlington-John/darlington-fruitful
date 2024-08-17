import { useState } from "react";
import Button from "../../buttons";
import Slider from "../../slider";
import Guides from "../landing-page/guides";
import { useKeenSlider } from "keen-slider/react";
import Card from "../../cards";

const ChooseGuide = () => {
    const guides =[
        {
            id: 1,
            name: 'Andrea',
            fullname: 'Andrea Easterling',
            img: '/assets/images/Andrea.webp',
            video: '/assets/videos/Andrea.webm',
            mainVideo: '/assets/videos/AndreaMain.webm',
            rotate: '-3',
            rotateH: '5',
            role: 'CFP® Professional',
            bio: `Andrea has 8 years of financial planning and advising experience. She thrives on inspiring people to confidently take control of their finances with tailored advice and easy-to-apply education. She previously worked at the fintech company Pattern and, before that, Mercer Advisors. Outside of work, Andrea orchestrates the offense as point guard of her local women's basketball team.`,
            firstStyle: '⚡ Empowering',
           
            secondStyle: '💡 Insightful',

            thirdStyle: ' 🧮 Analytical',
         
        },
        {
            id: 2,
            name: 'Andrew',
            fullname: 'Andrew Rotz',
            img: '/assets/images/andrew.webp',
            
            video: '/assets/videos/andrew.webm',
            mainVideo: '/assets/videos/AndrewMain.webm',
            rotate: '3',
            rotateH: '-4',
            role: 'CFP® Professional',
            bio: `
Andrew has worked in financial services since 2012. He loves seeing the relief that comes when he helps his Members alleviate a major stressor in their financial lives. He's worked at Fidelity Investments, built a bespoke financial wellness program at NC State University, and his own firm while also serving in the US Navy. He loves exploring the Star Wars world with his two boys, traveling around the real world, and history!`,
firstStyle: '💬 Conversational',
           
secondStyle: '🙌 Dedicated',

thirdStyle: ' 🧠 Open-minded',
        },

        {
            id: 3,
            name: 'Mckenna',
            fullname: 'Mckenna Wieser',
            img: '/assets/images/mckenna.webp',
            video: '/assets/videos/mckenna.webm',
            mainVideo: '/assets/videos/MckennaMain.webm',
            rotate: '-3',
            rotateH: '5',
            role: 'CFP® Professional',
            bio: `
Mckenna has 7 years of financial planning and advising experience. She’s passionate about taking big, complicated life decisions and making them approachable, digestible, and exciting. She’s previously worked at Charles Schwab, helping families in all stages of life meet and exceed their goals with confidence. She loves to travel, go see live music, read, and hang with her dogs Bowser and El.`,
firstStyle: ' Committed',
           
secondStyle: '👁️‍🗨️ Perceptive',

thirdStyle: ' ✅ Thorough',
        },
        
        {
            id: 4,
            name: 'Matt',
            fullname: 'Matt Becker',
            img: '/assets/images/Matt.webp',
            video: '/assets/videos/Matt.webm',
            mainVideo: '/assets/videos/mattMain.webm',
            rotate: '3',
            rotateH: '-5',
            role: 'CFP® Professional',
            bio: `
Matt has 10 years of financial planning experience and another 6 years working in early-stage technology. He's passionate about getting to know his members, what they value, and what they truly want out of life so money can empower them to be the fullest versions of themselves. Matt previously ran his own practice working mostly with young families. His favorite thing in the world is coaching his boys' soccer teams.`,
firstStyle: '❤️ Empathetic',
           
secondStyle: '🤝 Collaborative',

thirdStyle: ' 📚 Resourceful',
        },
        {
            id: 5,
            name: 'Raquel',
            fullname: 'Raquel Tennant',
            img: '/assets/images/Raquel.webp',
            video: '/assets/videos/Raquel.webm',
            mainVideo: '/assets/videos/RaquelMain.webm',
            rotate: '3',
            rotateH: '5',
            role: 'CFP® Professional',
            bio: `
Raquel has 5 years of financial planning experience and a passion for helping people reach their goals in a way that aligns with their values. She previously worked at 2050 Wealth Partners, helping young families and entrepreneurs make progress and build confidence. She's adventurous and loves to travel, cliff dive, and snorkel.`,
firstStyle: '😊 Friendly',
           
secondStyle: '🔍 Detailed',

thirdStyle: '💫 Enlightening',
        }
    ]
    
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
     
    return (<section className="flex  items-start  gap-8 pl-[66px]">
<div className="flex flex-col  items-start gap-16">
<div className="flex flex-col leading-none gap-1">
<h1 className="text-[51px] font-semibold text-black">
Choose your Guide.
</h1>
<h1 className="text-[51px] font-semibold text-grey">
Chart your journey.
</h1>
<h1 className="text-[51px] font-semibold text-grey">
Change your life.
</h1>
</div>
<Button action="Choose your guide" classic   link="/guidance" big/>

</div>
<div className="sm:flex flex-col gap-3   ">
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
                <Card sliderGuide  data={data} {...data} key={index}   slideIndex={index} slide={currentSlide} 
                about
                 half  hfull 
                //  full={props.full} 
                //  close={props.close}
                 />
        ))}
      </div>

  
    </div>
    </section>  );
}
 
export default ChooseGuide;