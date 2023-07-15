import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const initialState = {
    name: '',
    email: '',
    nameIsValid: null,
    passwordIsValid: null,
}

const formReducer = (state, action) => {
    if (action.type === 'name') {
        return { ...state, nameIsValid: action.value.trim().length > 0, name:action.value.trim()}
    }
    if (action.type === 'password') {
        return { ...state, passwordIsValid: action.value.trim().length > 1, password:action.value.trim() }
    }
}

const SignIn = (props) => {
    const [formIsValid, dispatchFormIsValid] = useReducer(formReducer, initialState)

    const navigate = useNavigate()

    const validationHandler = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'name': {
                dispatchFormIsValid({type: name, value})
                break;
            }
            case 'password': {
                dispatchFormIsValid({type: name, value})
                break;
            }
            default: {
                break
            }
        }
    }

    const submitHandler = () => {
        if(formIsValid.nameIsValid && formIsValid.passwordIsValid) {
            const data = {name: formIsValid.name, password: formIsValid.password}
            localStorage.setItem('userData', JSON.stringify(data))
            navigate('/task/home')
        }
    }

    return (
        <React.Fragment>
            <div className="lg:mx-60 md:mx-20 sm:mx-10 mx-2 sm:my-40 my-10 border-2 shadow-xl p-3">
                <div className="text-green-900 text-center px-5 py-2" style={{backgroundColor: 'lightgreen'}}>
                    Let's Learn, share & Inspire each other with our passion for computer engeeniering. Sign in now 
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 py-4 px-5 gap-24">
                    <div>
                        <h3 className="my-2 mb-3 font-bold text-white">Sign In</h3>
                        <div>
                            <input placeholder="Email" onChange={validationHandler} name="name" className={`py-2 w-full px-2 bg-gray-200 ${formIsValid.nameIsValid == true || formIsValid.nameIsValid == null ? 'bg-gray-200' : 'bg-red-100' }`}  style={{border: '1px solid black', borderBottom: '0px'}} />
                            <input placeholder="Password" onChange={validationHandler} name="password" className={`py-2 w-full px-2 ${formIsValid.passwordIsValid == true || formIsValid.passwordIsValid == null ? 'bg-gray-200' : 'bg-red-100' }`} style={{border: '1px solid black'}} />
                        </div>
                        <div className="w-full"><button className="border-0 w-full text-center bg-blue-500 text-light text-medium mt-4 py-2" style={{borderRadius: '20px'}} onClick={submitHandler}>Sign In</button></div>
                        <div className="w-full"><button className="border-2 w-full text-center flex justify-center mt-4 py-2"><FaFacebook className="text-blue-600 mt-1 mx-1 text-xl" /> Sign In with Facebook</button></div>
                        <div className="w-full"><button className="border-2 w-full text-center flex justify-center mt-1 py-2"><FaGoogle className="mt-1 mx-2 text-lg" /> Sign In with Google</button></div>
                        <div className="w-full"><button className="border-2 bg-gray-100 w-full text-center mt-1 py-2">Forget Password?</button></div>
                    </div>
                    <div className="col-md-6 col-0 justify-content-center align-items-center">
                        <div>Dont have an account yet? <button className="text-blue-600 border-0" onClick={props.signUp}>Create new for free</button></div>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.2.1510688658.1688887122&semt=sph" width='350' height="350" alt="auth" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignIn;