// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Store the JWT token
      localStorage.setItem('token', data.token);
      router.push('/');
    } else {
      console.error(data.error);
    }
  };

  return (
    <div className='flex  w-full h-screen items-center  bg-gradient-to-b md:bg-gradient-to-r  from-lightGreen  to-lightOrange pl-4 gap-4  md:flex-col md:p-0 relative'>
      
      <Link href="/">
        <img src={'/assets/icons/logoBlack.svg'} alt="" className="w-[80px] xs:w-20  absolute top-4 left-4"/>
        </Link>
      <div className='w-[40%] h-full  flex  items-center  justify-center   md:w-full md:pt-5 xs:px-4'>
        <div className='flex items-center justify-center flex-col gap-5  bg-white  py-10 px-10 rounded-2xl  w-[500px] lg:py-4 lg:px-4 xs:gap-3  xs:w-full'>
        <div className='flex flex-col gap-0'>
        <h1 className='text-green text-4xl text-center font-semibold lg:text-3xl  xs:text-2xl'>Welcome back</h1>
        <h1 className='text-[#7f8c7e] text-sm text-center font-semibold'>Please enter details to sign in.</h1>
        </div>
        <div className=' w-full'>
    <form onSubmit={handleLogin} className='flex flex-col gap-4 w-full'>
    <div className="flex flex-col  w-full text-green">
        <label htmlFor="email" className="text-sm font-semibold">Email:</label>
        <input
        type="email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
           className="text-sm font-semibold text-green outline-none px-2 py-3 rounded-md rounded-md border border-grey w-full"
      />
          </div>
          <div className="flex flex-col  w-full text-green">
        <label htmlFor="password" className="text-sm font-semibold">Password:</label>
        <input
        placeholder="*****"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
          className="text-sm font-semibold text-green outline-none px-2 py-3 rounded-md rounded-md border border-grey w-full"
      />
          </div>
    
      <button type="submit" className='bg-green rounded-full py-3  w-[80%] text-lightGreen  text-sm  self-center  hover:bg-lightGreen hover:text-green  transition duration-300  ease'>Login</button>
{/* <Link href='/get-started?step=1' className='text-sm text-green'>Don't have an account?  sign up</Link> */}
    </form>
    </div>
    </div>
    </div>
    <div className='w-[60%] h-full overflow-hidden rounded-l-[100px]  md:w-full  md:rounded-t-[50px]  md:rounded-bl-none'>
<img src={'/assets/images/cat.webp'} alt='' className='w-full h-full object-cover'/>
    </div>
    </div>

  );
};

export default Login;
