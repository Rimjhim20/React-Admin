import React from 'react'
import A from './A'

const Analytics = () => {
  return (
    <div>
    
    <h3 className="pt-3 pb-3 text-center" style={{"color": "#24A1FD" , "font-size": "40px"}}>ANALYTICS</h3>
    <div className="linebreak"></div>

      <div className="box-4">
      <div className="row down justify-content-around pb-1 pt-5">
        <div className="col-md-3 text-center col-11">
        <div className="col-md-12 bg-main "> 
        <p>Total No of <br/> Customers <br/><span>277</span> <br/><A path="/index.html" text="view Details" className="" /></p>
        </div>
        </div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br/>Bought<br/><span>65</span> <br/> <A path="/index.html" text="view Details" className="" /></p></div></div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of Orders<br/>Sold<br/><span>23</span> <br/> <A path="/index.html" text="view Details" className="" /></p></div></div>
        <div className="col-md-3 text-center col-11"><div className="col-md-12 bg-main "> <p>Total No of<br/>Products (live) <br/><span>104</span> <br/> <A path="/index.html" text="view Details" className="" /></p></div></div>
       </div>
      </div>
      
     </div>
  )
}

export default Analytics;