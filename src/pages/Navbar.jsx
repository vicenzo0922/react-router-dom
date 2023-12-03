import { Outlet, Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg fixed-top">
                <div className="container-fluid d-flex">
                    <Link className="navbar-brand fw-bold text-white" to="/">Activity 14</Link>    
                      <div class="collapse navbar-collapse" id="navbarNav">                              
                        <ul className="navbar-nav"> 
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="services">Services</Link>
                            </li>
                        
                        
                        </ul>
                      </div>
                </div>
            </nav>

            <Outlet />
        </>
   
    )

}

export default Navbar;