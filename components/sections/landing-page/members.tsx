import Button from "../../buttons";
import Card from "../../cards";
import Slider from "../../slider";

const guides =[
    {
        id: 1,
        name: 'Daniela',
    
        img: '/assets/images/Daniela.webp',
        video: '/assets/videos/danielMin.webm',
        mainVideo: '/assets/videos/daniella.mp4',
        rotate: '-3',
        rotateH: '5',

     
    },
    {
        id: 2,
        name: 'Sharise',
    
        img: '/assets/images/sharise.webp',
        video: '/assets/videos/shariseMin.mp4',
        mainVideo: '/assets/videos/Sharise.mp4',
        rotate: '3',
        rotateH: '-5',

     
    },
    {
        id: 3,
        name: 'Misha',
    
        img: '/assets/images/misha.webp',
        video: '/assets/videos/MishaMin.webm',
        mainVideo: '/assets/videos/Misha.mp4',
        rotate: '-3',
        rotateH: '5',

     
    },
    {
        id: 4,
        name: 'Steph',
    
        img: '/assets/images/steph.webp',
        video: '/assets/videos/StephMin.mp4',
        mainVideo: '/assets/videos/Steph.mp4',
        rotate: '3',
        rotateH: '-5',

     
    },
    {
        id: 5,
        name: 'Maya',
        img: '/assets/images/maya-card.webp',
        video: '/assets/videos/MayaMin.webm',
        mainVideo: '/assets/videos/Maya.mp4',
        rotate: '-3',
        rotateH: '5',
    
    },


]
const Members = () => {
    return (  
        <section className="flex flex-col items-center  text-center gap-16 py-16 sm:items-stretch  4xl:py-24">
        <div className="flex flex-col gap-3 w-[700px]  lg:w-full px-4">
<h1 className="text-[52px]  font-semibold  leading-[56px] lg:text-[32px] lg:leading-none xs:text-xl  xs:leading-none">
Our members
<br className=' lg:block 2xs:hidden'/>
 make moves
</h1>
<h1 className="text-lg  font-semibold leading-[24px] xs:text-sm  xs:leading-none  xs:font-normal">

Hear inspiring stories from real members<br className='2xs:hidden'/> 
making real progress.
</h1>
<div className="flex items-center gap-3 justify-center">

<Button link="/guidance" classic  action="Who are Guides" />
</div>
        </div>
        <div className="flex flex-wrap items-center justify-center  dxs:flex-nowrap  dxs:overflow-x-scroll   dxs:w-screen dxs:items-start  dxs:justify-start  dxs:py-4  flow sm:hidden  ">
            {guides.map((data, index)=> (
 <Card guide  name={data.name} img={data.img} video={data.video} rotate={data.rotate} rotateH={data.rotateH} {...data} key={index} more="Watch" full close/>
            ))}
           
        </div>
        
        <Slider guides={guides} full  close />
    </section> 
    );
}
 
export default Members;