import React from 'react'
import Button from './Button'
import A from './A'
const Main = () => {
  return (
    <div className="row justify-content-around mt-5" id="orderdetail">
    <div className="col-md-4 mb-4">
        <div className="row justify-content-around">
          <div className="col-md-5 col-11">
           <div className="row text-center">
            <div className="col-md-12 bg-main mb-2"> 
            <p>Pending Buy Orders <br/><span>77</span> <br/> <A path ="/index.html" text="view All" className="" /></p>
            </div>
            <div className="col-md-12 bg-main">
             <p>Pending Sell Orders <br/><span>54</span>  <br/> <A path ="/index.html" text="view All" className="" /></p>
             </div>
           
          </div>
          </div>
          <div className="col-md-5 text-center priceq bg-main w-90">
            <p> Price Enquiries<br/><span>77</span> </p>
            <Button text="" type="button" className="btn w-100" />
            <Button text="" type="button" className="btn w-100" />
            <Button text="" type="button" className="btn w-100" />
            <Button text="" type="button" className="btn w-100" />
            <A path ="/index.html" text="view All" className="" />
          </div>
        </div>
    </div>
    <div className="col-md-4 mb-4 text-center bg-main message col-11">
        <p>Unread Message</p>
        <Button text="" type="button" className="btn w-100" />
            <Button text="" type="button" className="btn w-100" />
            <Button text="" type="button" className="btn w-100" />
            <A path="./mess.html" text="view All" className="" />
    </div>
    <div className="col-md-4 col-11">
        <div className="col-md-11 bg-main text-center mb-2 p-1"> <p>Order Under Delivey <br/><span>12</span> <br/><A path="" text="View All" /></p></div>
        <div className="col-md-11 bg-main text-center mb-2 p-2"> <p>Total Orders in Cart<br/><span>12</span> <br/></p></div>    
    </div>
 
  </div>
    
  )
}

export default Main;