import React, { useState, useEffect } from "react" ;
import Nav from '../components/Nav';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API ;
import Axios from 'axios';
const profile = () => {
    const [feedback , setFeedback] = useState([]);
    useEffect(() => {
      Axios.get(FEEDBACK).then(res=>{
        setFeedback(res.data)
      })
    },[]);

    //
//https://i.pinimg.com/originals/fc/12/af/fc12af4fdda0c0ec5cf23ae293d11a7d.png
    return (
        <>
<Nav/>    
{/* PROFILE */}
<body class="bg-cover bg-[url('https://i.pinimg.com/originals/ce/dc/05/cedc05586a5e91a87c8ab5ac42c83b7d.png')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
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
                class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
        </div>
    </div>
{/* FEEDBACK FORM */}
    <section class="font-awesome antialiased text-gray-900 leading-normal tracking-wider">
	<div class=" text-white opacity-75">
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
									<form id="feedbackForm" action="" method="">

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
                        for="message">Message</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="" required></textarea>
											</div>
											<div class="text-center mt-6">
												<button id="feedbackBtn"
                        class="bg-green-700 hover:bg-green-900 text-white text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
{/* FOOTER */}
<section class='opacity-75 bg-white' id='profilefoot'>
        <div>
            <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
                <div class="flex flex-col items-center justify-center">
                    <p class='text-2xl font-serif font-bold'>Social Media</p>
                    <div class="flex items-center gap-x-8 mt-6">

                        <a class="link" data-tippy-content="Github" href="https://github.com/mhmadwrekat">
                            <button aria-label="pinterest" class="hover:scale-125 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="hover:scale-110  fill-current" width="27" height="27" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </button>
                        </a>
                        <a class="link" data-tippy-content="LinkedIn" href="https://linkedin.com/in/mohammad-alwrekat">
                            <button className="rounded-full hover:scale-125">
                                <svg width="27" height="27" id="Layer_2" data-name="Layer 2" class="h-6 bg-white fill-current text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>LinkedIn</title>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </button>
                        </a>

                        <a href="https://wa.me/+962788818125" class="pt-0.5" data-tippy-content="WhatsApp">
                            <button className="rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="29" height="29">
                                <title>WhatsApp</title>
                                    <path fill="#fff"
                                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z" />
                                    <path fill="#fff"
                                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z" />
                                    <path fill="#cfd8dc"
                                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z" />
                                    <path fill="#40c351"
                                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z" />
                                    <path fill="#fff" fill-rule="evenodd"
                                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        <a className="pb-0.5 rounded-full hover:scale-125" href="https://www.facebook.com/profile.php?id=100010107875359"

data-tippy-content="Facebook"><svg width="23" height="23" class="fill-current text-blue-600" role="img"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Facebook</title>
                                <path
                                    d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                            </svg></a>


                        <a className="rounded-full hover:scale-125" href="https://www.instagram.com/mhmadwrekatt?r=nametag"
                            data-tippy-content="Instagram">
                                <svg class="h-6 fill-current text-pink-600" role="img"
                                width="27" height="27"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path
                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg></a>
                        <a className="rounded-full hover:scale-125" href="https://twitter.com/wrekatmhmad" data-tippy-content="Twitter">
                            <svg
                                class="fill-current text-blue-400" role="img" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" width="27" height="27">
 <title>Twitter</title>
                                <path
                                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                            </svg></a>
                    </div>
                    <div class="flex items-center mt-6">
                        <p class="font-serif text-xs hover:scale-105 leading-4">2022 <span class="font-serif">MHMAD
                                WREKAT</span></p>
                        <div class="border-l border-gray-800 pl-2 ml-2">
                            <p class="font-serif text-xs hover:scale-105 leading-4">Inc. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
</body>
        </>
    )
}

export default profile
/*
<div className="pt-96"></div>
{
  feedback.map((item) => {
    return (
      <>
      <h1>Name : {item.name}</h1>
      <h1>Email : {item.email}</h1>
      <h1>Message : {item.message}</h1>
      <hr></hr>
      </>
    )
  })
}
*/