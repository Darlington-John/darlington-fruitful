
import 'tailwindcss/tailwind.css'
import Navbar from './navbar';
import LinkHoverListener from './hoverListener';
import Hover from './hovers';
import Overlay from './overlay';
import { useRef } from 'react';
import Footer, { PostFooter } from './footer';
import Loader from './loader';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    const { pathname } = router;

    return (<div className=' relative'>
        {!(pathname.startsWith('/get-started') || pathname.startsWith('/profile') || pathname.startsWith('/login')) && (<>
            <Navbar/>
        <Overlay/>
        <LinkHoverListener/>
        <Hover/>
        </>)}
       
        {children}
        {!(pathname.startsWith('/get-started') || pathname.startsWith('/profile') || pathname.startsWith('/login'))  && (<>
            <Footer/>
            <PostFooter/>
        </>)}

        </div>);
  }