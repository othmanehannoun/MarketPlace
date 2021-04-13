import React from 'react'


function NavbarDashbord (){
      return(
        <nav className="navbar navbar-expand navbar-light bg-white">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
            
              <li className="nav-item" >
                <a href className="nav-link" >
                <i class="far fa-bell" style={{fontSize: '23px'}}></i>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                 <i class="far fa-envelope" style={{fontSize: '23px'}}></i>
                </a>
              </li>
            </ul>
            <form action className="form-inline w-100 d-none d-md-block ml-2">
              <input type="text" className="form-control form-control-sm rounded-pill search border-0 px-3 w-100" placeholder="Search" />
            </form>
            <ul className="navbar-nav d-none d-md-block">
              <li className="nav-item">
                <a className="nav-link"><img src="https://vignette.wikia.nocookie.net/the-sun-vanished/images/5/5d/Twitter-avi-gender-balanced-figure.png/revision/latest?cb=20180713020754" alt="" className="img-fluid rounded-circle" style={{height: '32px', width: '32px'}} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
    
}

export default NavbarDashbord