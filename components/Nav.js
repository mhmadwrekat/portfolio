import React from 'react';
import Head from 'next/head';
import Link from "next/link";
const Nav = () => {
    return (
        <>
            <Head>
                <title>Mhmad Wrekat</title>
                <link rel="icon" href="./assest/icon.png" />
            </Head>
            <section className='text-gray-400 bg-black opacity-80' id="profilehead">
                <div class=" container max-w-6xl mx-auto flex items-center py-5">
                    <img class='pl-3 cursor-grab hover:scale-110' src='./assest/icon.png' width="60" height="60" />
                    <div class="w-full mx-auto flex flex-wrap items-center">
                        <span class="font-serif pl-3 text-xl text-bolder">My Profile</span>
                    </div>
                    <div class=" pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <Link href='/projects'><p class="pr-3 float-right cursor-pointer no-underline font-serif">Projects</p></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Nav
