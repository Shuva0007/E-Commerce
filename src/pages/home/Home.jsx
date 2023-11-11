import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
//cart in ---- is the cart used in Store.jsx
//react toastify is used to show alerts
function Home() {
  const dispatch = useDispatch();
  //Error:react-dom.development.js:16227 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. 
  //Didn't use parenthesis after useDispatch method in line 12
  const cartItem = useSelector((state) => state.cart)
  //console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"))
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"))
  }
  return (
    //Importing heroSection in Home Page.
    /* <div className="flex gap-5 justify-center">
         <button className='bg-gray-300 p-5' onClick={()=>addCart()}>
           add
         </button>
         <button className="bg-gray-300 p-5"  onClick={()=>deleteCart()}>
           delete
         </button>
        </div>*/
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </Layout>
  )
}

export default Home