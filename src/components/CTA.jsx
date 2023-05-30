import Button from "./Button"

function CTA ()  {
  return (
    <section id='cta' className={`flex justify-center shadow-lg items-center sm:my-16 my-6sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-gradient-to-r from-fuchsia-500 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full'>Let’s try our service now!</h2>
        <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]max-w-[470px] mt-5`}>
          Everything you need to use student smart cards for organisation and management of your institutions at your comfort.</p>
      </div>

      <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
      </div>
      
    </section>
  )
}

export default CTA