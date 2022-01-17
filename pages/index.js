import Profile from './profile';
import React, { useEffect } from "react";
import ReactGo from 'react-ga';
const ReactGoogle = process.env.NEXT_PUBLIC_REACT_GOOGLE;

const index = () => {
  useEffect(() => {
    ReactGo.initialize(ReactGoogle);
    ReactGo.pageview('/');
  },[])
  return (
    <>
<Profile/>
    </>
  )
}
export default index