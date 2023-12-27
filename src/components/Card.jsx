import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Card( {img , h1 , p }) {
  return (
    <div className='m-auto text-center mt-[50px]'>
        <div className='m-auto justify-center flex mb-[20px]'>
            <img src={img} alt="error" />
        </div>
        <div className='m-auto'>
            <h1 className='font-bold text-[20px] sm:text-[33px] dark:text-orange-500'> {h1} </h1>
            <p className='font-medium w-[230px] m-auto text-gray-600 sm:text-[20px] sm:w-[70%]  dark:text-sky-500'> {p} </p>
        </div>
    </div>
  )
}

export default Card


function Card2( {img , h1 , p }) {
    return (
      <div className='m-auto text-center mt-[50px] sm:mt-[150px]'>
          <div className='m-auto'>
              <h1 className='font-bold text-[20px] mb-[10px] sm:text-[40px] dark:text-orange-500'> {h1} </h1>
              <p className='font-medium w-[400px] text-[14px] mb-[20px] m-auto text-gray-600 sm:text-[20px] sm:w-[70%]  dark:text-sky-500'> {p} </p>
          </div>
          <div data-aos="flip-right" className='m-auto justify-center flex mb-[20px]'>
              <img src={img} alt="error" />
          </div>
      </div>
    )
}
  
export { Card2 }

function Card3 ( { h1 , p , img } ) {
  return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className='sm:flex sm:pl-[250px] sm:mt-[70px] sm:gap-[100px]'> 
        <div className='text-center sm:text-left'>
            <h1 className='font-bold text-[19px] mt-[40px] mb-[20px] dark:text-orange-500 sm:text-[35px] text-amber-500'>{h1}                
            </h1>
            <p className='font-medium mb-[40px] text-gray-600 dark:text-sky-500'> 
                {p}
            </p>
        </div>
        <div className='w-[250px] m-auto sm:w-[100%]'>
            <img src={img} alt="error" />
        </div>
    </div>
  )
}

export { Card3 }

function Card4 ( { h1 , p , img } ) {
  return (
    <div data-aos="fade-zoom-out"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className='sm:flex sm:mt-[70px] sm:gap-[50px]'>   
        <div className='w-[250px] m-auto sm:ml-[300px] sm:w-[30%]'>
            <img src={img} alt="error" className='w-[250px] m-auto mt-[50px] ' />
        </div>
        <div className='text-center sm:text-left sm:ml-[250px]'>
            <h1 className='font-bold text-[19px] mt-[40px] mb-[20px] dark:text-orange-500 sm:text-[35px] sm:w-[70%]'>
                {h1}                
            </h1>
            <p className='font-medium mb-[40px] text-gray-600 dark:text-sky-500 sm:w-[80%]'> 
                { p }
            </p>
        </div>
    </div>
  )
}

export { Card4 }