import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
       <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Shivam Rai</span> <br/>Software Developer</span>
          <p className='introPara'>Hello, I'm Shivam Rai, a Java developer with 2 years of experience in software development. During my career, I've focused on building robust, scalable, and high-performing applications using Java Spring Boot and other cutting-edge technologies.</p>
          <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
       </div>
       <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro