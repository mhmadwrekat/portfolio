const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API ;
import React, { useState, useEffect } from "react" ;
import Axios from 'axios';
import Profile from './profile';
//http://worldcup.sfg.io/matches
//icon.png
const index = () => {
  const [feedback , setFeedback] = useState([]);
  useEffect(() => {
    Axios.get(FEEDBACK).then(res=>{
      setFeedback(res.data)
    })
  },[]);
  return (
    <>
    <Profile/>
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
    </>
  )
}

export default index
