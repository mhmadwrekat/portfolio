import Nav from '../components/Nav';
import useFeedback from '../hooks/useFeedback';
import Footer from '../components/Footer';
import swal from 'sweetalert';
const { createFeedback } = useFeedback();
import ProfileBody from '../components/ProfileBody';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
const WEATHER = process.env.NEXT_PUBLIC_BACKEND_WEATHER_API;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const PASS = process.env.NEXT_PUBLIC_PASSWORD;
import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios';
import emailjs from '@emailjs/browser';
const profile = () => {

    const form = useRef();
    const [feedback, setFeedback] = useState([]);
    const [weather, setWeather] = useState([]);

    {/* WEATHER DATA */ }
    useEffect(() => {
        Axios.get(WEATHER).then(res => {
            res.data.cache.data && setWeather(res.data.cache.data)
        })
    }, []);
    {/* END WEATHER DATA */ }
    {/* GET FEEDBACK*/}
    const token = Buffer.from(`${USERNAME}:${PASS}`, 'utf8').toString('base64')
    const url = `${FEEDBACK}`
    useEffect(() => {
        Axios.get(url, {
            headers: {
              'Authorization': `Basic ${token}`
            },
          }).then(res=>{
              setFeedback(res.data);
          })
    }, []);   
    {/* END GET FEEDBACK*/}
    if (typeof window !== 'undefined') {
        localStorage.setItem('feedback' , JSON.stringify(feedback)) ;
        localStorage.setItem('weather' , JSON.stringify(weather)) ;
        }
    {/* POST FEEDBACK */ }
    const handelFeedback = (event) => {
      event.preventDefault();
        const feedback = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
            author: 2
        }
            //  createFeedback(feedback);
        swal("Success", "Thank You For Your Feedback!!", "success");
        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${USER_ID}`);
        event.target.reset();
        }
    {/* END POST FEEDBACK */ }
    return (
        <>
            <section translate='no'
                className="bg-cover 
bg-[url('https://cutewallpaper.org/21/3000x3000-wallpaper/nature-trees-forest-Wallpapers.jpg')]
 font-awesome antialiased text-gray-900 leading-normal tracking-wider">
                <Nav />
                <ProfileBody />























                {/* FEEDBACK FORM */}
                <section className="pt-0 antialiased leading-normal tracking-wider text-gray-900 sm:pt-10 font-awesome">
                    <div className="text-white opacity-95">
                        <div className="container flex flex-col mx-auto md:flex-row">
                            <div className="flex flex-col w-full p-8 lg:w-1/3">
                                <p className="text-3xl font-extrabold leading-relaxed md:text-5xl md:leading-snug">Leave Me a Feedback!</p>
                                <p className="text-sm font-bold leading-snug md:text-base text-gray-50">
                                    Please provide your valuable feedback or any beautiful word for support ...
                                </p>
                            </div>
                            <div className="flex flex-col justify-center w-full lg:w-2/3">
                                <div className="container w-full px-4">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 lg:w-6/12">
                                            <div
                                                className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-black rounded-lg shadow-lg opacity-90">
                                                <div className="flex-auto p-5 lg:p-10">
                                                    <h4 className="mb-4 text-2xl font-semibold text-white">Suggestion, Feedback, or any Comment!!</h4>
                                                    <form id="feedbackForm" method='post' onSubmit={handelFeedback} ref={form}>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-white uppercase"
for="email">Name</label><input type="text" name="name" id="name"
                                                                    class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                                    required />
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-white uppercase"
for="email">Email</label><input type="email" name="email" id="email"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
required />
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-white uppercase"
                                                                for="message">Message</label><textarea maxlength="300" name="message" id="feedback" rows="4"
                                                                    cols="80"
                                                                    className="w-full px-3 py-3 text-sm text-gray-800 placeholder-black bg-gray-300 border-0 rounded shadow focus:outline-none"
                                                                    placeholder="" required></textarea>
                                                        </div>
                                                        <div className="mt-6 text-center">
                                                            <button id="feedbackBtn" type="submit"
className="px-6 py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center text-gray-200 uppercase rounded shadow outline-none bg-lime-700 hover:bg-lime-500 cursor-alias active:bg-yellow-400 hover:shadow-lg focus:outline-none"
                                                            >Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    )
}
export default profile
