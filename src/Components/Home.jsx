import React, { useEffect, useState } from 'react'
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);
  return (
    <div className='home-cont'>
        <div className={`home-desc p-5 ${showBanner ? 'show' : ''}`}>
            <h1 className='display-5 fw-bold'>VTP DolceVita</h1>
            <br />
            <br />
            <br />
            <h3><FontAwesomeIcon icon={faHome} /> 2 & 3 BHK Homes Starts <strong>₹65 Lacs</strong> Onwards*</h3>
            <h3 className='my-5'><FontAwesomeIcon icon={faHome} /> 150+ Acres of Township Life #BeyondImagination</h3>
            <h3><FontAwesomeIcon icon={faHome} /> 30 Storey Glass Facade Tower</h3>
        </div>
    </div>
  )
}

export default Home