
import 'tailwindcss/tailwind.css'
import Navbar from './navbar';
import LinkHoverListener from './hoverListener';
import Hover from './hovers';
import Overlay from './overlay';
import { useRef } from 'react';

export default function Layout({ children }) {


    return (<div  className='overflow-hidden'>
        <Navbar/>
        <Overlay/>
        <LinkHoverListener/>
        <Hover/>
        {children}
        </div>);
  }