import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
// import fire from '../../config/Fire';


class FawnNav extends Component {


    locationRef = (link) => {
        window.location.href = link
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-primary bg-primary" style={{textAlign: 'center'}}>

                <h3 className="text-white" style={{textAlign: 'center'}}>A D D R E S S | Zipcode / Address Lookup Module</h3>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Resources
                </div>
                            {/* <!-- Here's the magic. Add the .animate and .slide-in classes to your .dropdown-menu and you're all set! --> */}
                            <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                                {/* <div className="dropdown-item">
                                <button type="button" className="btn btn-success" onClick={this.props.showAdmin}>
                                    Admin Login</button>
                                </div>
                                <div className="dropdown-divider"></div> */}


                                <div className="dropdown-item">
                                    <button type="button" className="btn btn-success" data-toggle="modal"
                                        data-target="#aboutMeModal">
                                        About Us</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </nav>
        );
    }
}

export default FawnNav;
