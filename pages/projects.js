import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Slide } from "react-awesome-reveal";
const projects = () => {
    let feedback = JSON.parse(localStorage.getItem('feedback')) ;
    let weather = JSON.parse(localStorage.getItem('weather')) ;
    
    console.log("FEEDBACK MOVEM :",feedback);
    console.log("FEEDBACK MOVEM :",weather);    
    return (
        <section translate='no'>
            {/* NAV */}
            <Nav />
            {/* TITLE */}
            <section>
                <div class=" text-violet-800">
                    <img src='./assest/projectgif.gif' class="w-full" />
                    <div>
                        <div className="px-8 pt-10 sm:px-0 sm:pt-10 text-base sm:text-3xl text-center font-serif font-bold self-center ...">
                            <Slide triggerOnce>
                                <p>My Latest Projects</p>
                                <br></br>
                                <p>“You can do anything you set your mind to it.”</p>

                                <br></br>
                                <p className='text-xs text-gray-500 sm:text-lg'>
                                    - Benjamin Franklin
                                </p>
                            </Slide>
                        </div>
                        <div></div>
                    </div></div>
            </section>
            {/* PROJECTS */}
            <section className='grid grid-cols-2 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-4 sm:gap-5'>
                {/* PROJECT 1 */}
                <section>
                    <div class="w-36 sm:w-60">
                        <div class="text-center relative overflow-hidden rounded-2xl shadow-2xl">
                            <p class="block mt-1 text-sm sm:text-xl uppercase leading-tight font-medium text-black">
                                Cella Center
                            </p>
                            <div class="uppercase tracking-wide text-xs sm:text-sm text-red-700 pb-1 sm:pb-0 font-semibold">RESPONSIVE</div>
                            <img class="object-cover w-full sm:h-48 h-28 rounded-xl"
                                src="./assest/cella.jpg" alt="Cella Center" />
                            <a href="https://cella-center.vercel.app/" class="absolute top-9 sm:top-52 left-1 mt-1 text-xl cursor-alias uppercase leading-tight font-medium text-black hover:underline">
                                <svg className="inline h-4 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>
                            </a>
                            <p className='pl-1'>
                                <p class="my-2 text-gray-500 text-xs sm:text-sm">
                                    A project For a Beauty Center Display The Beauty Services .
                                </p>
                            </p>
                        </div>
                    </div>
                </section>
                {/* PROJECT 2 */}
                <section>
                    <div class="w-36 sm:w-60">
                        <div class="text-center relative overflow-hidden rounded-2xl shadow-2xl">
                            <p class="block mt-1 text-sm sm:text-xl uppercase leading-tight font-medium text-black">
                                World cup 2022
                            </p>
                            <div class="uppercase tracking-wide text-xs sm:text-sm text-red-700 pb-1 sm:pb-0 font-semibold">Desktop Website</div>
                            <img class="object-cover w-full sm:h-48 h-28 rounded-xl"
                                src="./assest/worldcup.png" alt="WorldCup" />
                            <a href="https://world-cup-22-frontend.vercel.app/" class="absolute top-9 sm:top-52 left-1 mt-1 text-xl cursor-alias uppercase leading-tight font-medium text-black hover:underline">
                                <svg className="inline h-4 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>
                            </a>
                            <p className='pl-1'>
                                <p class="my-2 text-gray-500 text-xs sm:text-sm">
                                    A project to display the Info About the World Cup 2022 in Qatar .
                                </p>
                            </p>
                        </div>
                    </div>
                </section>
                {/* PROJECT 3 */}
                <section>
                    <div class="w-36 sm:w-60">
                        <div class="text-center relative overflow-hidden rounded-2xl shadow-2xl">
                            <p class="block mt-1 text-sm sm:text-xl uppercase leading-tight font-medium text-black">
                                Yalla Bike
                            </p>
                            <div class="uppercase tracking-wide text-xs sm:text-sm text-red-700 pb-1 sm:pb-0 font-semibold">Desktop Website</div>
                            <img class="object-cover w-full sm:h-48 h-28 rounded-xl"
                                src="./assest/bikeproj.jpg" alt="Bike" />
                            <a href="https://priceless-swartz-6b6f00.netlify.app/" class="absolute top-9 sm:top-52 left-1 mt-1 text-xl cursor-alias uppercase leading-tight font-medium text-black hover:underline">
                                <svg className="inline h-4 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>
                            </a>
                            <p className='pl-1'>
                                <p class="my-2 text-gray-500 text-xs sm:text-sm">
                                    Events to help Nature .
                                    <br></br>
                                    Renting and
                                    Gatherings .
                                </p>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </section>
    )
}
export default projects
/*
                <section className='pt-20 pb-10'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="./assest/worldcup.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
                                <a href="https://world-cup-22-frontend.vercel.app/" class="block mt-1 text-xl leading-tight cursor-alias font-medium text-black hover:underline">
                                    World cup 2022 qatar{' '}<svg className="inline h-4 pr-4 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg>
                                    </a>
                                <p class="mt-2 text-gray-500">
                                    A project to display the Matches of the World Cup 2022 in Qatar .
                                    <br></br>
                                </p>
                                <br></br>
                                <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Python</span>
                                <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Django</span>
                                <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Restframework</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">JWT</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">Api</span>
                                <br></br>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">DataBase</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">NextJS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">TailwindCSS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">Vercel</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Heroku</span>
                            </div>
                        </div>
                    </div>
                </section>



        <section className='pt-20 pb-10'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="./assest/worldcup.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
                                <a href="https://world-cup-22-frontend.vercel.app/" class="block mt-1 text-xl leading-tight cursor-alias font-medium text-black hover:underline">
                                    World cup 2022 qatar{' '}<svg className="inline h-4 pr-4 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg>
                                    </a>
                                <p class="mt-2 text-gray-500">
                                    A project to display the Matches of the World Cup 2022 in Qatar .
                                    <br></br>
                                </p>
                                <br></br>
                                <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Python</span>
                                <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Django</span>
                                <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Restframework</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">JWT</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">Api</span>
                                <br></br>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">DataBase</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">NextJS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">TailwindCSS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-blue-600 rounded-full">Vercel</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Heroku</span>
                            </div>
                        </div>
                    </div>
                </section>




                <section className='pt-20 pb-10'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="./assest/cella.jpg" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Mobile + Desktop Website "RESPONSIVE"</div>
                                <a href="https://cella-center.vercel.app/" class="block  mt-1 text-xl cursor-alias leading-tight font-medium text-black hover:underline">
                                Cella Beauty Center{' '}<svg className="inline h-4 pr-4 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg>
                                    </a>
                                <p class="mt-2 text-gray-500">
                                    A project For a Beauty Center Display The Beauty Services .
                                    <br></br>
                                </p>
                                <br></br>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-violet-600 rounded-full">React</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-violet-600 rounded-full">NextJS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-violet-600 rounded-full">TailwindCSS</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-violet-600 rounded-full">Vercel</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-violet-600 rounded-full">JS</span>

                            </div>
                        </div>
                    </div>
                </section>


*/
{/* PROJECT 1 */ }
/*
     <section className='pt-20'>
     <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
         <div class="md:flex">
             <div class="px-10 ml-2 md:px-0 md:shrink-0">
                 <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                     src="https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2FFeatures%2FPG_20190519_day1_536.jpg&w=1600&c=0" alt="Bike" />
             </div>
<div class="p-8 text-center md:text-left">
<div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
<a href="https://priceless-swartz-6b6f00.netlify.app/" class="block mt-1 text-xl cursor-alias uppercase leading-tight font-medium text-black hover:underline">
Yalla Bike{' '}<svg className="inline h-4 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20">
<path
d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
</svg>
</a>
                 
                 <br></br>
                 <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Html5</span>
                 <span class="inline-flex items-center justify-center mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Css3</span>
                 <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Js</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">React</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">Api</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Bootstrap</span>
                 <br></br>
                 <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">NodeJS</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">mongoDB</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">Auth0</span>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">Deploy</span>
             </div>
         </div>
     </div>
 </section>
*/