import {React, useState} from 'react'
import Navbar from "../components/Navbar/Navbar";
import HeroSection from '../components/HeroSection/HeroSection';
import Shades from '../components/ShadesPage/Shades';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/ShadesPage/Data';
import FiveShades from '../components/FiveShades/FiveShades';
import Clothing from '../components/Clothing/Clothing';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

    }
    return (
        <>
                <Navbar toggle={toggle}/>
                <HeroSection />
                <FiveShades />
                <Shades {...homeObjOne}/>
                <Shades {...homeObjTwo}/>
                <Clothing />
                <Services />
                <Shades {...homeObjThree}/>
                <Shades {...homeObjFour}/>
                <Shades {...homeObjFive}/>
                <Footer />
        </>
    )
}
export default Home
