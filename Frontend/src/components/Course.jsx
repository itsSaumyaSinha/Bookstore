import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 items-center justify-center text-center"  >
        <h1 className=" py-5 text-3xl font-semibold md:text-4xl">Our Library</h1>
        <p>“Dive into a world of knowledge.”</p>
        <Link to="/">
        <button className="mt-4 bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600 duration-300">
          Home page
        </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 cursor-pointer md:grid-cols-3">
        {
          list.map((item) => (
             <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
    </>
  )
}

export default Course;