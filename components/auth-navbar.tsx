import Link from "next/link";

const AuthNavbar = () => {
    return (<div className="flex w-full items-center py-6  px-10     lg:py-4  sticky top-0  bg-white xs:py-3 xs:px-4  gap-10">
        <Link href=''>
        <img src={'/assets/icons/arr-left.svg'} alt=""  className="w-6   "/>
        </Link>
        <Link href="/">
        <img src={'/assets/icons/logoBlack.svg'} alt="" className="w-[80px] xs:w-20  "/>
        </Link>
    </div>  );
}
 
export default AuthNavbar;