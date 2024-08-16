import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { useContext, useRef, useState, useEffect } from "react";
import Guides from "../../components/sections/landing-page/guides";
import Card from "../../components/cards";
import Slider from "../../components/slider";
import { FruitfulContext } from "../../components/context";


const GetStartedIndex = () => {
    const router = useRouter();
    const { step } = router.query;
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [goal, setGoal] = useState('');
    const [guide, setGuide] = useState('');
    const [financialAdvice, setFinancialAdvice] = useState(false);
    const [futurePlan, setFuturePlan] = useState(false);
    const [goalProgress, setGoalProgress] = useState(false);
    const [moneyHabits, setMoneyHabits] = useState(false);
    const [getOrganized, setGetOrganized] = useState(false);
    const [saveMore, setSaveMore] = useState(false);
    const [investSmarter, setInvestSmarter] = useState(false);
    const [dealDebt, setDealDebt] = useState(false);
    const [loading, setIsLoading]= useState(false);
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        router.push('/get-started?step=2');
      };
const handleLoading =()=>{
  setIsLoading(true);
}
      // Handle submission of all data (Step 2)
      const handleStepTwoSubmit = async (e) => {
        e.preventDefault();
        router.push('/get-started?step=3');
      };
      const handleStepThreeSubmit = async (e) => {
        e.preventDefault();
        router.push('/get-started?step=4');
      };

      const handleFinalSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            financialAdvice,
            futurePlan,
            goalProgress,
            moneyHabits,
            getOrganized,
            reason,
            goal,
            saveMore,
            investSmarter,
            dealDebt,
            guide: selectedGuide,
            name,
            surname,
            password
        };

        const response = await fetch('/api/save-user-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.push('/get-started?step=5');
            console.log('User data saved successfully!');
        } else {
            const errorData = await response.json();
            console.error('Error saving user data:', errorData.error);
        }
    };
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };
    
    const stepString = Array.isArray(step) ? step[0] : step || '1';
  
    // Progress bar calculation
    const progressPercentage = parseInt(stepString) * 20;
    const{selectedGuide, setSelectedGuide} = useContext(FruitfulContext);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (step === '5') {
          // Change the element 2 seconds before the redirect
          const changeTimer = setTimeout(() => {
            setMessage('Success...');
          }, 3000); // Change after 3 seconds (5 - 2 = 3 seconds)
    
          // Redirect after 5 seconds
          const redirectTimer = setTimeout(() => {
            router.push('/login'); // Replace with your target page
          }, 5000);
    
          // Clean up timers when the component unmounts or step changes
          return () => {
            clearTimeout(changeTimer);
            clearTimeout(redirectTimer);
          };
        }
      }, [step, router]);
    const guides =[
        {
            id: 1,
            name: 'Andrea',
            fullname: 'Andrea Easterling',
            img: '/assets/images/Andrea.png',
            video: '/assets/videos/Andrea.mp4',
            mainVideo: '/assets/videos/AndreaMain.mp4',
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
            img: '/assets/images/andrew.png',
            
            video: '/assets/videos/andrew.mp4',
            mainVideo: '/assets/videos/AndrewMain.mp4',
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
            img: '/assets/images/mckenna.png',
            video: '/assets/videos/mckenna.mp4',
            mainVideo: '/assets/videos/MckennaMain.mp4',
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
            img: '/assets/images/Matt.png',
            video: '/assets/videos/Matt.mp4',
            mainVideo: '/assets/videos/mattMain.mp4',
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
            img: '/assets/images/Raquel.png',
            video: '/assets/videos/Raquel.mp4',
            mainVideo: '/assets/videos/RaquelMain.mp4',
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
    return ( <div className="w-full ">
    <div className="flex w-full items-center py-6       lg:py-4  sticky top-0   xs:py-3 xs:px-4  gap-10  relative   bg-white   px-10  overflow-hidden">
  
        {step === '2' && <Link href=''>
<img src={'/assets/icons/arr-left.svg'} alt=""  className="w-6   "/>
</Link>}
        {step   &&( <Link href="/">
        <img src={'/assets/icons/logoBlack.svg'} alt="" className="w-[80px] xs:w-20  "/>
        </Link>)}

        <div className="w-screen  h-1 bg-lightGreen absolute bottom-0  -left-0   ">
            <div className="h-full   bg-green ease-out duration-300 " style={{ width: `${progressPercentage}%` }}>

            </div>
        </div>
    </div>
{step ==='1' && (    <section className="flex  p-20  bg-[#FFF6EC]  items-center  gap-20  2xl:p-10  2xl:flex-col  xs:px-4">
<div className="flex-1   p-3  flex flex-col  gap-8 px-10  2xl:self-start 2xl:w-[700px]  md:w-full xs:px-0  xs:gap-3"
>
<h1 className="text-[64px] font-semibold  leading-[70px]  text-center  text-green  md:text-5xl  xs:text-4xl">
Start your financial wellness journey
</h1>
<h1 className="text-lg font-semibold text-center text-green md:text-base  xs:text-sm">
Get going, get growing, get on track in 30 days.
</h1>
<form className="w-full flex flex-col  gap-2 items-center" onSubmit={handleEmailSubmit}>
    <div className="w-full flex gap-2  sm:flex-col">

    
    <input type="email" placeholder="Your email address" className="text-lg font-semibold   rounded-lg  p-2 outline-none  ring-1 ring-inset focus-within:ring-1
            
                  ring-grey  focus-within:ring-green  w-full  md:text-sm py-3"
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                      <input type="text" placeholder="Password" className="text-lg font-semibold   rounded-lg  p-2 outline-none  ring-1 ring-inset focus-within:ring-1
            
            ring-grey  focus-within:ring-green  w-full  md:text-sm"
            value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="w-full flex gap-2 sm:flex-col">

    
<input type="text" placeholder="Name" className="text-lg font-semibold   rounded-lg  p-2 outline-none  ring-1 ring-inset focus-within:ring-1
        
              ring-grey  focus-within:ring-green  w-full  md:text-sm py-3"
              value={name}
                onChange={(e) => setName(e.target.value)}
              />
                  <input type="text" placeholder="Surname" className="text-lg font-semibold   rounded-lg  p-2 outline-none  ring-1 ring-inset focus-within:ring-1
        
        ring-grey  focus-within:ring-green  w-full  md:text-sm"
        value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        </div>
    <button type="submit" className=" py-4 text-center bg-green rounded-2xl text-white   w-[400px] md:py-3  md:w-[200px]  md:text-sm">Let's go</button>
</form>
<Link href='/login' className="text-sm  font-semibold text-[#027a48] text-center">
Already have an account?
</Link>
</div>

<div className="   rounded-2xl  overflow-hidden     relative   h-[530px]  w-[620px]  2xl:w-[700px]  2xl:h-auto  2xl:self-end  md:h-auto md:w-full">
<button onClick={toggleMute} className="p-2 bg-[#f9fafb59]  text-lightOrange  rounded-full  absolute top-4 left-4 h-10 w-10 flex items-center justify-center  z-20 cursor-pointer">
<img src={isMuted? '/assets/icons/mute.svg':  '/assets/icons/muted.svg' } className='w-5' alt=''/>
      </button>
<video className="w-full h-full object-cover relative z-10" src={'/assets/videos/grow-guide.mp4'} muted  autoPlay loop    ref={videoRef}  />
</div>
    </section>)}

    {step === '2' && (
        <section className="flex flex-col  gap-10  items-center justify-center py-10 sm:py-5">
<div className="flex items-center flex-col gap-3">
<h1 className="text-[30px]  font-semibold text-center  sm:text-2xl  sm:leading-none">
Why are you thinking about joining Fruitful?
</h1>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm  text-center sm:text-sm">
Choose as many as you’d like.
</h1>
</div>
<form className="flex flex-col gap-8 items-center  xs:w-full px-4  xs:gap-4" onSubmit={handleStepTwoSubmit}>
<div className="grid  grid-cols-2 gap-4   px-4  xs:flex flex-col  xs:w-full xs:gap-2">
 {/* Button 1 */}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  xs:gap-2 xs:py-2  ${financialAdvice ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  

 onClick={() => setFinancialAdvice(!financialAdvice)}   type="button">
    <img src={financialAdvice ? 'assets/images/clap-white.svg': '/assets/images/clap.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10  "/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm ">
Get financial advice from a pro
</h1>
</button>
{/* Button 2*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${futurePlan ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  type="button"
        onClick={() => setFuturePlan(!futurePlan)}>
    <img src={futurePlan ? 'assets/images/planWhite.svg': '/assets/images/plan.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Plan for the future
</h1>
</button>
{/* Button 3*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${goalProgress ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  
    type="button"
    onClick={() => setGoalProgress(!goalProgress)}>
    <img src={goalProgress ? 'assets/images/progressWhite.svg': '/assets/images/progress.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Make progress toward goals
</h1>
</button>
{/* Button 4*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${moneyHabits ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  
        type="button"    onClick={() => setMoneyHabits(!moneyHabits)}>
    <img src={moneyHabits ? 'assets/images/money-habitsWhite.svg': '/assets/images/money-habits.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Develop better money habits
</h1>
</button>
{/* Button 5*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${getOrganized ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  
        onClick={() => setGetOrganized(!getOrganized)} type="button">
    <img src={getOrganized ? 'assets/images/get-organizedWhite.svg': '/assets/images/get-organized.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Get Organized
</h1>
</button>

    
<input type="text"  className="outline-none text-base w-full border border-grey  hover:shadow-lg  rounded-2xl  flex  gap-3 items-center px-4 py-4 ease-out duration-150 bg-white "  placeholder="Write you own..."
name="reasons"
value={reason}
onChange={(e) => setReason(e.target.value)}
/>
</div>
<button className="bg-[#0f5426]  py-5 px-2 text-center rounded-2xl text-base w-[400px] text-white font-semibold  hover:bg-green  xs:w-full" type="submit">Continue</button>
</form>
        </section>
    )}

{step === '3' && (
        <section className="flex flex-col  gap-10  items-center justify-center py-10">
<div className="flex items-center flex-col gap-3">
<h1 className="text-[30px]  font-semibold text-center">
What are your major money goals?
</h1>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm  text-center">
Choose as many as you’d like.
</h1>
</div>
<form className="flex flex-col gap-8 items-center  xs:w-full px-4  xs:gap-4" onSubmit={handleStepThreeSubmit}>
<div className="grid  grid-cols-2 gap-4   px-4  xs:flex flex-col  xs:w-full xs:gap-2">
 {/* Button 1 */}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${saveMore ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  

 onClick={() => setSaveMore(!saveMore)}   type="button">
    <img src={saveMore ? 'assets/images/clap-white.svg': '/assets/images/clap.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Save more
</h1>
</button>
{/* Button 2*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${investSmarter ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  type="button"
        onClick={() => setInvestSmarter(!investSmarter)}>
    <img src={investSmarter ? 'assets/images/planWhite.svg': '/assets/images/plan.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Invest smarter
</h1>
</button>
{/* Button 3*/}
<button className={` border border-grey  hover:shadow-lg  rounded-2xl sm:flex-col xs:w-full  flex  gap-3 items-center px-4 py-4 ease-out duration-150  xs:gap-2 xs:py-2  ${dealDebt ? 'bg-[#0f5426] text-[#f2fff3]' : 'bg-white'}`}  
    type="button"
    onClick={() => setDealDebt(!dealDebt)}>
    <img src={dealDebt ? 'assets/images/progressWhite.svg': '/assets/images/progress.svg'} alt="" className="w-16 h-16 shrink-0   xs:w-10 xs:h-10"/>
<h1 className="text-base font-semibold  text-base font-semibold xs:text-sm">
Deal with debt
</h1>
</button>
<input type="text"  className="outline-none text-base w-full border border-grey  hover:shadow-lg  rounded-2xl  flex  gap-3 items-center px-4 py-4 ease-out duration-150 bg-white "  placeholder="Write you own..."
name="reasons"
value={goal}
onChange={(e) => setGoal(e.target.value)}
/>
</div>
<button className="bg-[#0f5426]  py-5 px-2 text-center rounded-2xl text-base w-[400px] text-white font-semibold  hover:bg-green  xs:w-full" type="submit">Continue</button>
</form>
        </section>
    )}
    {step ==='4' && (
          <section className="flex flex-col   text-center gap-16 py-16  items-center  sm:items-stretch  sm:gap-6 ">
         
         <div className="flex flex-col gap-3 w-[700px]  lg:w-full px-4">
<h1 className="text-[52px]  font-semibold  leading-[56px] lg:text-[32px] lg:leading-none xs:text-xl  xs:leading-none">
Choose Your Guide
</h1>
<h1 className="text-lg  font-semibold leading-[24px] xs:text-sm  xs:leading-none  xs:font-normal">
Talk to someone who understands you and your money. <br className='2xs:hidden'/>Make progress and feel empowered. 
</h1>

        </div>
          <div className="flex flex-wrap items-center justify-center  dxs:flex-nowrap  dxs:overflow-x-scroll   dxs:w-screen dxs:items-start  dxs:justify-start  dxs:py-4  flow sm:hidden  ">

              {guides.map((data, index)=> (
   <Card guide name={data.name} img={data.img} video={data.video} rotate={data.rotate} rotateH={data.rotateH} {...data} key={index} more="More about" about  half  hfull choosen/>
              ))}
             
          </div>
          
  <Slider guides={guides} about  hfull/>
  <form onSubmit={handleFinalSubmit}>
    
    <button className={`text-base  bg-green py-4  w-[300px] text-white rounded-2xl  ${selectedGuide? 'opacity-1 cursor-pointer': 'opacity-[0.4] cursor-not-allowed'}`} type={selectedGuide?"submit" :'button'} onClick={selectedGuide? handleLoading: null}>
    {loading ? (<img src={'/assets/images/spinner.gif'}alt="" className="w-8 mx-auto"/>): 'Continue'}
    </button>
  </form>
      </section> 
    )}
    {step ==='5' && (
        <div className="h-screen w-full bg-lightOrange flex items-center justify-center flex-col">
<img src={'/assets/images/spinner.gif'} className="w-40 xs:w-20" alt=""/>
<h1 className="text-4xl font-semibold text-[#0a8855]  text-center xs:text-2xl">{message || 'Setting up your account...'}</h1>
        </div>
    )} 
 </div> );
}


export default GetStartedIndex;

