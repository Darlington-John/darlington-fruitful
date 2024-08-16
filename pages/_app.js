
import { FruitfulProvider } from '../components/context';
import Layout from '../components/layout';
import '../styles/global.css';
import localFont from 'next/font/local'
import { createContext, useContext } from 'react';
const myFont = localFont({ src: [
  {
  path: './../public/assets/fonts/neue-book.otf',
      weight: '400',
},
{
  path: './../public/assets/fonts/neue-mid.otf',
      weight: '600',
},
{
  path: './../public/assets/fonts/neue-bold.otf',
      weight: '700',
},
{ path: './../public/assets/fonts/mono.ttf', weight: '800' }
],

})
export const UserContext = createContext(null);
export default function App({ Component, pageProps }) {
// Get userData from the page's props
const { userData } = pageProps;
    return (
      <FruitfulProvider>
        <UserContext.Provider value={userData}>

    <main className={`${myFont.className}`}>
<Layout>
    <Component {...pageProps}   />
    </Layout>

    </main>
    </UserContext.Provider>
    </FruitfulProvider>
    );
  }