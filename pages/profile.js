import Nav from '../components/Nav';
import useFeedback from '../hooks/useFeedback';
import Footer from '../components/Footer';
const profile = () => {
    const { createFeedback } = useFeedback();
    {/* POEST FEEDBACK */ }
    function handelFeedback(event) {
        event.preventDefault();
        const feedback = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
            author: 1
        }
        console.log('name : ', feedback.name);
        console.log('email : ', feedback.email);
        console.log('message : ', feedback.message);
        createFeedback(feedback);
    }
    return (
        <>
            {/* PROFILE */}
            <section class="bg-cover bg-[url('https://images.wallpaperscraft.com/image/single/stars_glitter_patterns_128474_3000x3000.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
                <Nav />
                <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div id="profile"
                        class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
                        <div class="p-4 md:p-12 text-center lg:text-left">
                            <div class="bg-[url('https://github.com/ai-survivors/world_cup_22_frontend/blob/main/assest/wrekat.jpg?raw=true')] block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                            </div>
                            <h1 class="text-3xl font-bold pt-8 lg:pt-0 hover:text-red-700">Mhmad Wrekat</h1>
                            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg
                                class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>Web Developer</p>
                            <p
                                class="pt-2 pr-5 text-white-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                <svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>Jordan - Amman
                            </p>
                            <p class="pt-8 text-sm">
                                Have a Beclore Degree in Software Engineering ,
                                and Web Development - FrontEnd and BackEnd ,
                                I like Programming and Web Development .
                                The Excites Me The Most About Tech is it Always Evolve Quickly and New
                                Technologies are Always Emerging .</p>
                            <div class="pt-12 pb-8">
                                <a target='_balnk' href="https://wa.me/+962788818125"><button
                                    class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                    Want your own page ?
                                    Text Me
                                </button>
                                </a>
                            </div>
                            <div class="mt-6 pr-10 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                                <a><svg
                                    class="h-6 fill-current text-blue-600" role="img" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Twitter</title>
                                    <path />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                    {/* DESKTOP PHOTO */}
                    <div class="w-full lg:w-2/5">
                        <img src="./profile.jpg"
                            class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                    </div>
                </div>
                {/* FEEDBACK FORM */}
                <section class="font-awesome antialiased text-gray-900 leading-normal tracking-wider">
                    <div class=" text-white opacity-95">
                        <div class="container mx-auto flex flex-col md:flex-row">
                            <div class="flex flex-col w-full lg:w-1/3 p-8">
                                <p class="text-3xl md:text-5xl leading-relaxed md:leading-snug font-extrabold">Leave Me a Feedback!</p>
                                <p class="text-sm md:text-base leading-snug text-gray-50 font-bold">
                                    Please provide your valuable feedback and something something ...
                                </p>
                            </div>
                            <div class="flex flex-col w-full lg:w-2/3 justify-center">
                                <div class="container w-full px-4">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full lg:w-6/12 px-4">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                                <div class="flex-auto p-5 lg:p-10">
                                                    <h4 class="text-2xl mb-4 text-black font-semibold">Suggestion, Feedback, or any Comment!!</h4>
                                                    <form id="feedbackForm" method='post' onSubmit={handelFeedback}>
                                                        <div class="relative w-full mb-3">
                                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                                for="email">Name</label><input type="text" name="name" id="name" class="border-0 px-3 py-3 rounded text-sm shadow w-full
bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                                    required />
                                                        </div>
                                                        <div class="relative w-full mb-3">
                                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                                for="email">Email</label><input type="email" name="email" id="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                                    required />
                                                        </div>
                                                        <div class="relative w-full mb-3">
                                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                                for="message">Message</label><textarea maxlength="300" name="message" id="feedback" rows="4"
                                                                    cols="80"
                                                                    class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                                    placeholder="" required></textarea>
                                                        </div>
                                                        <div class="text-center mt-6">
                                                            <button id="feedbackBtn" type="submit"
                                                                class="bg-green-700 hover:bg-green-900 text-white cursor-grab text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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