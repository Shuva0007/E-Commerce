import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
//flex-wrap in 14th line is used to make the testimonial section responsive
function Testimonial() {
    const context = useContext(myContext)
    const mode = context;
    return (
        <div>
            <section className=''>
                <div className="container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-sky-950'>customers</span> are saying</h2>

                    <div className='flex flex-wrap -m-4'>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p style={{ color: mode === 'light' ? '' : 'black' }} className="leading-relaxed"> As a Bengali, I am always fond of creative handmade things.This site has helped in every aspect of finding great creative hand-made things.</p>
                                <span className="inline-block h-1 w-10 rounded bg-sky-950 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Babul Supriyo</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Singer and Politician</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/C4E03AQHT5kxRjwiKtg/profile-displayphoto-shrink_800_800/0/1663640004559?e=2147483647&v=beta&t=ilhWxBVpFoWAn9ISpWxlSlKFvZztyf9pMF6lILEOO4M" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">I have found this website useful in purchasing my favourite goods at cheaper price.</p>
                                <span className="inline-block h-1 w-10 rounded bg-sky-950 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Deepika Banerjee</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Manager</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202303/ella-sixteen_nine.png?size=1200:675" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">I bought a hand-made pot which is really attractive.If you want good products at cheaper price , this is the place for you.</p>
                                <span className="inline-block h-1 w-10 rounded bg-sky-950 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ella D Verma</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Youtuber</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Testimonial