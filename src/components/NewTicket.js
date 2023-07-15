import { Fragment, useReducer, useState } from "react"

import SubmitModel from "./UI/SubmitModel"

const initialState = {
    nameIsValid: null,
    emailIsValid: null,
    mobileIsValid: null,
    breakdownIssueIsValid: null,
    locationIsValid: null,
    assistanceTimeIsvalid: null,
    serviceFeesIsValid: null,
    leadSourceIsValid: null,
}

const formReducer = (state, action) => {
    if (action.type === 'name') {
        return { ...state,  nameIsValid: action.value.trim().length > 0}
    }
    if (action.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return { ...state, emailIsValid: emailRegex.test(action.value.trim())}
    }
    if (action.type === 'mobile') {
        return { ...state, mobileIsValid: action.value.trim().length > 9 }
    }
    if (action.type === 'location') {
        return { ...state,  locationIsValid: action.value.trim().length > 0}
    }
    if (action.type === 'breakdown') {
        return { ...state, breakdownIssueIsValid: action.value.trim().length > 0 }
    }
    if (action.type === 'service') {
        return { ...state, serviceFeesIsValid: action.value.trim().length > 0 }
    }
    if (action.type === 'lead') {
        return { ...state,  leadSourceIsValid: action.value.trim().length > 0}
    }
    if (action.type === 'assistance') {
        return { ...state, assistanceTimeIsvalid: action.value.trim().length > 0 }
    }
    return state;
}


const NewTicket = () => {
    const [formIsValid, dispatchFormIsValid] = useReducer(formReducer, initialState)
    const [displayModel, setDisplayModel] = useState(false)

    const validationHandler = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name': {
                dispatchFormIsValid({ type: 'name', value })
                break;
            }
            case 'email': {
                dispatchFormIsValid({ type: 'email', value })
                break;
            }
            case 'mobile': {
                dispatchFormIsValid({ type: 'mobile', value })
                break;
            }
            case 'breakdown': {
                dispatchFormIsValid({ type: 'breakdown', value })
                break;
            }
            case 'location': {
                dispatchFormIsValid({ type: 'location', value })
                break;
            }
            case 'service': {
                dispatchFormIsValid({ type: 'service', value })
                break;
            }
            case 'assistance': {
                dispatchFormIsValid({ type: 'assistance', value })
                break;
            }
            case 'lead': {
                dispatchFormIsValid({ type: 'lead', value })
                break;
            }
            default: {
                break
            }
        }
    }

    const date = new Date();
    const currentDate = date.toLocaleDateString();

    const confirmHandler = () => {
        setDisplayModel(false)
    }

    const submitHandler = () => {
        if(formIsValid.nameIsValid && formIsValid.emailIsValid && formIsValid.mobileIsValid && formIsValid.breakdownIssueIsValid &&
            formIsValid.locationIsValid && formIsValid.assistanceTimeIsvalid && formIsValid.serviceFeesIsValid && formIsValid.leadSourceIsValid) {
            setDisplayModel(true)
        }
    }
    const title = "New Tickit Task"
    const massege = "New Task Created Successfully"
    return (
        <Fragment>
        <div className="shadow-2xl w-[70%] p-4 lg:w-[60%] pb-12 xl:w-[50%] mx-auto rounded-xl border-2 border-gray-300 mt-12">
            <div className="grid sm:grid-cols-2 gap-4 xl:mx-24 lg:mx-8 md:mx-6 mx-1 mt-4">
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Name</label><br />
                    <div className="relative">
                        <input type="text" onChange={validationHandler} className={`${formIsValid.nameIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="name" name="name" placeholder="Enter name" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Email</label><br />
                    <div className="relative">
                        <input type="text" onChange={validationHandler} className={`${formIsValid.emailIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 lg:pr-10 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="email" name="email" placeholder="Email Address" autoComplete="email" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Phone Number</label><br />
                    <div className="relative">
                        <input type="number"onChange={validationHandler} className={`${formIsValid.mobileIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="mobile" name="mobile" placeholder="(123) 456 - 7890" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Breakdown Issue </label><br />
                    <div className="relative">
                        <input type="text" onChange={validationHandler} className={`${formIsValid.breakdownIssueIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 lg:pr-10 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="breakdown" name="breakdown" placeholder="Breakdown Issue" autoComplete="on" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Location </label><br />
                    <div className="relative">
                        <input type="text" onChange={validationHandler} className={`${formIsValid.locationIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 lg:pr-10 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="location" name="location" placeholder="Location" autoComplete="on" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="mr-4">Service Fees </label><br />
                    <div className="relative">
                        <input type="text" onChange={validationHandler} className={`${formIsValid.serviceFeesIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 lg:pr-10 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="service" name="service" placeholder="Enter Serivce fees" autoComplete="on" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="joiningDate" className="mr-4">Assistance Time</label><br />
                    <div className="relative">
                        <input type="text" defaultValue={currentDate} onChange={validationHandler} className={`${formIsValid.assistanceTimeIsvalid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="assistance" name="assistance" placeholder="" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="employementType" className="mr-4">Lead Source</label><br />
                    <div className="relative">
                        <select onChange={validationHandler} className={`${formIsValid.leadSourceIsValid === false ? 'bg-red-100 border-2 border-red-300' : ''} outline-none md:p-2 md:px-4 p-1 px-2 rounded-full mt-4 bg-transparent border-2 border-gray-300 text-semibold shadow-lg`} id="lead" name="lead" placeholder="Enter Lead source">
                            <option value="Select Type" disabled>Select Type</option>
                            <option value="Full time">Web</option>
                            <option value="Part time">Chat</option>
                            <option value="Remote">Call</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <button onClick={submitHandler} className={`bg-purple-900 hover:bg-purple-800 float-right mr-3 mt-4 rounded-full tracking-wider text-white text-[12px] px-6 py-2.5 font-semibold`}>Book Ticket</button>
            </div>
        </div>
        {displayModel && <SubmitModel title={title} massege={massege} onConfirm={confirmHandler} />}
        </Fragment>
    )
}

export default NewTicket