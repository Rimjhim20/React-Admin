import React from 'react'
import A from './A'
const Sidebar = () => {
  return (
   
    <div className="col-2 d-block side1">
            <div className="row pb-3">
                <div className="col-md-12">
                <img src="images/logoBE.png" className="ps-2 img-fluid" alt="" />
                </div>
            </div>
            <div className="row">
                <div class="col-md-12 mt-4">
                <A  text="DASBOARD"  path ="home.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="BUY ORDERS"  path ="buy.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="ENQUIRES"  path ="enquire.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="SELL ORDERS"  path ="sell.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="PRODUCTS"  path ="index.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="CUSTOMERS"  path ="customer.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="MARKETING"  path ="/index.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
                <A  text="BLOG"  path ="/index.html" className="d-block ps-5 text-decoration-none text-dark pb-3"/>
            <h1 className="text-center"><i className="bi bi-person-circle" style={{'color':'#24A1FD'}}></i>
            </h1>
            <a href="/index.html" className="text-center text-decoration-none text-dark"><h5>Admin</h5></a>
            <a href="/index.html" className="text-decoration-none text-dark"><p class="text-center">Lorem, ipsum.</p></a>
            <div className="row text-center pt-1 pb-4">
                <div className="col-5">
                    <A  text ="View profile" path="/index.html" className="text-dark" />
                </div>
                <div className="col-5">
                    <A text="Sign out" path="/index.html" className="text-dark" />
                </div>
            </div>
                </div>
            </div>
        </div> 
         )
}

export default Sidebar;