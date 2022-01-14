import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Slide } from "react-awesome-reveal";
//bg-[url('https://images.wallpaperscraft.com/image/single/stars_glitter_patterns_128474_3000x3000.jpg')]">
const projects = () => {
    return (
        <section className="bg-violet-300" >
            {/* NAV */}
            <Nav />
            {/* TITLE */}
            <section>
                <div class="grid grid-cols-1 gap:10 sm:gap-10 sm:grid sm:grid-cols-2 text-violet-800">
                    <Slide triggerOnce>
                        <img src='./assest/proj.png' class="object-cover sm:h-6/6 w-6/6 ..." />
                    </Slide>
                    <div class="flex items-stretch ...">
                        <div></div>
                        <div className="px-8 pt-10 sm:px-0 sm:pt-0 text-base sm:text-3xl text-center font-serif font-bold self-center ...">

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
            <section className='sm:grid sm:grid-cols-2 sm:gap-4'>
                {/* PROJECT 1 */}
                <section className='pt-20'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2FFeatures%2FPG_20190519_day1_536.jpg&w=1600&c=0" alt="Bike" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
                                <a href="#" class="block mt-1 text-xl uppercase leading-tight font-medium text-black hover:underline">Yalla Bike</a>
                                <p class="mt-2 text-gray-500">
                                    Events to help Nature .
                                    <br></br>
                                    Website Contain contain properties for renting , and gatherings .
                                </p>
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
                {/* PROJECT 2 */}
                <section className='pt-20'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="https://github.com/mhmadwrekat/wrekat-Portfolio/blob/main/src/assets/img/theme/img-1-1200x1000.jpg?raw=true" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
                                <a href="#" class="block mt-1 text-xl leading-tight font-medium text-black uppercase hover:underline">GALLERY OF HORNS</a>
                                <p class="mt-2 text-gray-500">
                                    Pictures Of Animals With Killer Headgear .
                                    <br></br>
                                    Best Horns In The Animal World - The Definitive List .
                                </p>
                                <br></br>
                                <span class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">React</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">JSON</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 mr-1 rounded-full">Bootstrap</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">Deploy</span>
                                <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Js</span>

                            </div>
                        </div>
                    </div>
                </section>
                {/* PROJECT 3 */}
                <section className='pt-20 pb-10'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="px-10 ml-2 md:px-0 md:shrink-0">
                                <img class="h-60 w-72 object-cover md:h-72 md:w-72"
                                    src="https://i0.wp.com/aipsafrica.com/wp-content/uploads/2017/05/khalifa-stadium-586x418.jpg?resize=534%2C450" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8 text-center md:text-left">
                                <div class="uppercase tracking-wide text-sm text-red-700 font-semibold">Desktop Website</div>
                                <a href="#" class="block mt-1 text-xl leading-tight font-medium text-black hover:underline">World cup 2022 qatar</a>
                                <p class="mt-2 text-gray-500">
                                    A project to display the Matches of the World Cup 2022 in Qatar .
                                    <br></br>
                                    With the possibility of predicting who will win, you can also book a ticket to attend any match you want .
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
            </section>
            <Footer />
        </section>
    )
}
export default projects
