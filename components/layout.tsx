
import 'tailwindcss/tailwind.css'
import Navbar from './navbar';
import LinkHoverListener from './hoverListener';
import Hover from './hovers';
import Overlay from './overlay';
import { useRef } from 'react';
import Footer, { PostFooter } from './footer';
import Loader from './loader';
import { useRouter } from 'next/router';
import AuthNavbar from './auth-navbar';

export default function Layout({ children }) {
    const router = useRouter();
    const { pathname } = router;

    return (<div className=' relative'>
        {pathname !== '/get-started' && (<>
            <Navbar/>
        <Overlay/>
        <LinkHoverListener/>
        <Hover/>
        </>)}
        {pathname === '/get-started' && (<AuthNavbar/>)}
        {children}
        {pathname !== '/get-started' && (<>
            <Footer/>
            <PostFooter/>
        </>)}

        </div>);
  }