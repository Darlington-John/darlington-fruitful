import { motion } from "framer-motion";

const Loader = () => {
    return (  <motion.div className="absolute h-full  w-full   bg-lightGreen   rounded-b-[1000px] bottom-0  z-[1000]"       initial={{ y: '0%' }}
        animate={{ y: '-100%',  }}
        transition={{ ease: "easeInOut", duration: 2}}
        
        >

    </motion.div>);
}
 
export default Loader;