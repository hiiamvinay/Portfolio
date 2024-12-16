import React from 'react'
import img from "../assets/gate_form.jpg";
import "./About.css"

const About = () => {
  return (
    <div className='about'>
        <div className='about-img'>
            <img src={img} id='profile_img'/>
        </div>
        <div className='about-me'>
            <h1 id='name-heading'> Hi, I am Vinay Daharwal! </h1>
            <p>I am a college student pursuing a B.Tech degree with a strong foundation 
                in programming and software development. I have hands-on experience with
                 various programming languages, including Python, C/C++, and Java, and possess
                  a deep understanding of data structures and algorithms.
                   Currently, I am expanding my skill set in full-stack development
                   , which allows me to work on both the front-end and back-end of web applications.
                    Additionally, I have gained practical experience as a Frontend Intern, where I contributed to the development of user-friendly interfaces.
                  </p>

        </div>
        

    </div>
  )
}

export default About;