

import React, { Component } from 'react'




class Slide extends Component{
    render(){
        return(
         <div className="col-md-8">
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/images/slide1.jpg" height='440vh' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/images/slide2.jpg" height='440vh' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/images/slide3.png" height='440vh' className="d-block w-100" alt="..." />
                </div>
            </div>
          
            </div>
        </div> 

        )
    }
}

export default Slide