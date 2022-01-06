import React from 'react';
import Head from 'next/head';
import Link from "next/link";
const Nav = () => {
    return (
        <>
            <Head>
                <title>Mhmad Wrekat</title>
                <link rel="icon" href="./icon.png" />
            </Head>
            <section className='bg-white opacity-70' id="profilehead">
                <div class=" container max-w-6xl mx-auto flex items-center py-5">
                    <img class='pl-3' src='./icon.png' width="60" height="60" />
                    <div class="w-full mx-auto flex flex-wrap items-center">
                        <span class="font-serif pl-3 text-2xl text-bolder">My Profile</span>
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
/*
const profilefoot = document.getElementById('profilehead');
    const profilefoo = document.getElementById('profilehea');
        <button id='themeButton' onClick={()=>{


if (profilefoot.classList.contains('text-gray-900')) {
profilefoot.classList.remove('text-gray-900');
profilefoot.classList.add('text-gray-100');
}else{
profilefoot.classList.remove('text-gray-100');
profilefoot.classList.add('text-gray-900');
}

if (profilefoo.classList.contains('text-gray-900')) {
    profilefoo.classList.remove('text-gray-900');
    profilefoo.classList.add('text-gray-100');
    }else{
    profilefoo.classList.remove('text-gray-100');
    profilefoo.classList.add('text-gray-900');
    }
}}>
        ☀️
        </button>
*/