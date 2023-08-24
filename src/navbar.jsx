import react,{ useState, useEffect } from "react";
import logo from './assets/logo.png'




const Navbar = ()=>{
      

    return(<>
            <nav>
                    <div className="logo"><img width={"100"} src={logo} alt="Logo" /></div>
                    <div className = "toggleBtn" >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="toggleWraper">
                      <div className="middleNav">
                         <div className="link">Destination</div>
                         <div className="link">Hotels</div>
                         <div className="link">Flights</div>
                         <div className="link">Bookings</div>
                      </div>
                      <div className="rightNav">
                            <button>login</button>
                            <button>Signup</button>
                      </div>
                    </div>
            </nav>   
    </>)
}
export default Navbar
