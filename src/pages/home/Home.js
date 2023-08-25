import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import { viewsData } from '../../data';
import Footer from '../../components/footer/Footer';

const textLines = [
  "E-Banking, Instant Transactions!",
  "Shop the Latest, From Comfort to Luxury!",
  "Delicious Eats, Just a Tap Away!",
  "Need It Fast, We Deliver Express!",
  "Share or Order Ride, Your Journey Your Way!",
  "Trade with Ease, Buy or Sell On-the-Go!"
];

const Home = () => {

  const [selectedButton, setSelectedButton] = useState('Customer');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isPaused) return;

      if (isTyping) {
        if (charIndex < textLines[textIndex].length) {
          setDisplayText((prevText) => prevText + textLines[textIndex][charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsTyping(false);
          }, 3000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
        }
      }
    }, 50);  // Adjust this for the desired typing speed

    return () => clearInterval(typingInterval);
  }, [isTyping, isPaused, charIndex, textIndex]);

  const [line1, line2] = displayText.split(', ');
  return (
    <>
      <Navbar />
      <div className="homepage-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/images/bg-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content">
          <h1 className="heading">{line1}</h1>
          <h3 className="subheading">{line2}</h3>
        </div>
      </div>
    </div>

      <div className="home-btns text-center mt-5 mb-5">
        <button className="btn dark-btn-bg-color home-btn m-3">Read About Us</button>
        <button className="btn soft-btn-bg-color home-btn m-3">Downlaod App</button>
      </div>

      <div className="views-btns-container container mb-5">
      <div className="views btns">
        <button
          className={`btn ${selectedButton === 'Customer' ? 'selected' : ''} gray-text-color`}
          onClick={() => handleButtonClick('Customer')}
        >
          Customer
        </button>
        <button
          className={`btn ${selectedButton === 'Driver' ? 'selected' : ''} gray-text-color`}
          onClick={() => handleButtonClick('Driver')}
        >
          Driver
        </button>
        <button
          className={`btn ${selectedButton === 'Merchant' ? 'selected' : ''} gray-text-color`}
          onClick={() => handleButtonClick('Merchant')}
        >
          Merchant
        </button>
        <button
          className={`btn ${selectedButton === 'Enterprise' ? 'selected' : ''} gray-text-color`}
          onClick={() => handleButtonClick('Enterprise')}
        >
          Enterprise
        </button>
      </div>
      </div>

      

      <div className="container">
      <hr />
      <div className="row">
        {
          viewsData.map((data) => (
            <>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1>{data.mainHeading}</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {
                data.items?.map((item)=> (
                  <div className="d-flex align-items-center">
                    <div className="item-img me-5">
                      <img src={item.itemImg} alt="" />
                    </div>
                    <div className="item-text mt-3 mb-3">
                      <h3>{item.itemHeading}</h3>
                      <p>{item.itemDesc}</p>
                      
                    </div>
                  </div>
                ))
              }
            </div>
            <hr className = "gray-text-color mt-4 mb-4"/>
            </>
          ))
        }
      </div>
      </div>
      <Footer/>
    </>

  )
}

export default Home