import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import SignUp from './pages/registration/SignUp';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import AllProducts from './components/allproducts/AllProducts';
import ReturnPolicy from './components/returnpolicy/ReturnPolicy';
import Profile from './components/profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){
  return (
    <MyState>
    <Router>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<ProtectedRoutes>
              <Order />
            </ProtectedRoutes>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<ProtectedRoutesForAdmin>
          <Dashboard />
          </ProtectedRoutesForAdmin>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>}/>
        <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/returnpolicy" element={<ReturnPolicy/>}/>
        <Route path="/profile" element={<Profile/>}/>
       
              

        <Route path="/*" element={<NoPage/>}/>

      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

//user
 export const ProtectedRoutes= ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'shuvapurkait13@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}