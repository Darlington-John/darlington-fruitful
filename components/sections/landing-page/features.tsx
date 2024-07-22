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
    list: '1-to-1 video sessions focused on organizing  your finances, building wealth, and making  real progress.',
},
{
    id:3,
    list: 'Ongoing progress check-ins, quick syncs and anytime messaging.',
},
{
    id:1,
    list: 'A clear blueprint to hit your goals with simple steps that your Guide helps you implement.',
}
        ]
    }
]

    return ( <div className="bg-[#E0F0FF]   px-[66px]  py-8">
{featuring.map((data, index) =>(
    <Card benefit data={data}  {...data} key={index} />
))}
    </div> );
}
 
export default Features;