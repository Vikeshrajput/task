import React from "react";
import ReactDOM from "react-dom";

import classes from "./AuthModel.module.css";
import SignIn from './SignIn'
import SignUp from "./SignUp";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};


const PrevDataModel = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {props.signIn && ReactDOM.createPortal(<SignIn onCancel={props.onCancel} signUp={props.signUp} />,
                document.getElementById('overlay-root')
            )}
            {!props.signIn && ReactDOM.createPortal(<SignUp onCancel={props.onCancel} signUp={props.signUp} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default PrevDataModel;
