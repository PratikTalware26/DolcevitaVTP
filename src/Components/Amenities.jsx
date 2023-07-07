import React from 'react'
import "./Amenities.css"

import amenImgW1 from "../assets/bowls.webp"
import amenImgP1 from "../assets/bowls.png"
import amenImgW2 from "../assets/hall.webp"
import amenImgP2 from "../assets/hall.webp"
import amenImgW3 from "../assets/carousel.webp"
import amenImgP3 from "../assets/carousel.png"
import amenImgW4 from "../assets/parking-car.webp"
import amenImgP4 from "../assets/parking-car.png"
import amenImgW5 from "../assets/policeman.webp"
import amenImgP5 from "../assets/policeman.png"
import amenImgW6 from "../assets/swimming-pool.webp"
import amenImgP6 from "../assets/swimming-pool.png"
import amenImgW7 from "../assets/track-and-field.webp"
import amenImgP7 from "../assets/track-and-field.png"
import amenImgW8 from "../assets/treadmill.webp"
import amenImgP8 from "../assets/treadmill.png"



const Amenities = () => {
  return (
    <div className='p-3 amenities-cont' id='amenities'>
        <div>
            <h2 className='text-center fw-bold p-3 main-text-clr'>VTP DOLCEVITA AMENITIES</h2>
        </div>
        <div>
            <div className='amen-r1 d-flex justify-content-between p-3 text-center align-items-center'>
                <div>
                    <picture>
                        <source srcSet={amenImgW1} type='image/webp'/>
                        <source srcSet={amenImgP1} type='image/png'/>
                        <img src={amenImgW1} alt="amenImg1" />
                    </picture>
                    <p>Indoor Games</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW2} type='image/webp'/>
                        <source srcSet={amenImgP2} type='image/png'/>
                        <img src={amenImgW2} alt="amenImg2" />
                    </picture>
                    <p>Multipurpose Hall</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW3} type='image/webp'/>
                        <source srcSet={amenImgP3} type='image/png'/>
                        <img src={amenImgW3} alt="amenImg3" />
                    </picture>
                    <p>Children Park</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW4} type='image/webp'/>
                        <source srcSet={amenImgP4} type='image/png'/>
                        <img src={amenImgW4} alt="amenImg4" />
                    </picture>
                    <p>Parking</p>
                </div>
            </div>

            <div className='amen-r2 d-flex justify-content-between p-3 text-center align-items-center'>
            <div>
                    <picture>
                        <source srcSet={amenImgW5} type='image/webp'/>
                        <source srcSet={amenImgP5} type='image/png'/>
                        <img src={amenImgW5} alt="amenImg5" />
                    </picture>
                    <p>Security</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW6} type='image/webp'/>
                        <source srcSet={amenImgP6} type='image/png'/>
                        <img src={amenImgW6} alt="amenImg1" />
                    </picture>
                    <p>Swimming Pool</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW7} type='image/webp'/>
                        <source srcSet={amenImgP7} type='image/png'/>
                        <img src={amenImgW7} alt="amenImg7" />
                    </picture>
                    <p>Gym</p>
                </div>
                <div>
                    <picture>
                        <source srcSet={amenImgW8} type='image/webp'/>
                        <source srcSet={amenImgP8} type='image/png'/>
                        <img src={amenImgW8} alt="amenImg1" />
                    </picture>
                    <p>Running Track</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Amenities