import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import './css/downloadapp.css'
import { Link } from 'react-router-dom'
import gphoto from '../assests/google-logo_downloadapp.svg'

const DownloadApp = () => {
    return (
        <>
            <Navbar />

            <div className="downloadapp_main">

                <div className="main_image_btn">
                    <div className="conatiner_main_image_btn">

                        <div className="btn_part">
                            <h1>
                                Download our mobile app
                                <br />
                                <mark data-aos="highlight-text" data-aos-delay="250" className="aos-init aos-animate">For better experience</mark>
                            </h1>

                            <div className="imgage">

                                <div>
                                    <Link to="https://play.google.com/store/apps/details?id=com.app.coffeemug&amp;referrer=utm_source%3Dcoffeemug%26utm_medium%3Dcoffeemug%26utm_term%3Dcm%252Bpromotion%26utm_campaign%3DCM%2520Promotion">
                                        <img src="https://assets.coffeemug.ai/assets/images/play-store.png?v=1" alt="1" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="https://apps.apple.com/app/id1580344709?mt=8">
                                        <img src="https://assets.coffeemug.ai/assets/images/app-store.png?v=1" alt="1" />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="image_app">
                            <img className="app-banner" alt="app-imagea" src="https://assets.coffeemug.ai/assets/images/app.png?v=1" />
                        </div>

                    </div>
                </div>

                <div className="top_companies">
                    <h2 id='heading_h2_dapp'>Meet Leaders from top companies</h2>
                    <h4 id='heading_h4_dapp'>Members from over 35,000 companies</h4>

                    <div className="rows_companys">
                    
                        <div className="perticular_row">

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                        </div>

                        <div className="perticular_row">

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                        </div>

                        <div className="perticular_row">

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>

                            <div className="company_item_per">
                                <img src={gphoto} alt="" />
                            </div>
                        </div>
                    </div>


                </div>

                <h3 className='last_2_h3'>Making great</h3>
                <h3 className='last_2_h3'>connections every day</h3>

                <div className="amount_last_three">

                    <div className="perti_item">

                    </div>

                    <div className="perti_item">

                    </div>

                    <div className="perti_item">
                        
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default DownloadApp
