import Head from 'next/head';
import Link from "next/link";
import React, { useEffect } from "react";
const Nav = () => {
    useEffect(() => {
        try {
            const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");
            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        } catch (error) {
            handleError(error);
        }
        function handleError(error) {
            console.error(error);
        }
    }, []);
    return (
        <>
            <Head>
                <title>Mhmad Wrekat</title>
                <link rel="icon" href="./assest/icon.png" />
            </Head>
            <nav class="bg-black opacity-80 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                   <Link href='/'>
 <img class='pl-3 cursor-grab hover:scale-110' src='./assest/icon.png' width="60" height="60" />
            </Link>        <div class="flex md:order-2">
                        <a href="./assest/wrekatt.pdf" download="wrekatt.pdf">
                            <button type="button" class="cursor-help animate-bounce flex text-gray-200 hover:bg-violet-600 bg-violet-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 md:mr-0">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                <span>Resume</span>
                            </button>
                        </a>
                        <button class="mobile-menu-button" type="button" >
                            <span class="sr-only">Open main menu</span>

                            <svg class="md:hidden flex w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <Link href='/'>
                                <li>
                                    <p class="cursor-grab hover:scale-110 block py-2 pr-4 pl-3 text-gray-200 hover:text-violet-600 rounded md:bg-transparent md:p-0">Profile</p>
                                </li>
                            </Link>
                            <Link href='/projects'>
                                <li>
                                    <p class="cursor-grab hover:scale-110 block py-2 pr-4 pl-3 text-gray-200 hover:text-violet-600 md:border-0 md:p-0">Project</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class='hidden mobile-menu md:hidden w-full bg-black opacity-80 border-gray-200'>
                <ul class="flex flex-col md:flex-row md:space-x-0 md:mt-0 md:text-sm md:font-medium text-center">
                    <Link href='/'>
                        <li className='py-3'>
                            <a class="cursor-grab hover:scale-110 py-2  text-gray-200 text-center hover:text-violet-600 rounded md:p-0">Profile</a>
                        </li>
                    </Link>
                    <Link href='/projects'>
                        <li className='py-3'>
                            <a href="" class="cursor-grab hover:scale-110 py-2  text-center text-gray-200 hover:text-violet-600 md:p-0">Project</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
export default Nav
