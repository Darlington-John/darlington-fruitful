import { useEffect, useRef, useState } from "react";
import Button from "../../buttons";
import Card from "../../cards";

const IvestWithoutStress = ({glowRef2, glow}) => {
    
    const headers = ['Invest', 'without', 'stress'];

    const cards = [{id: 1,
      main: `Your Guide gets to know you,
your lifestyle, and your goals, then
crafts an investing approach
that's seamlessly supported by
us, and super simple for you.`,
  header: 'Sync',
  img: '/assets/images/measure.png',
  rotate: '2'
    },
    {id: 2,
      main: `We’ll implement that approach,
routing contributions to your
diversified portfolio that meets
your goals and risk profile. Then
we’ll automate investing to build
long-term wealth with ease.`,
  header: 'Start',
  img: '/assets/images/together.png',
    rotate: '-2'
    },
    {id: 3,
      main: `We’ll monitor, manage, and
modify your approach to make
sure as your life changes, your
investing approach does too.
We’ll also work with you to
minimize taxes and expenses.`,
  header: 'Scale',
  img: '/assets/images/seek.png',
     rotate: '5'
    },
  ];
  
  const [activeHeader, setActiveHeader] = useState(headers[0]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let activeId = 1;

      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            activeId = index + 1;
          }
        }
      });

      setActiveHeader(headers[activeId - 1]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headers]);

  const registerCardRef = (ref, id) => {
    cardRefs.current[id - 1] = ref.current;
  };
    return (<div className="flex items-start  px-[208px]   relative  py-40  gap-96  2xl:gap-0  2xl:justify-between  xl:px-20   sm:px-6" ref={glowRef2}  style={glow}>
     
<div className="gap-16 items-start  flex  flex-col  h-[1500px]  sm:h-[700px] ">
<div className="flex flex-col  leading-10 gap-10  sticky   self-center  top-1/2 transform -translate-y-1/2  items-start md:gap-0  ">
{headers.map((header) => (
          <div
            key={header}
            className={`scroll-spy-header text-[90px]  font-semibold  lg:text-[70px] md:text-[40px]  xs:text-xl  xs:leading-none   ${
              header === activeHeader ? '' : '  text-[#00000066]'
            }`}
          >
            {header}
          </div>
        ))}
<div className="md:pt-4 xs:pt-2">
<Button action="Get started" classic   link="/get-started" big/>
</div>
</div>
</div>
<div className="h-[1500px]  sm:h-[700px]  flex justify-between  flex-col ">
        {cards.map((data)=>(
  <Card saving  data={data}  {...data} key={data.id} onScroll={registerCardRef}/>
        ))}

      </div>
    </div>  );
}
 
export default IvestWithoutStress;


