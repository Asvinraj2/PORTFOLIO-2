import React from 'react'
import './Achivement.css'

const Achivement = () => {
  return (
    <section id="achievements" className="content-section">
      <h2>Achievements</h2>
      <ol>
        <li>
          <h3>Pioneered Research in Cloud-Based Trading Bots</h3>
          <p>
            Spearheaded research initiatives in cloud-based trading bots, introducing innovative strategies and algorithms to the field. These contributions have advanced the understanding and application of automated trading systems in cloud environments.
          </p>
        </li>
        <li>
          <h3>Published Papers on Learning Algorithms and Cloud Deployment</h3>
          <p>
            Authored and published papers on the implementation of learning algorithms for real-time deployment projects. Additionally, contributed to papers on integrated approaches for virtual cloud environments, demonstrating expertise in cutting-edge technologies and solutions.
          </p>
        </li>
        <li>
          <h3>Published Book Chapter</h3>
          <p>
            Contributed to the book titled "Applications of Generative Artificial Intelligence and Data Science" as an editor. The chapter, titled{' '}
            <a href="https://www.ijaresm.com/integrated-approach-for-cloud-virtual-environment" target="_blank" rel="noopener noreferrer">
              Integrated Approach for Cloud Virtual Environment
            </a>
            , showcases insights into cloud virtualization and is a valuable resource for researchers and practitioners in the field.
          </p>
        </li>
      </ol>
      <br></br>
    </section>
  )
}

export default Achivement
