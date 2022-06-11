import Footer from "../components/page/Footer";
const feedback = () => {
  let feedbacks = [];
  let weathers = [];
  let counter = 0;
  if (typeof window !== "undefined") {
    if (localStorage.getItem("feedback") === null) {
      localStorage.setItem("feedback", JSON.stringify([]));
    }
    if (localStorage.getItem("weather") === null) {
      localStorage.setItem("weather", JSON.stringify([]));
    }
    feedbacks = JSON.parse(localStorage.getItem("feedback"));
    weathers = JSON.parse(localStorage.getItem("weather"));
  }
  return (
    <>
      <section className="bg-cover bg-[url('https://wallpaperaccess.com/full/2185980.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider">
        <section className="grid grid-cols-1 px-10 py-0 sm:py-32 sm:px-0 sm:grid-cols-4">
          {feedbacks.length > 0 ? (
            feedbacks.map((item) => {
              return (
                <>
                  <div className="flex flex-col items-center justify-center pt-3 pb-3  opacity-95">
                    <div className="max-w-md px-5 py-5 mx-auto bg-white shadow-xl  rounded-2xl">
                      <div className="">
                        <div className="flex">
                          <ul className="flex items-center justify-center space-x-2">
                            <li className="flex flex-col items-center space-y-2">
                              <div className="items-center justify-center">
                                <img
                                  className="w-10 text-black rounded-full"
                                  src="./assest/user.png"
                                />
                              </div>
                              <p className="text-xs text-gray-500 ">
                                {item.name}
                              </p>
                              <p className="text-xs text-left text-gray-500">
                                {item.email}
                              </p>
                              <p className="block p-1 text-sm font-bold sm:p-1 sm:text-base">
                                {item.message}{" "}
                              </p>
                              <p className="mx-1 text-xs text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px">
                                {item.timestamp.split("T", 1)}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <br></br>
              <h1 className="text-xl text-center text-white lg:block lg:text-4xl">
                FeedBacks Not Available Right now!!!
              </h1>
              <h1 className="block text-xl text-center text-white lg:text-4xl">
                please Try Later!!!
              </h1>
              <br></br>
            </>
          )}
        </section>
        {/* WEATHER DATA MOBILE VIEW */}
        <section className="grid grid-cols-2 py-10 pt-5 sm:pt-5 sm:px-0 sm:hidden">
          {weathers &&
            weathers.map((item) => {
              counter++;
              return (
                <>
                  <div className="flex flex-col items-center justify-center pt-3 pb-3 opacity-90">
                    <div className="max-w-md px-6 py-2 mx-auto bg-white shadow-xl sm:px-10 sm:py-5 rounded-2xl">
                      <div className="">
                        <div className="flex">
                          <ul className="flex items-center justify-center space-x-2">
                            <li className="flex flex-col items-center space-y-2">
                              <div className="items-center justify-center">
                                <img
                                  className="w-8 h-8 sm:w-12 sm:h-12"
                                  src="./assest/weather.png"
                                />
                              </div>
                              <p className="text-xs font-bold text-gray-500 ">
                                Amman
                              </p>
                              <p className="text-xs font-bold text-left text-gray-500">
                                {item.date}
                              </p>
                              <p className="text-xs font-extrabold text-left text-gray-500">
                                {item.description}{" "}
                              </p>
                              <p className="mx-1 text-xs font-bold text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px">
                                {item.max_temp} °C
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </section>
        {/* END WEATHER DATA MOBILE */}
        {/* WEATHER DATA DESKTOP VIEW */}
        <section className="hidden grid-cols-5 py-10 pt-5 sm:pt-5 sm:px-0 sm:grid">
          {weathers &&
            weathers.map((item) => {
              if (counter < 7) {
                counter++;
                return (
                  <>
                    <div className="flex flex-col items-center justify-center pt-3 pb-3 pr-2 opacity-90">
                      <div className="max-w-md px-6 py-2 mx-auto bg-white shadow-xl sm:px-10 sm:py-5 rounded-2xl">
                        <div className="">
                          <div className="flex">
                            <ul className="flex items-center justify-center space-x-2">
                              <li className="flex flex-col items-center space-y-2">
                                <div className="items-center justify-center">
                                  <img
                                    className="w-8 h-8 sm:w-12 sm:h-12 hover:scale-110 animate-pulse"
                                    src="./assest/weather.png"
                                  />
                                </div>
                                <p className="text-xs font-bold text-gray-500  hover:scale-110">
                                  Amman
                                </p>
                                <p className="text-xs font-bold text-left text-gray-500 hover:scale-110">
                                  {item.date}
                                </p>
                                <p className="text-xs font-extrabold text-left text-gray-500 hover:scale-110 ">
                                  {item.description}{" "}
                                </p>
                                <p className="mx-1 text-xs font-bold text-right text-gray-500 sm:text-center mdi mdi-plus mdi-18px hover:scale-110">
                                  {item.max_temp} °C
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
        </section>
        {/* END WEATHER DATA DESKTOP */}
        <Footer />
      </section>
    </>
  );
};
export default feedback;
