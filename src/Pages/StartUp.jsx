import React from 'react'
import './css/startups.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import vrajProfileImage from '../assests/vrajimg.jpg'

const StartUp = () => {
    return (
        <>
            <Navbar />

            <div className="main_startup">
                <div className="container_startup">


                    <div className="startup_posts">

                        <div className="post_item_startup">

                            <div className="header_card">
                                <Link>
                                    <div className="company_name">

                                        <div className="commp_logo">
                                            <img src="https://assets.coffeemug.ai/assets/images/default-user.png" alt="" />
                                        </div>

                                        <div className="conpany_st-name">
                                            <h2>{'Tresco'}</h2>
                                            <p>{'Metal Fabrication'}</p>
                                        </div>

                                    </div>
                                </Link>

                                <div className="company_info">
                                    <div className="founding-year">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/ico-calendar.png" />
                                        {2019}
                                        <br />
                                        <span>Founding Year</span>
                                    </div>
                                    <div className="num-empl">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/want-to-meet.png" />
                                        {12}
                                        <br />
                                        <span>Employees</span>
                                    </div>
                                    <div className="linkdin-link">
                                        <Link>
                                            <h2>ln</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="company_bio">
                                <p>Tresco:- Worlds 1st Integrated Health Management Framework on Blockchain under which Users can Add, Manage & Share their Health Records. Users will never have to carry their Physical Health Records again. We are WEB 3.0 Focused HealthTech company to create a network of Connected Health Ecosystem around an Individual BHR.</p>

                                <h6>Founder Profile</h6>

                                <div className="founder_info">

                                    <div className="main_info">
                                        <div className="founder_imag">
                                            <Link >
                                                <img src={vrajProfileImage} alt="" />
                                            </Link>
                                        </div>

                                        <div className="founder_bio">
                                            <p className="name-founder">
                                                <Link>
                                                    {"Vraj Patel"}
                                                </Link>
                                            </p>
                                            <p className="founderat">Founder at {"Tresco"}</p>

                                            <div className="founder_tags">
                                                {/* map here */}
                                                <span>
                                                    Raise Funding
                                                </span>
                                                <span>
                                                    Raise Funding
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="int_button">
                                        <Link>
                                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            Express Interest
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="post_item_startup">

                            <div className="header_card">
                                <Link>
                                    <div className="company_name">

                                        <div className="commp_logo">
                                            <img src="https://assets.coffeemug.ai/assets/images/default-user.png" alt="" />
                                        </div>

                                        <div className="conpany_st-name">
                                            <h2>{'VTF'}</h2>
                                            <p>{'All-Metal Fabrication'}</p>
                                        </div>

                                    </div>
                                </Link>

                                <div className="company_info">
                                    <div className="founding-year">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/ico-calendar.png" />
                                        {2007}
                                        <br />
                                        <span>Founding Year</span>
                                    </div>
                                    <div className="num-empl">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/want-to-meet.png" />
                                        {34}
                                        <br />
                                        <span>Employees</span>
                                    </div>
                                    <div className="linkdin-link">
                                        <Link>
                                            <h2>ln</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="company_bio">
                                <p>VTF:- Worlds 1st Integrated Health Management Framework on Blockchain under which Users can Add, Manage & Share their Health Records. Users will never have to carry their Physical Health Records again. We are WEB 3.0 Focused HealthTech company to create a network of Connected Health Ecosystem around an Individual BHR.</p>

                                <h6>Founder Profile</h6>

                                <div className="founder_info">

                                    <div className="main_info">
                                        <div className="founder_imag">
                                            <Link >
                                                <img src={vrajProfileImage} alt="" />
                                            </Link>
                                        </div>

                                        <div className="founder_bio">
                                            <p className="name-founder">
                                                <Link>
                                                    {"Vraj Patel"}
                                                </Link>
                                            </p>
                                            <p className="founderat">Founder at {"Tresco"}</p>

                                            <div className="founder_tags">
                                                {/* map here */}
                                                <span>
                                                    Raise Funding
                                                </span>
                                                <span>
                                                    Raise Funding
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="int_button">
                                        <Link>
                                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            Express Interest
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="post_item_startup">

                            <div className="header_card">
                                <Link>
                                    <div className="company_name">

                                        <div className="commp_logo">
                                            <img src="https://assets.coffeemug.ai/assets/images/default-user.png" alt="" />
                                        </div>

                                        <div className="conpany_st-name">
                                            <h2>{'Inox'}</h2>
                                            <p>{'Gas Tanks'}</p>
                                        </div>

                                    </div>
                                </Link>

                                <div className="company_info">
                                    <div className="founding-year">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/ico-calendar.png" />
                                        {1989}
                                        <br />
                                        <span>Founding Year</span>
                                    </div>
                                    <div className="num-empl">
                                        <img src="https://assets.coffeemug.ai/assets/images/icons/want-to-meet.png" />
                                        {3943}
                                        <br />
                                        <span>Employees</span>
                                    </div>
                                    <div className="linkdin-link">
                                        <Link>
                                            <h2>ln</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="company_bio">
                                <p>Inox:- Worlds 1st Integrated Health Management Framework on Blockchain under which Users can Add, Manage & Share their Health Records. Users will never have to carry their Physical Health Records again. We are WEB 3.0 Focused HealthTech company to create a network of Connected Health Ecosystem around an Individual BHR.</p>

                                <h6>Founder Profile</h6>

                                <div className="founder_info">

                                    <div className="main_info">
                                        <div className="founder_imag">
                                            <Link >
                                                <img src={vrajProfileImage} alt="" />
                                            </Link>
                                        </div>

                                        <div className="founder_bio">
                                            <p className="name-founder">
                                                <Link>
                                                    {"Vraj Patel"}
                                                </Link>
                                            </p>
                                            <p className="founderat">Founder at {"Tresco"}</p>

                                            <div className="founder_tags">
                                                {/* map here */}
                                                <span>
                                                    Raise Funding
                                                </span>
                                                <span>
                                                    Raise Funding
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="int_button">
                                        <Link>
                                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            Express Interest
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default StartUp
