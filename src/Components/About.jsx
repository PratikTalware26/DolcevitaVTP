import React, { useState, useContext, useEffect } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import formLogo from "../assets/logo.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { ThanksContext } from '../App';
import axios from 'axios';

const About = () => {
    //form Logic
    const { setThanksState } = useContext(ThanksContext);
    const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "form_popup",
    ip: "",
    domain: "dolcevitavtp.in",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enquiryData);
    try {
        const fetchData = async () => {
          const jsonData = JSON.stringify(enquiryData);
          await axios
            .post(
              "https://www.crm.brickfolio.in/api/leads/add_raw_lead",
              jsonData,
              {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setThanksState(true);
              navigate("/thanks");
            });
        };
        fetchData();
      // console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //User ip address fetching
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get('https://dolcevitavtp.in/userIp.php');
        const ip = response.data.ip;
        // console.log(ip)
        setEnquiryData((prevData) => ({ ...prevData, ip }));
      } catch (error) {
        console.log('Error fetching IP address:', error);
      }
    };

    fetchIP();
  }, []);

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source")) {
      setEnquiryData((prevData) => ({
        ...prevData,
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_term: searchParams.get("utm_term"),
        utm_content: searchParams.get("utm_content"),
      }));
    }
  }, [location]);

  const [formPopup, setFormpopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (formPopup) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setTransitionClass("popupEffect");
      }, 10); // Delay adding the class
    } else {
      setTransitionClass(""); // Remove the class immediately
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formPopup]);

  const closePopup = (e) => {
    e.stopPropagation()
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };
  //************** */

    //Scroll transition
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const headings = aboutSection.querySelectorAll('h1, h2, p');
    const aboutImg = aboutSection.querySelector('.about-img');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionOffsetTop = aboutSection.offsetTop;
      const delay = 200; // Delay between each heading in milliseconds

      headings.forEach((heading, index) => {
        const delayTime = index * delay;

        if (scrollPosition > sectionOffsetTop && !heading.classList.contains('show')) {
          setTimeout(() => {
            heading.classList.add('show');
          }, delayTime);
        }
      });

      if (scrollPosition > sectionOffsetTop && !aboutImg.classList.contains('show')) {
        aboutImg.classList.add('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='about-cont d-flex p-3 px-5' id='about'>
        <div className='w-100'>
          <h1 className='main-text-clr fw-bold'>VTP DOLCEVITA</h1>
          <h2 className='main-text-clr2 my-3 display-5 fw-bold'>We Are Pune's No:1, Real Estate Brand Consistently For Past 5 Years.</h2>
          <p>
            VTP Realty is one of the leading real estate developers in Pune delivering unmatched quality, attention to detail and transparency in our processes and operations. VTP Realty is a benchmark of trust, commitment and care. Our pioneering approach, rich history and focus on caring about you during and beyond the purchase of a new home makes us not only a partner in your dream home but also a dependable friend helping you every step of the way.
          </p>
          <div className='d-flex g-30'>
            <div>
              <h5><FontAwesomeIcon icon={faCheckCircle} className='main-text-clr' />  Township</h5>
              <h5><FontAwesomeIcon icon={faCheckCircle} className='main-text-clr mt-3' />  Residential</h5>
            </div>
            <div>
              <h5><FontAwesomeIcon icon={faCheckCircle} className='main-text-clr' /> Commercial</h5>
            </div>
          </div>
        </div>
        <div className='about-img-cont p-3 w-100'>
          <div className='about-img'></div>
        </div>
      </div>

      <div className='main-back-clr2 d-flex justify-content-around align-items-center p-4'>
        <h2 className='text-light fw-bold more-detail-head'>For More Details Contact Our Property Expert</h2>
        <div><button className='btn main-back-clr text-light site-btn' onClick={()=>setFormpopup(!formPopup)}>Schedule a site visit</button></div>
      </div>
      {formPopup && (
          <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
            <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
              <div className="popup-img-cont">
                <img src={formLogo} alt="formLogo" />
              </div>
              <div className="popup-inp-cont">
                <h2>Register for Site Visit</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid name (only letters and spaces allowed)."
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    minLength="10"
                    maxLength="12"
                    pattern="[0-9]+"
                    title="Please enter a valid number (only numbers allowed)."
                    onChange={handleChange}
                    required
                  />
                  <div className="popup-submit-btn-cont">
                    <button type="submit" className="submit-btn">
                      Schedule Site Visit
                    </button>
                  </div>
                </form>
                <button className="close-btn" onClick={closePopup}>
                  X
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default About;
