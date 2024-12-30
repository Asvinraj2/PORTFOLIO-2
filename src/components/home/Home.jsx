import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css';
import './Home.css';
import karthi from './karthik.m.jpg';

const Home = () => {

    useEffect(() => {
        const typed = new Typed("#text", {
          strings: ["AI Engineer", "Cloud Engineer", "AWS- Expert"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <section className='home'>
        <div className='home-card'>
          <div className='home-content'>
            <div className='profile-photo'>
              <img src={karthi} alt='Profile' />
            </div>
            <h3 className='greeting'>Hello, it's Me</h3>
            <h1 className='name'>KARTHIK</h1>
            <h3 className='role'>And I'm a <span id="text"></span></h3>
            <p className='description'>
            I hold a Bachelor of Technology degree with a CGPA of 8.25.
             I specialize in cloud technologies like Amazon EC2, S3, and RDS, and I’m skilled in tools such as Terraform,
              Docker, and VIM. With expertise in AWS IAM, CloudWatch, and Python scripting and done a projects on "Cloud-based Trading Bot" and "Real-Time Learning Algorithm Deployement" and "Age and Gender Prediction using CNN"  I efficiently manage and deploy scalable infrastructure.
            </p>
            <div className='social-links'>
              <a href="https://www.instagram.com/karthi.co/" rel="noopener noreferrer" className="social-icon">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="#" target='_blank' rel="noopener noreferrer" className="social-icon">
                <i className='bx bxl-youtube'></i>
              </a>
              <a href="#" target='_blank' rel="noopener noreferrer" className="social-icon">
                <i className='bx bxl-twitter'></i>
              </a>
              <a href="#" target='_blank' rel="noopener noreferrer" className="social-icon">
                <i className='bx bxl-whatsapp'></i>
              </a>
              <a href="https://www.linkedin.com/in/karthik-m-94310a258/" rel="noopener noreferrer" className="social-icon">
                <i className='bx bxl-linkedin'></i>
              </a>
            </div>
            <div className='buttons'>
              <a href='#about' className="btn-box">More about Me</a>
              <a href="/M.KARTHIK.pdf" className="btn-box download-btn" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
