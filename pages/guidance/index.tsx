import Head from "next/head";

import Guidance from "../../components/sections/guidance";
import Loader from "../../components/loader";
const GuidanceIndex = () => {
    return ( <>
         <Head>
            <title>Fruitful  __ Guidance</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Loader/>
<Guidance/>
    </>
);
}
 
export default GuidanceIndex;