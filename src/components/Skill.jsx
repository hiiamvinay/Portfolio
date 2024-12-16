import React from 'react'
import "./Skill.css"
import skill from '../utils/data_skill'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <div className='skill'>
        <div className='skill-title'>
            <h1>Skills</h1>
        </div>
        <div className='skill-container'>
        {skill.map((item) => (
           <SkillCard card={item}/>
        ))}

        

        </div>


    </div>
  )
}

export default Skill;