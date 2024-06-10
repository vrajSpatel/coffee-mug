import React, { useState } from 'react'
import twoface from '../assests/twoface.png'
import { Link } from 'react-router-dom'
import brand_logo from '../assests/coffee-mug_logo2.png'
import './css/signin.css'


const SigninwithPhone = () => {
    // const [userdata, setuserdata] = useState({ email: '', password: '' });
    // const changeuserdata = (e) => {
    //     setuserdata((data) => { return { ...data, [e.target.name]: e.target.value } })
    //     console.log(userdata)
    // }

    const [allphonedata, setallphonedata] = useState({email : '',countryCode : '' ,phoneNumber : ''});
    const handleallthing = (e) => {
        setallphonedata((data) => { return {...data,[e.target.name] : e.target.value}})
        console.log(allphonedata)
    }

    return (
        <div className='signin_main'>
            <div className="left_signin">
                <div className="infonumber">
                    <div className="header_logo">
                        <img src={brand_logo} alt="brand_logo" />
                    </div>
                    <div className="coffee_num">
                        <div className="counterup_item">
                            <h2>
                                <span>5,00,000 +</span>
                            </h2>
                            <p>Senior Professionals</p>
                        </div>
                        <div className="counterup_item">
                            <h2>
                                <span>1.2 million</span>
                            </h2>
                            <p>Connections Made</p>
                        </div>
                    </div>
                </div>
                <div className="twoface">
                    <img src={twoface} alt="" />
                </div>
            </div>
            <div className="right_signin">
                <div className="centoright_phone">
                    <div className="right_header_phone">
                        <Link to='/signin'>&lt; back</Link>
                        <h2>Login With OTP</h2>
                    </div>
                    <div className="mainform_phone">

                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter Email" 
                        onChange={handleallthing}
                        value={allphonedata.email}    
                        />

                        <div className="oror_phone">
                            <center>
                                <h5>or</h5>
                            </center>
                        </div>

                        <label>Phone No.(With Whatsapp)</label>
                        <div className="phone-input-container">
                            <select
                                name='countryCode'
                                className="country-code-select"
                                value={allphonedata.countryCode}
                                onChange={handleallthing}
                            >
                                <option value="+1">USA (+1)</option>
                                <option value="+44">UK (+44)</option>
                                <option value="+91">India (+91)</option>
                                <option value="+61">Australia (+61)</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                name='phoneNumber'
                                type="text"
                                className="phone-number-input"
                                placeholder="Enter phone number"
                                value={allphonedata.phoneNumber}
                                onChange={handleallthing}
                            />
                        </div>

                        <div className="sumbutton_phone">
                            <button type="submit" className="btn ">Continue</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninwithPhone
