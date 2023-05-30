import React from 'react'
import { app_scan} from '../assets'
import Button from './Button'
function Hero() {


  return (
    <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
    <div className='flex-1 flex justify-center items-start flex-col mt-0 md:-mt-60 '>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full '>Your Ideal <br/> <span className='text-gradient'> Student Smart App </span></h2>
      <p className='max-w-[480px]mt-5 font-poppins font-normal text-black text-[18px] leading-[30.8px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles="mt-10 "/>
    </div>
    <div className='flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-5 relative'>
      <img src={app_scan} alt="card"  className="w-[100%] h-[100%] rotate-12 "/>
    </div>
    

  </section>
 

  )
}

export default Hero
