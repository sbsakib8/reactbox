import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data=[
    {
        myname:'sb sakib',
        work: 'programmer'
    },
    {
        myname:' sabbir',
        work: 'programmer'
    },
    {
        myname:'rakib',
        work: 'programmer'
    },
    {
        myname:'sb sakib',
        work: 'programmer'
    },
    {
        myname:'sb sakib',
        work: 'programmer'
    },
    {
        myname:'sb sakib',
        work: 'programmer'
    }

]
function Sliders() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <>
   
     <div className=' flex justify-center items-center gap-6 mt-8'>
     <Slider {...settings}>
        {
         data.map((item,input)=>(
           
            <div key={input} className=' bg-green-500 w-[250px] flex flex-col  justify-center items-center py-6'>
         <div className=' bg-black w-[200px] h-[150px]'></div>
         <div>
             <h1>{item.myname}</h1>
             <p>{item.work}</p>
         </div>
     </div>
         ))
        
       }
       </Slider>
       <h1>sb sakib</h1>
     </div>
    
    </>
  )
}

export default Sliders;