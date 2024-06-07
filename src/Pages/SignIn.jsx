import React, { useState } from 'react'
import './css/signin.css'
import twoface from '../assests/twoface.png'
import brand_logo from '../assests/coffee-mug_logo2.png'


const SignIn = () => {
    const [userdata, setuserdata] = useState({email : '', password : ''});
    const changeuserdata = (e) => {
        setuserdata((data)=>{return {...data,[e.target.name]:e.target.value}})
        console.log(userdata)
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
                <div className="centoright">
                    <div className="right_header">
                        <h2>Login</h2>
                        <div className="stepj">
                            <h3>
                                Not a member?
                                <a href="/">Join Now</a>
                            </h3>
                        </div>
                    </div>

                    <div className="login_from">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={userdata.email} placeholder="Email" onChange={changeuserdata} / >
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" value={userdata.password} id="exampleInputPassword1" name='password' placeholder="Password" onChange={changeuserdata}/>
                            </div>
                            <div className="forgotpass">
                                <a href="/">Forgot Password?</a>
                            </div>
                            <div className="loginoption_buttons">
                                <button type="button" id='mainlogin' className="btn btn-lg">Login</button>
                                <button type="button" id='otplogin' className="btn btn-lg">Login With OTP</button>
                            </div>
                            <div className="oror">
                                <center>
                                    <h5>or</h5>
                                </center>
                            </div>
                            <div className='other_login_option'>
                                <button type="button" className="btn btn-lg">Continue With Google</button>
                                <button type="button" className="btn btn-lg">Continue with Linkedin</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn
