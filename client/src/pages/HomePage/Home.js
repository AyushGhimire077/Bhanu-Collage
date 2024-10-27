import React, { useState, useEffect } from 'react';
import './Home.css';
import { pro1, pro2, pro3, pro4, pro5 } from '../../assets/assets';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
  const images = [pro1, pro2, pro3, pro4, pro5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentIndex === images.length) {
     
      setIsTransitioning(false);
      setCurrentIndex(1); 
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 1);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (


    <div className='home'>
          <div className="box">
            <div className="info">
              <h1 className='font-semibold text-5xl text-start'>A Place For Your Success</h1>
              <br />
              <p>
                At Bhanu College, we empower your success through quality education. <br /> Established in <b>2005</b>, our secondary school is affiliated with the National <br /> Examination Board (NEB) and offers comprehensive plus two (10+2) programs. <br /> We provide specialized courses in <b>Science</b> and <b>Commerce</b>, including <b>Computer Science</b>, <br /> ensuring every student has the opportunity to excel. Join us in shaping a brighter future!
              </p>
            </div>
          </div>
       
       <hr className='mt-12'/>

      <div className="slider">
        <h1 className='text-4xl p-3 '>Our Some Collections</h1>
        <button onClick={prevSlide} className="prev"><i className="fa fa-arrow-left"></i></button>
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >

          {[...images, images[0]].map((image, index) => (
            <img src={image} alt={`Slide ${index}`} className="slide" key={index} />
          ))}
        </div>
        <button onClick={nextSlide} className="next"><i class="fa fa-arrow-right"></i></button>
      </div>

      <FAQ />
    </div>
  );
}

export default Home;
