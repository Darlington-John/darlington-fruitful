import Head from "next/head";
import Loader from "../../components/loader";
import Invest from "../../components/sections/invest.tsx";

const InvestIndex = () => {
    return ( 
        <>
         <Head>
            <title>Fruitful  __  Invest</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Loader/>
<Invest/>
    </>
     );
}
 
export default InvestIndex;