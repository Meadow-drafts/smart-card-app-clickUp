import { card_app, google, apple } from "../assets"


export default function CardDeal () {
  return (
    <section id="download" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
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

  </section>
  )
}

