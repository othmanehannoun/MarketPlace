import React from 'react';
import NavbarDashbord from '../NavbarDash'


function Statistics (){


    return(
        <div className="mainContent">
        <NavbarDashbord />

         <div className="boxContent">
          <div className="firstRow">
            <div className="container">
                <div className="row"> 
                </div>
                <div className="row text-center">
                    <div className="col">
                    <div className="counter1">
                        <i className="fa fa-code fa-2x"></i>
                        <h2 className="timer count-title count-number" data-to="100" data-speed="1500"></h2>
                        <p className="count-text ">Our Customer</p>
                </div>
                </div>
                <div className="col">
                <div className="counter2">
                    <i className="fa fa-coffee fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                    <p className="count-text ">Happy Clients</p>
                </div>
                </div>
                <div className="col">
                    <div className="counter3">
                    <i className="fa fa-lightbulb-o fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                    <p className="count-text ">Project Complete</p>
                    </div>
                </div>
                    <div className="col">
                    <div className="counter4">
                    <i className="fa fa-bug fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="157" data-speed="1500"></h2>
                    <p className="count-text ">Coffee With Clients</p>
                </div>
                </div>
            </div>
         </div>
        </div>
     </div>
    </div>
    )
}



export default Statistics