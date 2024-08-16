
import Card from "../../cards";


const Features = () => {

      
    

const featuring = [
    {
        id:1,
        feat: 'Guidance',
        feature: 'Talk to a human. An expert. A Fruitful Guide.',
        features:[
{
    id:1,
    list: 'Dedicated advice and support on all aspects of your finances from a Fruitful Guide.',
},
{
    id:2,
    list: `1-to-1 video sessions focused on organizing  your finances, building wealth, and making real progress.`,
},
{
    id:3,
    list: 'Ongoing progress check-ins, quick syncs and anytime messaging.',
},
{
    id:1,
    list: 'A clear blueprint to hit your goals with simple steps that your Guide helps you implement.',
 
}
        ],
        main: '/assets/images/fat.webp',
        bg: '#fee9d1',
        width: '353px',
           float: '/assets/images/misha-talk.svg',
           top: '20px',
           left: '-145px',
           width1: '280px',
           float2: '/assets/images/dur-talk.svg',
           top2: '170px',
           left2: '-205px',
           width2: '280px',
           float3: '/assets/images/replace.svg',
           top3: '270px',
           left3: '205px',
           width3: '280px',
    }
]

    return ( <div className="bg-[#E0F0FF]   px-[66px]  py-20    relative  outline-none     flex  flex-col gap-10  md:px-0   xs:py-4 overflow-hidden   4xl:px-[300px] " >

{featuring.map((data, index) =>(
    <Card benefit data={data}  {...data} key={index} />
))}
    </div> );
}
 
export default Features;