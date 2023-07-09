import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import classes from './Navbar.module.css'

const NavBar = (props) => {
    return (
        <React.Fragment>
        <nav className="my-2 d-none d-md-block z-index-3">
            <div className="row justify-content-center positon-absolute align-items-center">
                <div className='col-md-1'></div>
                <div className="col-4 ml-2 pl-4">
                    <spna className="text-success h4 ml-8 pl-8">ATG</spna> 
                    <span  className="h4">WORLD</span>
                </div>
                <div className="col-3 text-center">
                    <input type="text" placeholder="Search for your favorite groups in ATG" className={`form-control form-control-sm py-2 font-bold text-dark border-dark border-2 ${classes.custom_rounded}`} />
                </div>
                <div className="col-4 text-center">
                    <spna>Create account.</spna> <button className="text-primary border-0 bg-white fw-bold" onClick={props.onClick}>It's free!</button>
                </div>
            </div>
        </nav>
        </React.Fragment>
    )
}

export default NavBar;