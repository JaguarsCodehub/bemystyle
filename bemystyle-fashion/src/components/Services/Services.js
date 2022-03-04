import React from 'react'
// import Icon1 from 'images/svg-1.svg'
// import Icon2 from 'images/svg-1.svg'
// import Icon3 from 'images/svg-1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>BeMyStyle Products</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/cotton.png"}/>
                    <ServicesH2>CottonWorld</ServicesH2>
                    <ServicesP>We provide best quality product in the fashion industry</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/beauty-1.png"}/>
                    <ServicesH2>MatteWorld</ServicesH2>
                    <ServicesP>You can access our course and faculties anywhere in the world by our program.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/linen.png"}/>
                    <ServicesH2>Linen Clothing</ServicesH2>
                    <ServicesP>Unlock our special membership service for 1 to 1 virtual teaching.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
