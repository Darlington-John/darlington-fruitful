import Head from "next/head";
import Loader from "../../components/loader";
import Save from "../../components/sections/save";

const SaveIndex = () => {
    return (
        <>
         <Head>
            <title>Fruitful  __  Save</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Loader/>
<Save/>
    </>
      );
}
 
export default SaveIndex;