import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Profile from './profile';
const feedback = (props) => {



let feedbacks = [];
let weathers = [];
let counter = 0;    

    if (typeof window !== 'undefined') {
    if(localStorage.getItem('feedback') === null)
{
  localStorage.setItem('feedback' , JSON.stringify([])) ;
}
if(localStorage.getItem('weather') === null)
{
  localStorage.setItem('weather' , JSON.stringify([])) ;
}
feedbacks = JSON.parse(localStorage.getItem('feedback')) ;
weathers = JSON.parse(localStorage.getItem('weather')) ;
    }
  

    return (
       <>
    <section translate='no'
        className="bg-cover bg-[url('https://wallpaperaccess.com/full/2185980.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
            <Nav />
            <section className='grid grid-cols-1 px-10 py-0 sm:py-32 sm:px-0 sm:grid-cols-4'>
                {
                   (feedbacks.length > 0) ? 
                   feedbacks.map((item) => {
                        return (
                            <>
                                <div class="flex flex-col items-center justify-center pt-3 pb-3  opacity-95">
                                    <div class="max-w-md px-5 py-5 mx-auto bg-white shadow-xl  rounded-2xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img class="w-10 text-black rounded-full"
                                                                src='./assest/user.png' />
                                                        </div>
                                                        <p class="text-xs text-gray-500 ">{item.name}</p>

                                                        <p class="text-xs text-left text-gray-500">{item.email}</p>
                                                        <p class="block p-1 text-sm font-bold sm:p-1 sm:text-base">
                                                            {item.message}                            </p>
                                                        <p class="mx-1 text-xs text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px">{item.timestamp.split('T', 1)}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    :<>
                    <br></br>
                    <h1 className='text-xl text-center text-white lg:block lg:text-4xl'>
                        FeedBacks Not Available Right now!!!</h1>
                        <h1 className='block text-xl text-center text-white lg:text-4xl'>
                        please Try Later!!!</h1>
                        <br></br>
                    </>
                }
            </section>
            {/* WEATHER DATA MOBILE VIEW */}
            <section className='grid grid-cols-2 py-10 pt-5 sm:pt-5 sm:px-0 sm:hidden'>
                {
                    weathers && weathers.map((item) => {
                        if (counter < 2) {
                            counter++;
                            return (<>
                                <div class="flex flex-col items-center justify-center pt-3 pb-3 opacity-90">
                                    <div class="max-w-md px-6 py-2 mx-auto bg-white shadow-xl sm:px-10 sm:py-5 rounded-2xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img className='w-8 h-8 sm:w-12 sm:h-12' src='./assest/weather.png' />
                                                        </div>
                                                        <p class="text-xs font-bold text-gray-500 ">Amman</p>
                                                        <p class="text-xs font-bold text-left text-gray-500">{item.date}</p>
                                                        <p class="text-xs font-extrabold text-left text-gray-500">
                                                            {item.description}                  </p>
                                                        <p class="mx-1 text-xs font-bold text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px">
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
                    weathers && weathers.map((item) => {
                        if (counter < 7) {
                            counter++;
                            return (<>
                                <div class="flex flex-col items-center justify-center pt-3 pb-3 pr-2 opacity-90">
                                    <div class="max-w-md px-6 py-2 mx-auto bg-white shadow-xl sm:px-10 sm:py-5 rounded-2xl">
                                        <div class="">
                                            <div class="flex">
                                                <ul class="flex items-center justify-center space-x-2">
                                                    <li class="flex flex-col items-center space-y-2">
                                                        <div className='items-center justify-center'>
                                                            <img className='w-8 h-8 sm:w-12 sm:h-12 hover:scale-110 animate-pulse' src='./assest/weather.png' />
                                                        </div>
                                                        <p class="text-xs font-bold text-gray-500  hover:scale-110">Amman</p>
                                                        <p class="text-xs font-bold text-left text-gray-500 hover:scale-110">{item.date}</p>
                                                        <p class="text-xs font-extrabold text-left text-gray-500 hover:scale-110 ">
                                                            {item.description}                  </p>
                                                        <p class="mx-1 text-xs font-bold text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px hover:scale-110">
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
       </>
    )
}
export default feedback
/*

*/