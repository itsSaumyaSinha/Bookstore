import React, {useEffect, useState} from 'react';
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book"); 
        console.log(res.data)
        setBook(res.data)
      }catch(error)
      {console.log(error)}
    };
    getBook();
  },[])
  return (

    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 items-center justify-center text-center"  >
        <h1 className=" py-5 text-3xl font-semibold md:text-4xl">Our Library</h1>
        <p>“Dive into a world of knowledge.”</p>
        <Link to="/">
        <button className="mt-4 bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600 duration-300">
          Back
        </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 cursor-pointer md:grid-cols-3">
        {
          book.map((item) => (
             <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
    </>
  )
}

export default Course;