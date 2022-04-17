import React from 'react';
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <section class='opacity-90 bg-white text-yellow-500' id='profilefoot' translate='no'>
                <div>
                    <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
                        <div class="flex flex-col items-center justify-center">
                            <Link href="/">
                                <img class='cursor-help	hover:scale-110 animate-pulse' src='./assest/project.png' width="50" height="40" />
                            </Link>
                            <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 font-bold">
                                <Link href="/feedback">
                                    <a href="" class="cursor-help hover:text-yellow-700 hover:scale-110 focus:underline focus:outline-none text-base">FeedBacks</a>
                                </Link>
                            </div>
                            <div class="flex items-center gap-x-8 mt-6">
                                <a href="https://linkedin.com/in/mohammad-alwrekat" data-tippy-content="linkedin">
                                    <img src='./assest/linkedin.png'
                                        className='w-6 h-6 fill-current hover:scale-125 cursor-alias' />
                                </a>
                                <a href="https://wa.me/+962788818125" data-tippy-content="WhatsApp">
                                    <img src='./assest/whatsapp.png'
                                        className='w-6 h-6 fill-current hover:scale-125 cursor-alias' />
                                </a>
                                <a className="pb-0.5 rounded-full hover:scale-125" href="https://www.facebook.com/profile.php?id=100010107875359"
                                    data-tippy-content="Facebook">
                                    <img src='./assest/facebook.png'
                                        className='w-6 h-6 fill-curren cursor-alias' />
                                </a>
                                <a className="rounded-full hover:scale-125" href="https://www.instagram.com/mhmadwrekatt?r=nametag"
                                    data-tippy-content="Instagram">
                                    <img src='./assest/instagram.png'
                                        className='w-6 h-6 fill-current cursor-alias' /></a>
                                <a className="rounded-full hover:scale-125" href="https://twitter.com/wrekatmhmad"
                                    data-tippy-content="twitter">
                                    <img src='./assest/twitter.png'
                                        className='w-6 h-6 fill-current cursor-alias' /></a>
                            </div>
                            <div class="flex items-center mt-6">
                                <p class="font-serif text-xs cursor-help hover:text-yellow-700 hover:scale-110 leading-4">2022 <span class="font-serif">MHMAD
                                    WREKAT</span></p>
                                <div class="border-l border-gray-800 pl-2 ml-2">
                                    <p class="font-serif text-xs cursor-help hover:text-yellow-700 hover:scale-110 leading-4">Inc. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer