import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <div className='education'>
        <div className='education-title'>
            <h1>Education </h1>
        </div>
        <section className='education-1'>
            <div className='education-1-img-class'>
            <img src= "data:image/png;base64,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"
             id='education-1-img'/>
            </div>
            <div className='about-inst'>
                <h1 id='jk'>JK Lakshmipat University</h1>
                <h2 className='h'>B.Tech | Computer Science Engineering </h2>
                <h2 className='h'> ( 2021 - 2025) </h2>
                <h2 className='h'>8.1 CGPA </h2>

            </div>
            
        </section>
    </div>
  )
}

export default Education