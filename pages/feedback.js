import Footer from '../components/Footer';
import Head from 'next/head';
import Link from "next/link";
import Nav from '../components/Nav';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
import Axios from 'axios';
import React, { useState, useEffect } from "react";
const feedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        Axios.get(FEEDBACK).then(res => {
            setFeedback(res.data)
        })
    }, []);
    return (
        <section
            className="bg-cover bg-[url('https://wallpaperaccess.com/full/2185980.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
<Nav/>

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
            <Footer />
        </section>
    )
}
export default feedback