import Footer from '../components/Footer';
import Nav from '../components/Nav';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
import Axios from 'axios';
const WEATHER = process.env.NEXT_PUBLIC_BACKEND_WEATHER_API;
import React, { useState, useEffect } from "react";
const feedback = () => {
    const [feedback, setFeedback] = useState([]);
    const [weather, setWeather] = useState([]);
    let counter = 0;
    {/* WEATHER DATA */ }
    useEffect(() => {
        Axios.get(WEATHER).then(res => {
            res.data.cache.data && setWeather(res.data.cache.data)
        })
    }, []);
    {/* END WEATHER DATA */ }
    useEffect(() => {
        Axios.get(FEEDBACK).then(res => {
            setFeedback(res.data)
        })
    }, []);
    return (
        <section translate='no'
        className="bg-cover bg-[url('https://wallpaperaccess.com/full/2185980.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
            <Nav />
            <section className='grid grid-cols-1 px-10 py-0 sm:py-32 sm:px-0 sm:grid-cols-4'>
                {
                    feedback.map((item) => {
                        return (
                            <>
                                <div class=" pt-3 pb-3 flex flex-col items-center justify-center opacity-95">
                                    <div class=" max-w-md px-5 py-5 mx-auto bg-white rounded-2xl shadow-xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img class="w-10 rounded-full text-black"
                                                                src='./assest/user.png' />
                                                        </div>
                                                        <p class=" text-gray-500 text-xs">{item.name}</p>

                                                        <p class="text-left text-gray-500 text-xs">{item.email}</p>
                                                        <p class="block p-1 sm:p-1 font-bold text-sm sm:text-base">
                                                            {item.message}                            </p>
                                                        <p class="text-right sm:text-center  mdi mdi-plus mdi-18px mx-1 text-gray-500 text-xs">{item.timestamp.split('T', 1)}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
            {/* WEATHER DATA MOBILE VIEW */}
            <section className='grid grid-cols-2 py-10 pt-5 sm:pt-5 sm:px-0 sm:hidden'>
                {
                    weather && weather.map((item) => {
                        if (counter < 2) {
                            counter++;
                            return (<>
                                <div class="pt-3 pb-3 flex flex-col items-center justify-center opacity-90">
                                    <div class="px-6 py-2 max-w-md sm:px-10 sm:py-5 mx-auto bg-white rounded-2xl shadow-xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img className='w-8 h-8 sm:w-12 sm:h-12' src='./assest/weather.png' />
                                                        </div>
                                                        <p class=" text-gray-500 font-bold text-xs">Amman</p>
                                                        <p class="text-left font-bold text-gray-500 text-xs">{item.date}</p>
                                                        <p class="text-left font-extrabold text-gray-500 text-xs">
                                                            {item.description}                  </p>
                                                        <p class="text-right sm:text-center font-bold mdi mdi-plus mdi-18px mx-1 text-gray-500 text-xs">
                                                            {item.max_temp}  °C
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        }
                    })
                }
            </section>
            {/* END WEATHER DATA MOBILE */}
            {/* WEATHER DATA DESKTOP VIEW */}
            <section className='hidden grid-cols-5 py-10 pt-5 sm:pt-5 sm:px-0 sm:grid'>
                {
                    weather && weather.map((item) => {
                        if (counter < 7) {
                            counter++;
                            return (<>
                                <div class="pr-2 pt-3 pb-3 flex flex-col items-center justify-center opacity-90">
                                    <div class="px-6 py-2 max-w-md sm:px-10 sm:py-5 mx-auto bg-white rounded-2xl shadow-xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img className='w-8 h-8 sm:w-12 sm:h-12 hover:scale-110 animate-pulse' src='./assest/weather.png' />
                                                        </div>
                                                        <p class=" text-gray-500 font-bold text-xs hover:scale-110 ">Amman</p>
                                                        <p class="text-left font-bold text-gray-500 text-xs hover:scale-110">{item.date}</p>
                                                        <p class="text-left font-extrabold text-gray-500 text-xs hover:scale-110 ">
                                                            {item.description}                  </p>
                                                        <p class="text-right sm:text-center font-bold mdi mdi-plus mdi-18px mx-1 text-gray-500 hover:scale-110 text-xs">
                                                            {item.max_temp}  °C
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    })
                }
            </section>
            {/* END WEATHER DATA DESKTOP */}
            <Footer />
        </section>
    )
}
export default feedback