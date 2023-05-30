import React from 'react'
import styles from '../../style'
import { cyan, app_scan,apple,google,card_app } from '../assets'
import Button from './Button'
// import GetStarted from './GetStarted'
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


{/* <section id="product" className="flex  flex-row-reverse sm:py-16 py-6">
<div className={`flex-1 flex  justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
  <img src={card_app} alt="card"  className='w-[100%] h-[100%] relative z-[5] border-1 border-gray-500'/>
  <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
  <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient'/>
   
</div>
<div className={`flex-1 flex justify-center items-start flex-col`}>
  <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black  xs:leading-[76.8px] leading-[66.8px] w-full`}>Download App </h2>
  <p className={`font-poppins font-normal text-black  text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Register or login and a code will be provided for your institute to gain access to the app.</p>
  <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
    <img src={google} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
    <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />

  </div>
</div>

</section> */}