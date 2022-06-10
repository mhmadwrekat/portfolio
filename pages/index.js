import Profile from "./profile";
const WEATHER = process.env.NEXT_PUBLIC_BACKEND_WEATHER_API;

export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=59"
  );
  // Get Weather API
  const weather_res = await fetch(WEATHER);
  const weather = await weather_res.json();
  const final_weather = weather.cache.data;
  return {
    props: {
      weather: final_weather,
    },
  };
}
const index = (props) => {
  return (
    <>
      {/* {console.log("SSR --> ", props.weather)} */}
      <Profile weather={props.weather} />
    </>
  );
};
export default index;
