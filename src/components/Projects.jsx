import React from 'react'
import "./Projects.css"

const Projects = () => {
    const project1 = () =>{

    }
    const project2 = () =>{

    }
  return (
    <div className='education'>
        <div className='education-title'>
            <h1>Projects </h1>
        </div>
        <section className='project1'>
            <div className='project-heading'>
                <h1> Youtube Downloader</h1>
            </div>
            <div className='project-des'>
                <p>
                The YouTube Downloader script enables users to download YouTube videos based on search parameters using the `pytube` library. It fetches video formats, allowing selection by resolution and quality. The script supports Python 3.6+, requires `pandas` and `tabulate`, and provides a straightforward interface for downloading videos.
                </p>
                <button id='project-button' onClick={project1}>Go to project</button>

            </div>
            <hr style={{marginLeft:"200px", marginRight:"80px",color:"lightgrey"}}/>
          
            
        </section>
        <section className='project1'>
            <div className='project-heading'>
                <h1> Message Encryption And Decrytpion</h1>
            </div>
            <div className='project-des'>
                <p>The "Message Encryption and Decryption" project is a Python script that utilizes a 2x2 matrix password for secure message handling. It converts input sentences into matrices, applies matrix multiplication for encryption, and reverses the process for decryption. Requires Python 3.x and the NumPy library for functionality.
               
                </p>
                <button id='project-button'>Go to project</button>

            </div>
            <hr style={{marginLeft:"200px", marginRight:"80px",color:"lightgrey"}}/>
          
            
        </section>
    </div>
  )
}

export default Projects