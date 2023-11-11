import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
  <Link to={'/'}>  <div className='font-bold'> No Page Found!Click Here to Go to Home</div></Link>
  )
}

export default NoPage