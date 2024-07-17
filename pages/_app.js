
import { FruitfulProvider } from '../components/context';
import Layout from '../components/layout';
import '../styles/global.css';
import localFont from 'next/font/local'
const myFont = localFont({ src: [
  {
  path: './../public/assets/fonts/neue-book.otf',
      weight: '400',
},
{
  path: './../public/assets/fonts/neue-mid.otf',
      weight: '600',
},
] })
export default function App({ Component, pageProps }) {
    return (
      <FruitfulProvider>
    <main className={myFont.className}>
<Layout>
      {/* <FruitfulProvider> */}
    <Component {...pageProps} />
    </Layout>
    {/* </FruitfulProvider> */}
    </main>
    </FruitfulProvider>
    );
  }