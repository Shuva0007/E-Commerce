

import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { fireDB } from '../../firebase/firebaseConfig'

function Profile() {
  //const context = useContext(myContext)
  //const {  user } = context
  const auth=getAuth();
  const user=auth.currentUser;
  
  if(user!=null){
     const email = JSON.parse(localStorage.getItem('user')).user.email
    const uid= JSON.parse(localStorage.getItem('user')).user.uid
   
  return (
   
    <Layout>
     {/*  {user.map((item, index) => {
                                        const { name, uid, email } = item
     return (*/}
    
    <div class="max-w-4xl flex items-center justify-center border-black h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

        
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


            <div class="p-4 md:p-12 text-center lg:text-left">
               
                <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  ></div>
               
           
                <h1 class="text-3xl bg-red font-bold pt-8 lg:pt-0"></h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-950 opacity-25"></div>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg class="h-5 w-5 text-sky-950"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg> <p className='px-2'>{email} </p>
                </p>
                
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg class="h-6 w-6 text-sky-950"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg> <p className='px-2'>{uid}</p>
                </p>
                <p class="pt-8 p-2 text-sm">This is your details.In case you want to update it, get in touch with us for now.(Picture upload and forgot password section to be added soon.)</p>

                <div class="pt-12 pb-8">
                 <Link to={'/contact'}>   <button onClick={'/contact'} class="bg-sky-950 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				         Get In Touch
				     </button> </Link> 
                </div>

                <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                  
                   
                    
                  
                  
                  
                </div>

               

            </div>

        </div>
        </div>
        </Layout>
  )}
  else{
    return(
      <div className="h1">
        Page Not Found 
      </div>
    )
  }
}

export default Profile