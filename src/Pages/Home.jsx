import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import './css/home.css'
import { Link } from 'react-router-dom'

// image for first carousal
import uber from '../assests/slider_2/uber-logo.png'
import facebook from '../assests/slider_2/facebook-logo.png'
import amazon from '../assests/slider_2/amazon-logo.png'
import vc100 from '../assests/slider_2/100vc-logo.png'
import cred from '../assests/slider_2/cred-logo.png'
import dailyhunt from '../assests/slider_2/dailyhunt-logo.png'
import delo from '../assests/slider_2/deloitte-logo.png'
import google from '../assests/slider_2/google-logo.png'
import elevation from '../assests/slider_2/elevation-logo.png'
import matrix from '../assests/slider_2/matrix-logo.png'
import quora from '../assests/slider_2/quora-logo.png'
import softbank from '../assests/slider_2/softbank-logo.png'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="whole_homepage">

        <div className="banner align-item-center">
          <div className="left_banner">
            <div className="bannerdata">
              <h1>Discover Professional Connections that Matter!</h1>

              <h5 className="mv-n">
                <span>&nbsp;</span>
                Our AI based matchmaking and psychometric analysis help you
                discover more meaningful connections for -</h5>

              <ul>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Fund Raise</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Jobs</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Mentorship</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Brainstorming</li>
              </ul>

              <Link to="/choose-goals" class="banner_btn">Join Now for Free
                <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="right_banner ">
            <div className="banner_img_item">
              <div className="item_image">
                <img className="img-fluid" src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/banner_img.png" alt="" />
              </div>
              <div className="item_image">
                <img className="img-fluid" src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/banner_img1.png" alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="listed_sec">
          <div className="container_listedsec">
            <h5>Trusted by Professionals from</h5>
            <div className="slider_part">

              <div className="all_slides">

                <div className="img-slide">
                  <a href="/"><img src={uber} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={facebook} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={amazon} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={vc100} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={cred} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={dailyhunt} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={delo} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={google} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={elevation} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={matrix} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={quora} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={softbank} alt="" /></a>
                </div>

              </div>

              <div className="all_slides">

                <div className="img-slide">
                  <a href="/"><img src={uber} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={facebook} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={amazon} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={vc100} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={cred} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={dailyhunt} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={delo} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={google} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={elevation} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={matrix} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={quora} alt="" /></a>
                </div>
                <div className="img-slide">
                  <a href="/"><img src={softbank} alt="" /></a>
                </div>

              </div>


            </div>
          </div>
        </div>


        <div className="contectsforyou"></div>
        <div className="our_member_section"></div>
        <div className="leadership_section"></div>
        <div className="why_make_connection"></div>
        <div className="how_it_works"></div>
        <div className="get_app"></div>
        <div className="news_start"></div>
        <div className="faq_section"></div>

      </div>

      <Footer />
    </>
  )
}

export default Home
