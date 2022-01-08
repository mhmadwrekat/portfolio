import Footer from '../components/Footer';
import Head from 'next/head';
import Link from "next/link";
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
            <section className='text-gray-400 bg-black opacity-80' id="profilehead">
                <div class=" container max-w-6xl mx-auto flex items-center py-5">
                    <img class='pl-3 cursor-grab	hover:scale-110 animate-pulse' src='./project.png' width="50" height="40" />
                    <div class="w-full mx-auto flex flex-wrap items-center">
                        <span class="font-serif pl-3 text-xl text-bolder">Feedbacks</span>
                    </div>
                    <div class=" pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <Link href="/"><p class="pr-3 float-right cursor-pointer no-underline font-serif">Profile</p></Link>
                    </div>
                </div>
            </section>
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
                                                                src='./user.png' />
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