import { useState, useEffect } from 'react';
import Card from '../../cards';

const SingleViewSection = () => {


  return (
    <section className="flex items-start px-32 justify-between bg-white text-black lg:px-10  lg:hidden relative">
      
              <div className="flex flex-col gap-0 pt-60   sticky top-0">
                
        {headers.map((header) => (
          <div
            key={header}
            className={`scroll-spy-header text-[40px] font-semibold lg:text-xl lg:leading-normal   ${
              header === activeHeader ? 'opacity-100' : ' opacity-20'
            }`}
          >
            {header}
          </div>
        ))}
      </div>
      <div>
        
      <div className="h-[1500px] w-full flex justify-between  flex-col">
        {images.map((data)=>(
  <Card saving  data={data}  {...data} key={data.id}/>
        ))}
  
      </div>
      </div>
    </section>
  );
};

export default SingleViewSection;
