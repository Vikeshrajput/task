import React from "react";
import classes from "./AuthModel.module.css";

import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const SignUp = (props) => {
    return (
        <React.Fragment>
            <button className={`border-0 ${classes.cancel_modal}`} onClick={props.onCancel}><RxCross2 className="mb-1" /></button>
            <div className={classes.modal}>
                <div className="text-succes fw-medium px-5 py-2" style={{backgroundColor: 'lightgreen'}}>
                    Let's Learn, share & Inspire each other with our passion for computer engeeniering. Sign up now
                </div>
                <div className="row py-4 px-5">
                    <div className="col-md-6 col-12">
                        <h3 className="my-2 mb-3 fw-medium">Create Account</h3>
                        <div className="flex">
                            <input placeholder="First Name" className="py-2 w-50" style={{backgroundColor: 'lightgray', border: '1px solid black', borderBottom: '0px'}} />
                            <input placeholder="Last Name" className="py-2 w-50" style={{backgroundColor: 'lightgray', border: '1px solid black', borderBottom: '0px'}} />
                            <input placeholder="Last Name" className="py-2 w-100" style={{backgroundColor: 'lightgray', border: '1px solid black', borderBottom: '0px'}} />
                            <input placeholder="Password" className="py-2 w-100" style={{backgroundColor: 'lightgray', border: '1px solid black', borderBottom: '0px'}} />
                            <input placeholder="Confirm Password" className="py-2 w-100" style={{backgroundColor: 'lightgray', border: '1px solid black'}} />
                        </div>
                        <div className="w-100"><button className="border-0 w-100 text-center bg-primary text-light fw-medium mt-4 py-2" style={{borderRadius: '20px'}}>Create Account</button></div>
                        <div className="w-100"><button className="border border-2 w-100 text-center fw-medium mt-4 py-2"><FaFacebook className="text-primary" /> Sign up with Facebook</button></div>
                        <div className="w-100"><button className="border border-2 w-100 text-center fw-medium mt-1 py-2"><FaGoogle className="" /> Sign up with Google</button></div>
                    </div>
                    <div className="col-md-6 col-0 justify-content-center align-items-center">
                        <div>Already have an account? <button className="text-primary border-0 bg-light" onClick={props.signUp}>Sign In</button></div>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.2.1510688658.1688887122&semt=sph" width='400' height="400" alt="auth" />
                        <p>By signing in you agree to our terms and condition</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp;