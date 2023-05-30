import { useState } from "react";
import { logo } from "../assets"


const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "services",
        title: "Services",
    },
    {
        id: "download",
        title: "Download",
    },
    {
        id: "cta",
        title: "CTA",
    },
];

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (

        <nav class="bg-gray-100 fixed w-full z-20 top-0 left-0 border-b shadow-md">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src={logo} class="h-12 mr-3" alt="app Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowra">AppName</span>
                </a>
                <div class="flex md:order-3">
                    <button type="button" class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center mr-5">
                        Login
                    </button>
                    <button type="button" class="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                        Register
                    </button>
                    <button onClick={()=> setToggle((prev)=> !prev)} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {
                            navLinks.map((nav, index) => (
                                <li>
                                    <a href={`#${nav.id}`} class="block py-2 pl-3 pr-4 text-gray-900 hover:text-gray-400" aria-current="page">{nav.title}</a>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}