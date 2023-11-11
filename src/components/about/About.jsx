import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

function About() {
  
    return (
        <Layout>
            <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div class="relative lg:max-w-md">
                                <img src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg" alt="image"
                                    class="relative z-10 object-cover w-full rounded h-96"></img>
                                <div
                                    class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-sky-950 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                                    <p class="text-lg font-semibold md:w-72">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="absolute top-0 left-0 w-16 h-16 text-sky-950 dark:text-gray-300 opacity-10"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                            </path>
                                        </svg> Providing the best marketplace to buy your favourite products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                                <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                    About Us
                                </h1>
                            </div>
                            <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                We provide you the best marketplace to but good, creative products at a cheaper price.We do not involve any kind of middleman.We directly purchase the products and sell it which is totally controlled by our admin..We will always be happy to help you.
                            </p>
                            <Link to={'/'}> <a
                                class="px-4 py-2 text-gray-100 bg-sky-950 rounded dark:bg-sky-950 dark:hover:bg-blue-500 hover:bg-600">
                                Explore
                            </a></Link>
                  
                          {/* <ExternalLink href="https://www.linkedin.com/in/shuvajit-purkait-27810b297">    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-7 w-7 mt-[10%] fill-sky-950"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"

                                >
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg></ExternalLink> */}
                           





                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About