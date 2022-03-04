import React from 'react'
import orderImage from '../../images/order-confirm.svg';
import Navbar from '../Navbar/Navbar';
import "./Confirm.css"
const Confirm = () => {
    return (
        <>
         <div className="confirm-container">
             <Navbar />
             <div className="text-wrapper">
                    <div className="confirm-header">Your Order will be delievered by Monday</div>
                    <div className="confirm-description">Thanks for purchasing from BeMyStyle. We hope we gave you an amazing experience.</div>
            </div>
            <div className="confirm-image">
                <img src={orderImage} alt="" />    
            </div>    
         </div>   
        </>
    )
}

export default Confirm
