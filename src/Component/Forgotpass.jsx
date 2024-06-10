import React, { useState } from 'react'
import './css/forpass.css'
import { Link } from 'react-router-dom'
import clogo from '../assests/coffee-mug_logo2.png'

const Forgotpass = () => {

    const [useremail, setuseremail] = useState({email : ''});
    const getemaildata = (e) =>{
        setuseremail( (data)=>{return {...data,[e.target.name] : e.target.value}} )
        console.log(useremail)
    }

    return (
        <div className='both_main'>
            <div className="leftpart">
                <div className="vframe">
                    <iframe src="https://www.youtube.com/embed/VVKVIrMWhWw?autoplay=0&rel=0&showinfo=0?controls=0"  title='video'></iframe>
                </div>
            </div>
            <div className="rightpart">
                <div className="content">
                    <div className="tagsline">
                        <Link to='/'>
                            <img src={clogo} alt="lgog" />
                        </Link>
                        <b><h3>Reset Password</h3></b>
                    </div>

                    <div className="formarea">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Email"
                        onChange={getemaildata}
                        value={useremail.email}
                         />

                        <button type="button" id='sendmail' className="btn btn-lg">Reset Password</button>
                    </div>

                    <p className='bottom-link'>Remember your password? <Link to="/signin">Sign in here</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Forgotpass
