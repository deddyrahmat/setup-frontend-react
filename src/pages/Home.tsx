import axios from 'axios';
import React, { useEffect } from 'react'

function Home() {
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_API}/users`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]);
  return (
    <div>Welcome</div>
  )
}

export default Home