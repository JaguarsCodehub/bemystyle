import React, { useContext, useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Details.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../../Data/DataProvider';
import Colors from '../../Data/Colors';
import Sizes from '../../Data/Sizes';
import DetailsThumb from '../../Data/DetailsThumb';

const Details = () => {

    const {id} = useParams();
    const value = useContext(DataContext)
    const [products, setProducts] = value.products
    const addCart = value.addCart
    const [index, setIndex] = useState(0)
    const imgDiv = useRef();
    
    
    
    const details = products.filter((product, index) => {
        return product._id === id
    })


    const handleMouseMove = e => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    return (
        <>
            <Navbar />
            {
                details.map(product => (
                    <div className="details" key={product._id}>
                        <div className="img-container" onMouseMove={handleMouseMove} 
                             style={{backgroundImage: `url(${product.images[index]})`}} ref={imgDiv} 
                             onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
                             />


                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            
                            <Colors colors={product.colors}/>
                            <Sizes sizes={product.sizes}/>
                            <p>{product.description}</p>
                            <p className="content">{product.content}</p>
                            <DetailsThumb images={product.images} setIndex={setIndex}/>
                            <Link to="/cart" onClick={() => addCart(product._id)} className="cart">Add to Cart</Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Details
