import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from '../../components/Navbar/Navbar';


const About = () => {
  return (
    <section className='about'>
       <Navbar />
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About SwapIt</h2>
            <p className='fs-17'>It is the application build to provide the Book Exchange platform, Which can be use to Swap, exchange or rent your book.</p>
            <p className='fs-17'>Or this can be use to get the book you would like to read.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
