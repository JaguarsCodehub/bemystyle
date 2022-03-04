import React from 'react'
import Navbar from '../Navbar/Navbar'
import {MagazineContainer,
    MagazineTextWrapper,
    MagazineSmallH1,
    MagazineHeading,
    MagazineDesc1,
    MagazineDesc2,
    MagazineImage} from './MagazineElements'

const Magazine = () => {
    return (
        <div>
            <Navbar />
            <MagazineContainer>
                <MagazineTextWrapper>
                    <MagazineSmallH1>Twenty<b>21</b></MagazineSmallH1>
                    <MagazineHeading></MagazineHeading>

                    <MagazineDesc1></MagazineDesc1>
                    <MagazineDesc2></MagazineDesc2>
                </MagazineTextWrapper>
                <MagazineImage />
                
            </MagazineContainer>
            
        </div>
    )
}

export default Magazine