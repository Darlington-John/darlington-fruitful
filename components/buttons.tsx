import Link from "next/link";

const Button = (props: any) => {
    return (   <Link href={props.link}>
      {props.login && (
    <div className="bubble flex items-center  h-[40px] py-[25px] px-[30px] md:py-3 md:px-4  ">
{props.action}
    <span></span><span></span><span></span><span></span>
  </div>
      )}
      {props.classic && (
    <div className="bubble-classic   flex items-center  h-[40px] py-[25px] px-[30px] md:py-3 md:px-4  xs:text-xs text-base  xs:h-[30px]">
{props.action}
    <span></span><span></span><span></span><span></span>
  </div>
      )}
         {props.white && (
    <div className="bubble-white   flex items-center  h-[40px] md:h-[30px]">
{props.action}
    <span></span><span></span><span></span><span></span>
  </div>
      )}
      
      </Link> );
}
 
export default Button;