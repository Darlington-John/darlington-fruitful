import Button from "../../buttons";
import Card from "../../cards";

import { useState, useEffect } from 'react';
import Slider from "../../slider";

const Guides = () => {


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
    return (
        <section className="flex flex-col   text-center gap-16 py-16  items-center  sm:items-stretch  sm:gap-6   4xl:py-32">
        <div className="flex flex-col gap-3 w-[700px]  lg:w-full px-4">
<h1 className="text-[52px]  font-semibold  leading-[56px] lg:text-[32px] lg:leading-none xs:text-xl  xs:leading-none">
A partner and a platform that
<br className='hidden lg:block 2xs:hidden'/>
make money simple.
</h1>
<h1 className="text-lg  font-semibold leading-[24px] xs:text-sm  xs:leading-none  xs:font-normal">
Take control of your finances with expert human help<br className='2xs:hidden'/> and a single intuitive place to track it all.
</h1>
<div className="flex items-center gap-3 justify-center">

<Button link="/guidance" classic  action="Who are Guides" />
</div>
        </div>
        <div className="flex flex-wrap items-center justify-center  dxs:flex-nowrap  dxs:overflow-x-scroll   dxs:w-screen dxs:items-start  dxs:justify-start  dxs:py-4  flow sm:hidden  ">
            {guides.map((data, index)=> (
 <Card guide name={data.name} img={data.img} video={data.video} rotate={data.rotate} rotateH={data.rotateH} {...data} key={index} more="More about" about  half  hfull/>
            ))}
           
        </div>
<Slider guides={guides} about  hfull/>
    </section> 
      );
}

export default Guides;