import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Cloud-Based Trading Bot</h3>
        <p>
          Developed a beginner-friendly trading bot using Python Flask framework,
          integrated with Postman API for manual API testing and Telegram channel
          for receiving trading alerts.
        </p>
      </div>
      <div className="project">
        <h3>Real-Time Learning Algorithm Deployment</h3>
        <p>
          Designed a microservices architecture for the Cloud-Based Trading Bot
          to prevent single points of failure. Implemented learning algorithms
          like NLP and tokenization for website content and alerts.
        </p>
      </div>
      <div className="project">
        <h3>Age and Gender Prediction using CNN</h3>
        <p>
          Developed a Convolutional Neural Network (CNN) project for accurately
          predicting age and gender based on facial features. Leveraged deep
          learning techniques for image preprocessing, model training, and
          evaluation.
        </p>
      </div>
      <br></br>
    <br></br>
    <br></br>
    </section>
  )
}

export default Project
