import React, { useEffect, useRef, useState } from 'react';
import './Location.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import locationImgW from "../assets/vtpLocation.webp"

const Location = () => {
  const locationRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(false);

  const handleImageClick = () => {
    setEnlargedImage(true);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const highlights = entry.target.querySelectorAll('.location-desc p');
          highlights.forEach((highlight, index) => {
            highlight.style.transitionDelay = `${0.2 * (index + 1)}s`;
            highlight.classList.add('visible');
          });
          entry.target.querySelector('.location-img-cont').classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(locationRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="location">
      <h2 className="text-center main-text-clr fw-bold">LOCATION BENEFITS</h2>
      <div className="d-flex location-cont p-3" id="location" ref={locationRef}>
        <div className={`location-img-cont ${enlargedImage ? 'enlarged' : ''}`} onClick={handleImageClick}>
          <FontAwesomeIcon icon={faSearchPlus} className="zoom-icon-btn" />
        </div>

        <div className="p-3 location-desc">
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Tallest tower of Kharadi
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Highest quality specifications
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> American standard fittings
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Rainshower and hand shower in washrooms along with glass partition
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> 5 level parking and podium level amenities
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Luster paint
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Marble 6*4 tiles
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> False ceiling in balconies
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Maximum Livable Area
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> Inbuilt Smart Home Features
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> 5 min from Euro -School and Podar international
          </p>
        </div>

        {enlargedImage && (
          <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
            <div className="enlarged-image-container">
              <img src={locationImgW} alt="" className="enlarged-image" />
              <div className="close-button" onClick={closeEnlargedImage}>
                &#x2715;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
