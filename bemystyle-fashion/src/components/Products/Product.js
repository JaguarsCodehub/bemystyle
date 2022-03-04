import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Products.css";
import mod1 from '../../images/mod1.jpeg'
import {DataContext} from '../../Data/DataProvider'

const Product = () => {
    const value = useContext(DataContext)
    const [products, setProducts] = value.products
    const addCart = value.addCart
    
    
    return (
        <div>
            <Navbar />
            <div className="filters-container">
                    <h1>Filters</h1>
                    <select className="category-select" aria-label="Default select example">
                        <option className="categories" selected>Categories</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Linen">Linen</option>
                        <option value="Wool">Wool</option>
                        <option value="Embrodiery">Embrodiery</option>
                    </select>
                    <select className="color-select" aria-label="Default select example">
                        <option selected>Color</option>
                        <option value="Cotton">Red</option>
                        <option value="Linen">Black</option>
                        <option value="Wool">Blue</option>
                        <option value="Embrodiery">Yellow</option>
                    </select>
                    <select className="brand-select" aria-label="Default select example">
                        <option selected>Brands</option>
                        <option value="Cotton">A</option>
                        <option value="Linen">B</option>
                        <option value="Wool">C</option>
                        <option value="Embrodiery">D</option>
                    </select>
                    <select className="prize-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="Cotton">500Rs - 1000Rs</option>
                        <option value="Linen">500Rs - 1000Rs</option>
                        <option value="Wool">500Rs - 1000Rs</option>
                        <option value="Embrodiery">500Rs - 1000Rs</option>
                    </select>
                    <select className="size-select" aria-label="Default select example">
                        <option selected>Size</option>
                        <option value="Cotton">X-Large</option>
                        <option value="Linen">Large</option>
                        <option value="Wool">Medium</option>
                        <option value="Embrodiery">Small</option>
                    </select>
                </div>
                <div className="products">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.images[0]} alt="" />
                                </Link>
                                <div className="box">
                                    <h3 title={product.title}>
                                        <div>{product.title}</div>
                                    </h3>
                                    {/* <p>{product.description}</p> */}
                                    <h4>${product.price}</h4>
                                    <button onClick={() => addCart(product._id)}>
                                        Add to Cart
                                        </button>
                                </div>
                            </div>
                    ))
                }
                    
                </div>
        </div>
    )
}

export default Product;
