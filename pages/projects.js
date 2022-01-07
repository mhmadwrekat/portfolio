import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import Footer from '../components/Footer';
import Nav from '../components/Nav'
/*
            <section >
                <div className="leading-normal tracking-normal gradient">
                    <nav id="header" className="fixed top-0 z-30 w-full font-sans bg-white opacity-70">
                        <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                            <div className="flex items-center pl-4">
                                <img class='pl-3' src='./icon.png' width="60" height="60" />
                                <div class="w-full mx-auto flex flex-wrap items-center">
                                    <span class="font-serif pl-3 text-2xl text-bolder">My Projects</span>
                                </div>
                            </div>
                            <div class=" pt-2 content-center justify-between md:w-1/2 md:justify-end">
                                <Link href="/profile"><p class="pr-3 float-right cursor-pointer no-underline font-serif">Profie</p></Link>
                            </div>
                        </div>
                        <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
                    </nav>
                </div>
            </section>
*/
const projects = () => {
    return (
        <>
            {/* NAV */}
            <Head>
                <title>Mhmad Wrekat</title>
                <link rel="icon" href="./icon.png" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="Simple landind page" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
            </Head>
            <section className='bg-white opacity-70' id="profilehead">
                <div class=" container max-w-6xl mx-auto flex items-center py-5">
                    <img class='pl-3' src='./project.png' width="60" height="50" />
                    <div class="w-full mx-auto flex flex-wrap items-center">
                        <span class="font-serif pl-3 text-2xl text-bolder">My Projects</span>
                    </div>
                    <div class=" pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <Link href="/"><p class="pr-3 float-right cursor-pointer no-underline font-serif">Profile</p></Link>
                    </div>
                </div>
            </section>
            {/* TITLE */}
            <section>
                <div class="grid grid-cols-1 gap:10 sm:gap-10 sm:grid sm:grid-cols-2 text-sky-900">
                    <img src='https://abhedyak.github.io/images/back-end-developer.svg' class="object-cover sm:h-6/6 w-6/6 ..." />
                    <div class="flex items-stretch ...">
                        <div></div>
                        <div className="px-8 sm:px-0 text-sm sm:text-3xl text-center font-serif font-bold self-center ...">
                            <p className=''>
                                My Latest Projects
                            </p>
                            <br></br>
                            <p className=''>
                                “You can do anything you set your mind to it.”
                            </p>
                            <br></br>
                            <p className='text-xs text-gray-500 sm:text-lg'>
                                - Benjamin Franklin
                            </p>
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
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Bootstrap</span>
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs mr-1 font-bold leading-none text-red-100 bg-green-600 rounded-full">Deploy</span>
                                <span class="inline-flex items-center justify-center px-2 mr-1 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">Js</span>

                            </div>
                        </div>
                    </div>
                </section>
                {/* PROJECT 3 */}
                <section className='pt-20'>
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
        </>
    )
}
export default projects
/*
<section className='bg-gray-100'>
<img src='https://png.pngitem.com/pimgs/s/133-1337263_job-seeker-icon-hd-png-download.png'/>
</section>
*/
/*
            <section>
                <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">
                    <div
                        className="bg-[url('https://abhedyak.github.io/images/back-end-developer.svg')] absolute w-full h-full bg-center bg-cover "
                    >
                        
                        <span
                            id="blackOverlay"
                            className="absolute w-full h-full"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-12/12">
                                <div className="pr-12">
                                    <h1 className="text-6xl font-semibold text-white pt-28 ">
                                        Your story starts with us !
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
*/
