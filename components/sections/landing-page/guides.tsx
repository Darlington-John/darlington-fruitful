import Button from "../../buttons";
import Card from "../../cards";

const Guides = () => {
    const guides =[
        {
            id: 1,
            name: 'More about Andrea',
            img: '/assets/images/Andrea.png',
            video: '/assets/videos/Andrea.mp4',
            rotate: '-3',
            rotateH: '5'
        },
        {
            id: 2,
            name: 'More about Andrew',
            img: '/assets/images/andrew.png',
            video: '/assets/videos/andrew.mp4',
            rotate: '3',
            rotateH: '-4'
        },

        {
            id: 5,
            name: 'More about Mckenna',
            img: '/assets/images/mckenna.png',
            video: '/assets/videos/mckenna.mp4',
            rotate: '-3',
            rotateH: '5'
        },
        
        {
            id: 4,
            name: 'More about Matt',
            img: '/assets/images/Matt.png',
            video: '/assets/videos/Matt.mp4',
            rotate: '3',
            rotateH: '-5'
        },
        {
            id: 6,
            name: 'More about Raquel',
            img: '/assets/images/Raquel.png',
            video: '/assets/videos/Raquel.mp4',
            rotate: '3',
            rotateH: '5'
        }
    ]
    return (
        <section className="flex flex-col items-center  text-center gap-16 py-16">
        <div className="flex flex-col gap-3 w-[700px]  lg:w-full px-4">
<h1 className="text-[52px]  font-semibold  leading-[56px] lg:text-[32px] lg:leading-none xs:text-xl  xs:leading-none">
A partner and a platform that
<br className='hidden lg:block 2xs:hidden'/>
make money simple.
</h1>
<h1 className="text-lg  font-semibold leading-[24px] xs:text-sm  xs:leading-none  xs:font-normal">
Take control of your finances with expert human help<br className='2xs:hidden'/> and a single intuitive place to track it all.
</h1>
<div className="flex items-center gap-3 justify-center">

<Button link="/guidance" classic  action="Who are Guides" />
</div>
        </div>
        <div className="flex">
            {guides.map((data, index)=> (
 <Card guide name={data.name} img={data.img} video={data.video} rotate={data.rotate} rotateH={data.rotateH} key={index}/>
            ))}
           
        </div>
    </section> 
      );
}
 
export default Guides;