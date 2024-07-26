import React from 'react';
import BannerImage from "/Baner.png";
import Login from './Login';

function Banner() {
  const handleLoginClick = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.showModal();
    }
  };

  return (  
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        {/* Left Side */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-9">
            <h1 className="text-7xl font-bold">
              Beyond Pages:<br />
              <div className='mt-1 text-5xl text-gray-600 font-semibold'>Where Stories Live</div>
            </h1>
            <h4 className="text-2xl text-pink-500 font-semibold">Discover Tales Worth Telling
             <div className="text-2xl text-blue-900 font-semibold">- Buy, Sell, and Revel in Stories Galore!</div></h4>
            <label className="input input-bordered flex items-center gap-2 bg-white text-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="mt-3">
            <a
              className="mt-4 btn-block btn-sm w-20 sm:px-3 sm:py-4 sm:text-sm sm:w-24 md:px-4 md:py-3 md:text-md md:w-28 lg:px-5 lg:py-1 lg:text-lg lg:w-32 dark:hover:bg-black dark:text-white border-2 border-black dark:border-white rounded-md cursor-pointer"
              onClick={handleLoginClick}
            >
              Log In
            </a>
            <Login />
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 w-full md:w-1/2">
          <img src={BannerImage} alt="Banner" className="w-full h-auto" />
        </div>
      </div>
  );
}

export default Banner;


