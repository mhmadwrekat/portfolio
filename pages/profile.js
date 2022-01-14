import Nav from '../components/Nav';
import useFeedback from '../hooks/useFeedback';
import Footer from '../components/Footer';
import swal from 'sweetalert';
import { Flip, Fade } from "react-awesome-reveal";
const { createFeedback } = useFeedback();
const profile = () => {
    {/* POST FEEDBACK */ }
    const handelFeedback = (event) => {
        event.preventDefault();
        const feedback = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
            author: 1
        }
        createFeedback(feedback);
        swal("Success", "Thank You For Your Feedback!!", "success");
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.message.value = '';
    }
    {/* END POST FEEDBACK */ }
    return (
        <>
            {/* PROFILE */}
            <section className="bg-cover bg-[url('https://images.wallpaperscraft.com/image/single/stars_glitter_patterns_128474_3000x3000.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
                <Nav />
                <div className='pt-16 sm:pt-0'></div>
                <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto lg:h-screen lg:my-0">
                    <div id="profile"
                        className="w-full mx-6 bg-white rounded-lg shadow-2xl lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none opacity-90 lg:mx-0">
                        <div className="p-4 text-center md:p-12 lg:text-left">
                            <div className="bg-[url('https://github.com/ai-survivors/world_cup_22_frontend/blob/main/assest/wrekat.jpg?raw=true')] block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                            </div>
                            <h1 className="pt-8 text-3xl font-bold lg:pt-0 ">

                                <Flip>
                                    <p>Mhmad Wrekat</p>
                                </Flip>

                            </h1>

                            <div className="w-4/5 pt-3 mx-auto border-b-2 opacity-25 border-violet-900 lg:mx-0"></div>
                            <Fade delay={1000}>
                                <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">

                                    <span class=" h-0 w-0">
                                        <span class="animate-ping absolute inline h-4 w-4 rounded-full bg-green-800 opacity-75"></span>
                                        <span class="relative rounded-full h-0 w-0 bg-green-600"></span>
                                    </span>
                                    <svg
                                        className="h-4 pr-4 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                    </svg>
                                    Web Developer</p>
                            </Fade>
                            <Fade delay={1500}>
                                <p
                                    className="flex items-center justify-center pt-2 pr-5 text-xs text-white-600 lg:text-sm lg:justify-start">
                                    <svg className="h-4 pr-6 fill-current text-violet-800" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg>Jordan - Amman
                                </p></Fade>
                            <Fade delay={2000}>
                                <p className="pt-8 text-sm">
                                    Have a Beclore Degree in Software Engineering ,
                                    and Web Development - FrontEnd and BackEnd ,
                                    I like Programming and Web Development .
                                    The Excites Me The Most About Tech is it Always Evolve Quickly and New
                                    Technologies are Always Emerging .</p>
                            </Fade>
                            <Fade delay={2500}>
                                <div className="pt-12 pb-8">
                                    <a target='_balnk' href="https://wa.me/+962788818125">
                                        <span class=" h-0 w-0">
                                            <span class="animate-ping absolute inline h-4 w-4 rounded-full bg-green-600 opacity-75"></span>
                                            <span class="relative rounded-full h-0 w-0 bg-green-600"></span>
                                        </span>
                                        <button
                                            className="px-4 py-2 font-bold text-gray-200 rounded-full cursor-alias bg-violet-800 hover:bg-violet-600">
                                            Want your own page ?
                                            Text Me
                                        </button>
                                    </a>
                                </div></Fade>
                        </div>
                    </div>
                    {/* DESKTOP PHOTO */}
                    <div className="w-full lg:w-2/5">
                        <img src="./assest/profile.jpg"
                            className="hidden rounded-none shadow-2xl lg:rounded-lg lg:block" />
                    </div>
                </div>
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
                                                className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                                                <div className="flex-auto p-5 lg:p-10">
                                                    <h4 className="mb-4 text-2xl font-semibold text-black">Suggestion, Feedback, or any Comment!!</h4>
                                                    <form id="feedbackForm" method='post' onSubmit={handelFeedback}>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                                                                for="email">Name</label><input type="text" name="name" id="name"
                                                                    class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                                    required />
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                                                                for="email">Email</label><input type="email" name="email" id="email"
                                                                    class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                                    required />
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                                                                for="message">Message</label><textarea maxlength="300" name="message" id="feedback" rows="4"
                                                                    cols="80"
                                                                    className="w-full px-3 py-3 text-sm text-gray-800 placeholder-black bg-gray-300 border-0 rounded shadow focus:outline-none"
                                                                    placeholder="" required></textarea>
                                                        </div>
                                                        <div className="mt-6 text-center">
                                                            <button id="feedbackBtn" type="submit"
                                                                className="px-6 py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center text-gray-200 uppercase rounded shadow outline-none bg-violet-800 hover:bg-violet-600 cursor-alias active:bg-yellow-400 hover:shadow-lg focus:outline-none"
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