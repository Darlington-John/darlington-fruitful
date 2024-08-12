import Link from "next/link";
import { useRef, useState } from "react";

const EmailSubmission = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log('Email saved successfully!');
      } else {
        // Handle error
        console.error('Error saving email');
      }
    };
    
    return ( <section className="flex  p-20  bg-[#FFF6EC]  items-center  gap-20  2xl:p-10  2xl:flex-col  xs:px-4">
<div className="flex-1   p-3  flex flex-col  gap-8 px-10  2xl:self-start 2xl:w-[700px]  md:w-full xs:px-0  xs:gap-3"
>
<h1 className="text-[64px] font-semibold  leading-[70px]  text-center  text-green  md:text-5xl  xs:text-4xl">
Start your financial wellness journey
</h1>
<h1 className="text-lg font-semibold text-center text-green md:text-base  xs:text-sm">
Get going, get growing, get on track in 30 days.
</h1>
<form className="w-full flex gap-2" onSubmit={handleSubmit}>
    <input type="email" placeholder="Your email address" className="text-lg font-semibold   rounded-lg  p-2 outline-none  ring-1 ring-inset focus-within:ring-1
            
                  ring-grey  focus-within:ring-orange  w-full  md:text-sm"
                  id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
                  />
    <button type="submit" className=" py-4 text-center bg-green rounded-2xl text-white   w-[400px] md:py-3  md:w-[200px]  md:text-sm">Let's go</button>
</form>
<Link href='/login' className="text-sm  font-semibold text-[#027a48] text-center">
Already have an account?
</Link>
</div>

<div className="   rounded-2xl  overflow-hidden     relative   h-[530px]  w-[620px]  2xl:w-[700px]  2xl:h-auto  2xl:self-end  md:h-auto md:w-full">
<button onClick={toggleMute} className="p-2 bg-[#f9fafb59]  text-lightOrange  rounded-full  absolute top-4 left-4 h-10 w-10 flex items-center justify-center  z-20 cursor-pointer">
<img src={isMuted? '/assets/icons/mute.svg':  '/assets/icons/muted.svg' } className='w-5'/>
      </button>
<video className="w-full h-full object-cover relative z-10" src={'/assets/videos/grow-guide.mp4'} muted  autoPlay loop    ref={videoRef}  />
</div>
    </section> );
}
 
export default EmailSubmission;