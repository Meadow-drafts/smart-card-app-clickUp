import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 bg-black-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>Get Started</button>
  )
}

export default Button