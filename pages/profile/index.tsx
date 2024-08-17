

import Link from "next/link";
import Card from "../../components/cards";
import { getXataClient } from "../../utils/xata";
import { useEffect, useRef, useState } from "react";
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Extract the token from cookies using nookies
  const cookies = nookies.get(context);
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    // Verify the JWT token and extract the email
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded as { email: string };

    // Fetch user data from Xata
    const xata = getXataClient();
    const userData = await xata.db.users.filter({ email }).getFirst();

    if (!userData) {
      return {
        notFound: true,
      };
    }

    // Ensure Date objects are serialized to strings
    return {
      props: {
        userData: {
          ...userData,
          xata: {
            ...userData.xata,
            createdAt: userData.xata?.createdAt ? userData.xata.createdAt.toISOString() : null,
            updatedAt: userData.xata?.updatedAt ? userData.xata.updatedAt.toISOString() : null,
          },
        },
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};

const ProfilePage = ({ userData }) => {
  const [name, setName] = useState(userData.name);
  const [surname, setSurname] = useState(userData.surname);
  const [loaderVisible, setLoaderVisible] = useState(false);


  const router = useRouter(); // useRouter must be called inside the component

  const handleLogout = async () => {
    // Fetch the logout API route to clear the token
    await fetch('/api/logout', {
      method: 'POST',
    });
  
    // Optionally, navigate to the login page after logout
    window.location.href = '/login';
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoaderVisible(true);
    const response = await fetch('/api/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userData.email, name, surname }),
    });

    if (response.ok) {
  
  
      // Reload the page after 5 seconds
      setTimeout(() => {
        window.location.reload(); // Reload the page
      }, 4000);

    } else {
      alert('Failed to update profile');
    }
  };
  const guides =[
    {
        id: 1,
        name: 'Andrea',
        fullname: 'Andrea Easterling',
        img: '/assets/images/Andrea.webp',
        video: '/assets/videos/Andrea.webm',
        mainVideo: '/assets/videos/AndreaMain.webm',
        rotate: '0',
        rotateH: '0',
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
        rotate: '0',
        rotateH: '0',
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
        rotate: '0',
        rotateH: '0',
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
        rotate: '0',
        rotateH: '0',
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
        rotate: '0',
        rotateH: '0',
        role: 'CFP® Professional',
        bio: `
Raquel has 5 years of financial planning experience and a passion for helping people reach their goals in a way that aligns with their values. She previously worked at 2050 Wealth Partners, helping young families and entrepreneurs make progress and build confidence. She's adventurous and loves to travel, cliff dive, and snorkel.`,
firstStyle: '😊 Friendly',
       
secondStyle: '🔍 Detailed',

thirdStyle: '💫 Enlightening',
    }
]
const guideNameToIndex = {
  'Andrew': 1,   // Index for Andrew
  'Andrea': 0,   // Index for Andrea
  'Raquel': 4,   // Index for Raquel
  'Mckenna': 2,  // Index for Mckenna
  'Matt': 3      // Index for Matt
};
const selectedIndex = guideNameToIndex[userData.guide] ?? 0;

const [edit, setEdit] = useState(false);
const [isEditVisible, setIsEditVisible] = useState(false);
const editRef = useRef(null);
const toggleEditPopup = () => {
  if (!edit) {
    setEdit(true);
    setIsEditVisible(true);
  } else {
    setIsEditVisible(false);
    setTimeout(() => setEdit(false), 500);
  }
  
};
const handleClickOutside = (event) => {
  if (editRef.current && !editRef.current.contains(event.target)) {
    setIsEditVisible(false);
    setTimeout(() => setEdit(false), 500);
  }
  
};
useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
  return (
    <div className="h-screen w-full flex items-center justify-center  bg-[#A4D4EA]    relative  xl:bg-gradient-to-l  from-lightOrange to-lightGreen   lg:justify-between lg:px-4  md:bg-gradient-to-b md:from-lightGreen md:to-lightOrange overflow-auto  xs:h-auto"  >
      <Link href='/' className="absolute top-6 left-10 xs:top-4 xs:left-4  z-40">
      <img src="/assets/icons/logoBlack.svg" alt="Second Logo"  className="w-[80px] xs:w-20  "/>
      </Link>
        <div className="bg-white   flex  w-[60%]  h-full  xl:h-auto xl:py-20  rounded-l-[100px] items-center justify-center text-green flex-col gap-3  xl:w-auto  px-20  xl:rounded-2xl lg:px-10 lg:bg-[#ffffff00] lg:flex-row lg:px-0  lg:items-start  lg:w-full  md:flex-col md:items-center xs:py-10">
            <div className=" flex flex-col items-center gap-2">
                <div className="h-32  w-32  bg-green rounded-full   ring-[5px] ring-[#00000040]  flex items-center justify-center">
                    <h1 className="text-lightGreen text-center  text-5xl">
                    {userData.surname[0]}.{userData.name[0]}
                </h1>
                </div>
<div className="flex gap-2 items-center">
                <h1 className="text-3xl font-semibold text-center">
                {userData.surname} {userData.name}
                </h1>
                <img src={'/assets/icons/edit.svg'} alt="" className="w-5 cursor-pointer" onClick={toggleEditPopup}/>
                </div>
                <div className="flex flex-col items-center gap-1">
            <h1 className="text-base font-semibold text-center">{userData.email}</h1>
            <div className="  rounded-2xl px-2 flex gap-2 items-center text-green text-xs py-1 font-semibold leading-none border border-green">
<h1>ID:</h1>
            <h1>{userData.id}</h1>
            </div>
            </div>
            {edit && (
       <div className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8   xs:items-end  xs:px-0 `}>
       <div className={`w-[400px]  rounded-2xl   bg-gradient-to-b  from-lightGreen  to-lightOrange pop  duration-300 ease-in-out xs:w-full   ${isEditVisible ? '' : 'pop-hidden'}`} ref={editRef} >
       <form onSubmit={handleUpdate} className="flex flex-col p-4 gap-3">
        <div className="flex flex-col ">
        <label htmlFor="name" className="text-sm font-semibold">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            className="text-sm font-semibold text-green outline-none px-2 py-3 rounded-md"
          />
          </div>
          <div  className="flex flex-col ">
          <label htmlFor="surname" className="text-sm font-semibold">Surname:</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter new surname"
            className="text-sm font-semibold text-green outline-none px-2 py-3 rounded-md"
          />
          </div>
      <div className="w-full items-center justify-between flex pt-3">
          <button type="submit" className="bg-green  px-4 py-3 rounded-2xl text-lightGreen text-sm font-semibold ease-out duration-300">{loaderVisible ? (<img src={'/assets/images/spinner.gif'} className="w-6" alt=""/>): 'Update'}</button>
          <button type="button" className="  px-4 py-3 rounded-2xl text-green text-sm font-semibold hover:bg-lightGreen ease-out duration-300"  onClick={() => {
  toggleEditPopup();
}}>Cancel</button>
          </div>
        </form>
         </div>
         </div>
            )}
            </div>
            <div className="flex w-full items-center  gap-8    justify-center  py-4 lg:flex-col">
<div className="flex gap-4 items-center   overflow-hidden flex-col">
  <div className="flex items-center justify-between w-full">
<h1 className="text-sm font-semibold">Your guide:</h1>
<h1 className="font-semibold text-base">{userData.guide}</h1>
</div>
<div className="rounded-2xl overflow-hidden bg-lightGreen p-1">
{guides[selectedIndex] && (
  <Card 
    guide 
    name={guides[selectedIndex].name} 
    img={guides[selectedIndex].img} 
    video={guides[selectedIndex].video} 
    rotate={guides[selectedIndex].rotate} 
    rotateH={guides[selectedIndex].rotateH} 
    {...guides[selectedIndex]} 
    key={guides[selectedIndex].id} 
    more="More about" 
    about  
    half  
    hfull 
  />
)}
            </div>
</div>
<div className="flex flex-col gap-6 xs:w-full">
<div className="flex flex-col gap-2 xs:w-full">
  <h1 className="text-sm font-semibold">Your reasons for joining fruitful:</h1>
  <div className="w-full grid grid-cols-2 gap-2 xs:flex  flex-col xs:items-stretch">
  {userData['financial-advice'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3  text-sm font-semibold  xs:w-full">
   Get financial advice
  </div>
  )}
  {userData['future-plan'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Plan for the future
  </div>
  )}
   {userData['goal-progress'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Make progress towards goals
  </div>
  )}
    {userData['money-habits'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Develop better money habits
  </div>
  )}
     {userData['get-organized'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Get organized
  </div>
  )}
      {userData.reason &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
{userData.reason}
  </div>
  )}
  </div>
</div>
<div className="flex flex-col gap-2 xs:w-full">
  <h1 className="text-sm font-semibold">Your major money goals:</h1>
  <div className="w-full grid grid-cols-2 gap-2 xs:flex  flex-col xs:items-stretch">
  {userData['save-more'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
   Save more
  </div>
  )}
  {userData['retire-earlier'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Retire earlier
  </div>
  )}
   {userData['deal-debt'] &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
Deal with debt
  </div>
  )}
    {userData.goal &&(
    <div className="bg-lightGreen text-center  rounded-full  px-3 py-3 text-sm font-semibold ">
{userData.goal}
  </div>
  )}
  </div>
</div>
</div>
</div>
<button className="py-3 px-3 text-base text-green border rounded-2xl self-end  w-[100px]  hover:bg-green hover:text-lightGreen  duration-300 ease rounded-full  xl:hidden md:block md:self-center" onClick={handleLogout} >
Log out
</button>
      </div>
      <div className="bg-white w-[40%] h-full  xl:hidden">
      <img className=" flex h-full w-full object-cover object-top rounded-l-[100px]" alt="" src={'/assets/images/up.webp'}/>
      </div>
      
    </div>
  );
};

export default ProfilePage;
