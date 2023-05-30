import { FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <section className={`flex justify-center items-center sm:py-16 py-6 flex-col`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#8e8e92]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
                    Copyright @ 2023 SmartCard. All Rights Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    <FaFacebook className="mr-4" />
                    <FaInstagram className="mr-4"/>
                    <FaLinkedinIn className="mr-4" />
                    <FaTwitter />

                </div>
            </div>
        </section>
    )
}