import Link from "next/link";


const footerLink=[
  {id:1,
    header: 'Explore Fruitful',
    links: [
      {id:1,
        t0: '/login',
        where: 'Login'
      },
      {id:2,
        t0: '/login',
        where: 'Pricing'
      },
      {id:3,
        t0: '/login',
        where: 'Legal'
      },
    ]
  },
  {id:2,
    header: 'Career',
    links: [
      {id:1,
        t0: '/login',
        where: 'Email'
      }
    ]
  },
  {id:3,
    header: 'Social',
    links: [
      {id:1,
        t0: '/login',
        where: 'Instagram'
      },
      {id:1,
        t0: '/login',
        where: 'LinkedIn'
      },
      {id:1,
        t0: '/login',
        where: 'TikTok'
      },
    ]
  },
  {id:4,
    header: 'Support',
    links: [
      {id:1,
        t0: '/login',
        where: 'Contact Hospitality Desk'
      }
    ]
  },
]

const Footer = ( ) => {
    return (<section className="bg-white    flex flex-col fixed bottom-20 z-20  w-full  max-w-[100vw]">
      
        <div className="flex  w-full items-center  justify-between px-16 lg:justify-center  md:px-4 ">
<div className="p-4  grid grid-cols-4 bg-white gap-10 xl:grid-cols-3  lg:grid-cols-4 xs:px-0 2xs:grid-cols-2"> 
  {footerLink.map((data, index)=>(
    <div className="flex flex-col gap-2 items-start font-semibold text-sm md:text-xs" key={index}>
<h1>
{data.header}
</h1>
<div className="font-semibold text-sm flex flex-col gap-2">
{data.links.map((data, index)=>(
  <Link href={data.t0} className="text-[#9F9F9F] font-semibold text-sm md:text-xs" key={index}>
{data.where}
</Link>
))}

</div>
</div>
  ))}

</div>
<div className="lg:hidden">
<SvgComponent/>
</div>
      </div>

    </section>  );
}
 
export default Footer;
const outro =[ 
  {
    main: `© Fruitful 2024 — All rights reserved. “Fruitful” refers to Fruitful, Inc. and its separate, affiliated subsidiaries. Fruitful, Inc. is an investment adviser registered with the U.S. Securities & Exchange Commission, offering investment advisory products and services exclusively to Members with an active Subscription. Learn more about Fruitful in our Form CRS.`
  },
  {
    main: `This information is provided by Fruitful for educational and illustrative purposes only and is not considered an offer, solicitation of an offer, advice, or recommendation to buy, sell, or hold any security. All investing involves risk, including the risk of losing the money you invest, and past performance does not guarantee future performance. Rebalancing cannot assure a profit or protect against loss in a declining market. Fruitful relies on information from various sources believed to be reliable, including information from its Members, Clients, and other third parties, but cannot guarantee the accuracy or completeness of that information.`
  },
  {
    main: `Fruitful is a financial technology company, not a bank. Deposit accounts provided by Emigrant Bank, Member FDIC. Funds in the bank accounts are insured for up to $250,000 per depositor, depending on the ownership category. Interest rates are variable and subject to change at any time. These rates are current as of July 18, 2024.`
  },
  {
    main: `¹ The people in these videos are real Fruitful Members who were paid in cash for their time and participation in this series. We think that is fair. Each testimonial reflects the individual Member's experience as an advisory Client and is not intended to represent any other Member's or Client's experience. We believe in the integrity of this approach and that, outside the conflict of interest present due to compensation, no other conflicts apply to these testimonials. These Client testimonials were given in October 2023, represent the opinions of each Member at that time, and may have been edited for brevity and clarity.`
  },
  {
    main: `² Cost of traditional advisory firms sourced from The Kitces Report, Volume 2, 2022, Figure 61. Distribution Of Typical Annual Retainer Fee.`
  },
  {
    main: `*Posted to the FDIC.gov website as the average national deposit rate on savings in the top left cell of the rate table, as of July 18, 2024.`
  },
  {
    main: `Fruitful is not affiliated with, sponsored, or endorsed by the companies listed, described, or featured on its site. Company logos or trademarks used do not imply endorsement and are the property of their respective owners.`
  },
]
export const PostFooter = () => {
  return (
    <div className="flex flex-col gap-3 w-full  px-[308px]  py-20 relative  z-30 bg-white  xl:px-[200px]  lg:px-20  md:px-4">
    {outro.map((data,index)=>(
<p className="font-[800] text-xs " key={index}>
{data.main}
</p>
    ))}
 
   </div>
    );
}

const SvgComponent = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg "
      style={{
        width: "409px",
        height: "409px",
        transform: "translate3d(0,0,0)",
        contentVisibility: "visible",
      }}
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h409v409H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          d="M177.375-36.75C88.125-17 4.5 61.5 15 152.5 92.5 135 181.5 60 177.375-36.75z"
          // className="bounce"
          style={{
            display: "block",
          }}
          className="wave  "
          // transform="translate(204.5 204.5)"
        />
        <path
          d="M180.375-38.25C72-9 25.5 53.5 15 152.5c79.5-8.5 168-96 165.375-190.75z"
          style={{
            display: "block",
          }}
          transform="matrix(-1 0 0 1 204.5 204.5)"
        />
        <g
          fill="none"
          style={{
            display: "block",
          }}
        >
          <path d="M202.728 63.329c28.322 0 51.318 22.996 51.318 51.318s-22.996 51.318-51.318 51.318-51.318-22.996-51.318-51.318 22.996-51.318 51.318-51.318z" />
          <path
            stroke="#000"
            strokeWidth={26}
            className="moveLeft"
            d="M202.728 63.329c28.322 0 51.318 22.996 51.318 51.318s-22.996 51.318-51.318 51.318-51.318-22.996-51.318-51.318 22.996-51.318 51.318-51.318z"
          />
        </g>
      </g>
    </svg>
  )