
import 'tailwindcss/tailwind.css'
import Navbar from './navbar';
import LinkHoverListener from './hoverListener';
import Hover from './hovers';
import Overlay from './overlay';
import { useRef } from 'react';
import Footer, { PostFooter } from './footer';
import Loader from './loader';

export default function Layout({ children }) {


    return (<div className=' relative'>
        <Navbar/>
        <Overlay/>
        <LinkHoverListener/>
        <Hover/>
        {children}
        <Footer/>
        <PostFooter/>
        </div>);
  }