import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import myContext from '../../context/data/myContext';

function HeroSection() {
  const context = useContext(myContext)
    const mode = context;
  return (
<section class="bg-gray-900 text-white "style={{ color: mode === 'dark' ? 'black' : ''}}>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"style={{ color: mode === 'dark' ? 'black' : '' }}
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Explore the Creations.

        <span class="sm:block">  </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Join Us and find the best creative products available in the market.
      </p>

     <div class="mt-8 flex flex-wrap justify-center gap-4">
      <Link to={'/allproducts'}> <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a></Link>

     <Link to={'/about'}>   <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a></Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default HeroSection