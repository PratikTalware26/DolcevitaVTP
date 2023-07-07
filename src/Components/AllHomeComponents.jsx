import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Gallary from './Gallary'
import Amenities from './Amenities'
import FloorPlans from './FloorPlans'
import Location from './Location'
import Enquiry from './Enquiry'
import Disclaimer from './Disclaimer'
import BottomButtons from './BottomButtons'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Gallary/>
        <Amenities/>
        <FloorPlans/>
        <Location/>
        <Enquiry/>
        <BottomButtons/>
    </div>
  )
}

export default AllHomeComponents