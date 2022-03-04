import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Payment.css"
const Payment = () => {
    return (
        <>
        <div className="checkout-container">
            <Navbar />
          <div className="row">
              <div className="col-75">
                  <div className="container">
                      <form action="">
                          <div className="row">
                              <div className="col-50">
                                  <h3>Billing Address</h3>
                                  <label htmlFor="fname"><i className="fa fa-user"></i>Full Name</label>
                                  <input type="text" id="fname" name="firstname" placeholder="JKT"/>
                                  <label htmlFor="email"><i className="fa fa-envelope"></i>Email</label>
                                  <input type="text" id="email" name="email" placeholder="Jitu@gmail.com"/>
                                  <label htmlFor="adr"><i className="fa fa-address-card"></i>Address</label>
                                  <input type="text" id="adr" name="address" placeholder="4A Mount Everest" />
                                  <label htmlFor="city"><i className="fa fa-industry"></i>City</label>
                                  <input type="text" id="city" name="city" placeholder="New York" />

                                  <div className="row">
                                      <div className="col-50">
                                          <label htmlFor="state">State</label>
                                          <input type="text" id="state" name="state" placeholder="Maharashtra" />
                                      </div>
                                  </div>
                              </div>

                              <div className="col-50">
                                  <h3>Payment</h3>
                                  <label htmlFor="fname">Accepted Cards</label>
                                  <div className="icon-container">
                                      <i className="fa fa-cc-visa" ></i>
                                      <i className="fa fa-cc-amex" ></i>
                                      <i className="fa fa-cc-mastercard" ></i>
                                      <i className="fa fa-cc-discover"></i>
                                  </div>
                                  <label htmlFor="cname">Name on Card</label>
                                  <input type="text" id="cname" name="cardname" placeholder="Jyotindra"/>
                                  <label htmlFor="ccnum">Credit card number</label>
                                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>


                                  <label htmlFor="expmonth">Exp Month</label>
                                  <input type="text" id="expmonth" name="expmonth" placeholder="June" />
                                  <div className="row">
                                      <div className="col-50">
                                          <label htmlFor="expyear">Exp Year</label>
                                          <input type="text" id="expyear" name="expyear" placeholder="2021" />
                                      </div>
                                      <div className="col-50">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="123" />
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <label htmlFor="">
                              <input type="checkbox" checked="checked" name="sameadr" />
                          </label>
                          <button type="submit" className="btn-checkout">
                            <a href="/confirm">
                                Proceed to Checkout
                            </a>
                          </button>
                      </form>
                  </div>
              </div>

              <div className="col-25">
                  <div className="container">
                      <h4>Cart
                      <span className="price">
                          <i className="fa fa-shopping-cart"></i>
                          <b>4</b>
                      </span>
                      </h4>
                      <p><a href="#">Product 1</a> <span className="price">15$</span></p>
                      <p><a href="#">Product 1</a> <span className="price">15$</span></p>
                      <p><a href="#">Product 1</a> <span className="price">15$</span></p>
                      <p><a href="#">Product 1</a> <span className="price">15$</span></p>
                      <hr />
                      <p>Total <span className="price"><b>30$</b></span></p>
                  </div>
              </div>
          </div>
          </div>
        </>
    )
}

export default Payment;
