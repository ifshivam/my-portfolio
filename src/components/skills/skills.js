import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I'm skilled Java developer  who is currently woking on react in order to be fullstack developer </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a sample text it can be changed during final deployment time</p>
                 </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a sample text it can be changed during final deployment time</p>
                 </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a sample text it can be changed during final deployment time</p>
                 </div>
            </div>
        </div>    
    </section>
  )
}

export default Skills