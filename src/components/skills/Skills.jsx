import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="container">
      <section id="education">
        <h2>Educational Qualifications</h2>
        <ul>
          <li className='clg'>
            <h3>Bachelor of Technology</h3>
            <p>J.N.N Institute of Engineering</p>
            <p>CGPA: 8.25</p>
            <p>Year: 2020 - 2024</p>
          </li>
          <li className='sch'>
            <h3>Higher Secondary Schooling</h3>
            <p>National Lotus Matriculation Hr. Sec. School</p>
            <p>Percentage: 60%</p>
            <p>Year: 2018 - 2020</p>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Technical Skills and Tools</h2>
        <ul>
          <li>Amazon EC2, Amazon S3</li>
          <li>AWS IAM (Identity and Access Management)</li>
          <li>SQL</li>
          <li>AWS CloudWatch, Python Scripting</li>
          <li>Docker</li>
          <li>Amazon RDS (Relational Database Service)</li>
          <li>Terraform</li>
          <li>Amazon VPC (Virtual Private Cloud)</li>
          <li>VIM (Text editor)</li>
        </ul>
      </section>

      <section id="soft-skills" className="content-section">
        <h2>Soft Skills</h2>
        <p>
          With a natural propensity for adaptability, I thrive in dynamic work
          environments, seamlessly integrating new tasks and challenges with a
          proactive and flexible approach. My strong interpersonal and
          communication skills foster effective collaboration, enabling me to
          interact seamlessly with colleagues and stakeholders, facilitating
          smooth project workflows and achieving shared objectives.
        </p>
      </section>
    </div>
  );
};

export default Skills;
