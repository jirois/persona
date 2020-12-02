import React from 'react';
import Typed from 'react-typed';
import Button from './Button'
import image from './image/omas_ajiri.jpg'
function Hero(){

    return (
        <article className="hero">
            
            <div className="menu-btn">
             <Button />
           </div>
            <div className="hero-content">
               <div className='hero-text'>
                <h1>welcome to my site!</h1>
                <Typed 
                className="skills-text"
               strings={["Hi there, I'm Omas Ajiri.",
                'I am a Pharmacist turned a Software Developer',
                'I have a strong knowledge in web development',
            'As well as mobile app development.']}
                typeSpeed={80}
                backSpeed={40} 
                // loop
                />
                <div className="btn-container">
                    <button className='btn aboutme-btn'>
                        About Me
                    </button>
                    <button className='btn contactme-btn'>
                        Contact Me
                    </button>
               </div>
               </div>
               <div className='hero-image'>
                    <img src={image} alt="omas ajiri" />
               </div>
            </div>
        </article>
    )
}

export default Hero;