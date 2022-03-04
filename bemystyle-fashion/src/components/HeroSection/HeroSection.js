import {React, useEffect} from 'react'
import Video1 from '../../images/video1.mp4'
import Video2 from '../../images/video4.mp4'
import './HeroSection.css';
import { gsap,TimelineLite, Power3} from 'gsap'



function HeroSection() {

    let h1 = new TimelineLite({delay: 0.3});

    useEffect(() => {
        h1.from('.contentTop', {y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2}, 'Start')
        
    }, [])


    return (
        <div className='hero-container'>
            <div className='sec1'>
                <div className="contentTop">
                    <div className="header-text">
                        Flex with BeMyStyle
                    </div>
                </div>
                
            <div className='banner'>
                <video autoPlay muted loop src={Video1} type="video/mp4" />
            </div>
            <div className="banner2">
                <video autoPlay muted loop src={Video2} type="video/mp4"/>
            </div>
            <div className="header">
                <h1>BeMyStyle</h1>
                <p>BeMyStyle is a brand which helps you to know what Fashion Sense actually is and what's your BeMyStyle Clothing !</p>
            </div>
            </div>
            
        </div>
        
   
        
    )
}

export default HeroSection
