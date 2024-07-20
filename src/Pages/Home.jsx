import React, { useContext, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./css/home.css";
import { Link, useNavigate } from "react-router-dom";

// image for first carousal
import uber from "../assests/slider_2/uber-logo.png";
import facebook from "../assests/slider_2/facebook-logo.png";
import amazon from "../assests/slider_2/amazon-logo.png";
import vc100 from "../assests/slider_2/100vc-logo.png";
import cred from "../assests/slider_2/cred-logo.png";
import dailyhunt from "../assests/slider_2/dailyhunt-logo.png";
import delo from "../assests/slider_2/deloitte-logo.png";
import google from "../assests/slider_2/google-logo.png";
import elevation from "../assests/slider_2/elevation-logo.png";
import matrix from "../assests/slider_2/matrix-logo.png";
import quora from "../assests/slider_2/quora-logo.png";
import softbank from "../assests/slider_2/softbank-logo.png";

//manual carousal
import Carousal1Home from "../Component/Carousal1_Home";
import apiContext from "../Context/apiContext";

const Home = () => {
  const { auth_token } = useContext(apiContext);
  const navigation = useNavigate();
  useEffect(() => {
    if (auth_token.current !== "") {
      navigation("/feed");
    }
  });
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
                discover more meaningful connections for -
              </h5>

              <ul>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>Fund
                  Raise
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>Jobs
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Mentorship
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Brainstorming
                </li>
              </ul>

              <Link to="/choose-goals" className="banner_btn">
                Join Now for Free
                <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="right_banner ">
            <div className="banner_img_item">
              <div className="item_image">
                <img
                  className="img-fluid"
                  src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/banner_img.png"
                  alt=""
                />
              </div>
              <div className="item_image">
                <img
                  className="img-fluid"
                  src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/banner_img1.png"
                  alt=""
                />
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
                  <a target="_blank" href="https://www.uber.com/in/en/ride/">
                    <img src={uber} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.facebook.com/">
                    <img src={facebook} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.amazon.in/">
                    <img src={amazon} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.100x.vc/">
                    <img src={vc100} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://cred.club/">
                    <img src={cred} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="">
                    <img src={dailyhunt} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={delo} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={google} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={elevation} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={matrix} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={quora} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={softbank} alt="" />
                  </a>
                </div>
              </div>

              <div className="all_slides">
                <div className="img-slide">
                  <a target="_blank" href="https://www.uber.com/in/en/ride/">
                    <img src={uber} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.facebook.com/">
                    <img src={facebook} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.amazon.in/">
                    <img src={amazon} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://www.100x.vc/">
                    <img src={vc100} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="https://cred.club/">
                    <img src={cred} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={dailyhunt} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={delo} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={google} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={elevation} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={matrix} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={quora} alt="" />
                  </a>
                </div>
                <div className="img-slide">
                  <a target="_blank" href="/">
                    <img src={softbank} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="contectsforyou">
          <Carousal1Home />
        </div> */}

        <div className="our_member_section">
          <div className="container_members">
            <div className="heading">
              <center>
                <h1>Say Hello to Our Members</h1>
              </center>
            </div>

            <div className="members_list">
              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-0be099c2-a38a-4844-8ef0-7b8af02f7f72.jpg"
                      alt="change cdn"
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Gurmit Singh</h4>
                    <p>General Manager ACPC</p>
                    <p>Quora</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-3fddd048-c9e6-46b0-aae4-47d0771aa6df.jpg"
                      alt="cdn"
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Shashank Murli</h4>
                    <p>Co-Founder & CEO</p>
                    <p>TapCheif</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-f9dcd00a-3adf-4f03-9e30-e8143ade8f21.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Ashih Tulsian</h4>
                    <p>Cheif Enabler</p>
                    <p>POSist</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-802179a3-ed80-40b1-af75-aff928990393.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Umang Bedi</h4>
                    <p>Co-Founder</p>
                    <p>Dailyhunt</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-a3c42887-0959-4d39-95cf-b95d8efc6f0a.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Anurakt Jain</h4>
                    <p>CEO</p>
                    <p>klub</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-6f9e005a-43b7-4fec-90f0-7cf88f337457.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Dhruv Agarwala</h4>
                    <p>CEO</p>
                    <p>Proptiger.com</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-ae848f3c-013c-48b2-a529-aaf503779364.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Puneet Gupt</h4>
                    <p>COO</p>
                    <p>Times Internet Limited</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-cae3d4f8-377f-47c4-b068-aa0c7b00c26c.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Sairee Chahal</h4>
                    <p>Founder</p>
                    <p>SHEROES</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="perticularmember">
                  <div className="memberimage">
                    <img
                      src="https://assets.coffeemug.ai/li-files/image-97caf82f-a7ae-4e12-b836-c4c79fe89328.jpg"
                      alt=""
                    />
                  </div>
                  <div className="perticularmemberinfo">
                    <h4>Aloke Bajpai</h4>
                    <p>CEO & Co-Founder</p>
                    <p>ixigo</p>
                  </div>
                </div>
              </Link>
            </div>

            <center>
              {" "}
              <button type="button" className="btn btn-lg">
                View More Members{" "}
                <i className="fa-solid fa-angle-right" aria-hidden="true"></i>{" "}
              </button>{" "}
            </center>
          </div>
        </div>

        <div className="leadership_section">
          <div className="contaier_leadership">
            <div className="upper_card_leadership">
              <div className="left_leadership">
                <div className="header_left">
                  <h2>Leadership Hiring on CoffeeMug</h2>
                  <p>
                    We help in 3x faster leadership hiring through AI based
                    matchmaking and personalised 1:1 introductions.
                  </p>
                </div>

                <div className="centeritem_left">
                  <div className="specific_item_number">
                    <h2>5 Million+</h2>
                    <p>Public Profiles</p>
                  </div>
                  <div className="specific_item_number">
                    <h2>5,00,000+</h2>
                    <p>CoffeeMug Members</p>
                  </div>
                  <div className="specific_item_number">
                    <h2>3000+</h2>
                    <p>Senior Roles</p>
                  </div>
                  <div className="specific_item_number">
                    <h2>35+</h2>
                    <p>International Clients</p>
                  </div>
                </div>
                <button type="button" className="btn btn-lg">
                  Explore Talent Solution{" "}
                  <i className="fa-solid fa-angle-right" aria-hidden="true"></i>{" "}
                </button>
              </div>

              <div className="right_leadership">
                <div className="profilecard_right">
                  <div className="imageofcard">
                    <img
                      src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/leadership_img.png"
                      alt=""
                    />
                  </div>
                  <p>
                    Ramneek Khurana hired engineering and product leaders for
                    Lenskart
                  </p>
                  <Link to="https://coffeemug.ai/talentmug/#ramneek ">
                    Read His Story
                  </Link>
                </div>
              </div>
            </div>

            <div className="lower_carousal_leadership">
              <center>
                <p>Companies Hiring on CoffeeMug</p>
              </center>

              <div className="slider_part">
                <div className="all_slides">
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/klub-logo.png"
                        alt="klub"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/lenskart-logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/licious-logo.png"
                        alt="licious"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/sugar-box-logo.png"
                        alt="sugar-box"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/terraviewos-logo.png"
                        alt="terraviewos"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/yellow-ai-logo.png"
                        alt="yellow-ai"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/ganna-logo.png"
                        alt="ganna"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/games-kraft-logo.png"
                        alt="games-kart"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/haptik-logo.png"
                        alt="haptik"
                      />
                    </a>
                  </div>
                </div>

                <div className="all_slides">
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/klub-logo.png"
                        alt="klub"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/lenskart-logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/licious-logo.png"
                        alt="licious"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/sugar-box-logo.png"
                        alt="sugar-box"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/terraviewos-logo.png"
                        alt="terraviewos"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/yellow-ai-logo.png"
                        alt="yellow-ai"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/ganna-logo.png"
                        alt="ganna"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/games-kraft-logo.png"
                        alt="games-kart"
                      />
                    </a>
                  </div>
                  <div className="img-slide">
                    <a target="_blank" href="/">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/haptik-logo.png"
                        alt="haptik"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_make_connection">
          <center>
            <h1>Why make connections through CoffeeMug?</h1>
          </center>

          <center>
            <div className="connection_number">
              <div className="perticular_item">
                <h2>5,00,000+</h2>
                <p>Senior Profeesionals</p>
              </div>
              <div className="perticular_item">
                <h2>1.2 million+</h2>
                <p>Connection Made</p>
              </div>
            </div>
          </center>

          <div className="lower-info-connection">
            <div className="left-info-image">
              <img
                src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/Group_image.png"
                alt=""
              />
            </div>

            <div className="right-info-content">
              <div className="why_area_content">
                <ul>
                  <li>
                    <span className="why_icon">
                      <img
                        className="img-fluid"
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon1.png"
                        alt=""
                      />
                    </span>{" "}
                    Curated Network of Senior Professionals
                  </li>
                  <li>
                    <span className="why_icon">
                      <img
                        className="img-fluid"
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon2.png"
                        alt=""
                      />
                    </span>{" "}
                    No Spam messaging allowed
                  </li>
                  <li>
                    <span className="why_icon">
                      <img
                        className="img-fluid"
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon3.png"
                        alt=""
                      />
                    </span>{" "}
                    1:1 Introductions with consent
                  </li>
                </ul>

                <button type="button" className="btn btn-lg">
                  Join For Free Now{" "}
                  <i className="fa-solid fa-angle-right" aria-hidden="true"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="how_it_works">
          <div className="container_how_it_work">
            <div className="left_info_how-work">
              <h2>How it Works</h2>

              <ul>
                <li>
                  <span className="why_icon">
                    <img
                      className="img-fluid"
                      src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon4.png"
                      alt=""
                    />
                  </span>{" "}
                  Share Your Professional Goals
                </li>
                <li>
                  <span className="why_icon">
                    <img
                      className="img-fluid"
                      src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon5.png"
                      alt=""
                    />
                  </span>{" "}
                  See Matched Members
                </li>
                <li>
                  <span className="why_icon">
                    <img
                      className="img-fluid"
                      src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/icon6.png"
                      alt=""
                    />
                  </span>{" "}
                  Meet With Mutual Consent
                </li>
              </ul>

              <button type="button" className="btn btn-lg">
                Join For Free Now{" "}
                <i className="fa-solid fa-angle-right" aria-hidden="true"></i>{" "}
              </button>
            </div>

            <div className="right_img_how-work">
              <div className="right-img-work">
                <img
                  src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/work_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="get_app">
          <div className="getapp_container">
            <div className="getapp_container_info">
              <div className="leftsideinfo_getapp">
                <h2>
                  Get the App and Start Discovering Professional Connections
                </h2>

                <div className="app_rating_store">
                  <div className="appstore">
                    <p>User Rating</p>
                    <h4>
                      4.6{" "}
                      <span>
                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                      </span>
                    </h4>
                    <Link to="https://apps.apple.com/app/id1580344709?mt=8">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/ios-store-icon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="appstore">
                    <p>User Rating</p>
                    <h4>
                      4.4{" "}
                      <span>
                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                      </span>
                    </h4>
                    <Link href="https://play.google.com/store/apps/details?id=com.app.coffeemug&amp;referrer=utm_source%3Dcoffeemug%26utm_medium%3Dcoffeemug%26utm_term%3Dcm%252Bpromotion%26utm_campaign%3DCM%2520Promotion">
                      <img
                        src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/google-play-icon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rightsideimage_getapp">
                <img
                  src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/app-store-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="news_start">
          <h2>In the News</h2>

          <div className="slider_part">
            <div className="all_slides">
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/your-story-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/fe-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/bw_logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/be-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/entrepreneur-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/toi-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/et-logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="all_slides">
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/your-story-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/fe-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/bw_logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/be-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/entrepreneur-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/toi-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="img-slide">
                <a target="_blank" href="/">
                  <img
                    src="https://assets.coffeemug.ai/assets/web-assets/home-v3/images/social_img/et-logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="faq_section ">
          <div className="faq_container">
            <h1>FAQs</h1>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How is CoffeeMug different from other networking platforms?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      On most professional networks, you need to identify, reach
                      out, and set the context with a hope to hear back from
                      them, which let's face it, happens rarely.
                    </p>

                    <p>
                      At CoffeeMug, we do the heavy lifting of connecting you
                      with a relevant member based on your long term goals and
                      short term needs. Since we are a warm introduction
                      platform, when we connect our members with a context, the
                      response rate is high.
                    </p>

                    <p>
                      Also, the fact that we are curated assures you of
                      interaction with other successful professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Are there any membership / subscription charges for joining?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      As of now, the CoffeeMug Beta is free for members. There
                      are no charges for using CoffeeMug currently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What kind of business goals can CoffeeMug help me with?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Think of us like a Super Sharp Concierge Service, which
                      will help you fill your long term goals and immediate
                      needs about your professional space. We connect you with
                      the right people to meet your objectives including:
                    </p>

                    <ul>
                      <li>Hiring Key Leadership</li>
                      <li>Explore Career Opportunities</li>
                      <li>Raise money for your startup</li>
                      <li>Find good investment opportunities</li>
                      <li>Mentor other professionals</li>
                      <li>Brainstorm business ideas and challenges</li>
                      <li>
                        Connect with lateral thinkers from diverse professions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Which members will I get introduced to?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We will introduce you to a relevant member every week, so
                      you can interact over a video call. Our AI algorithm
                      figures out the most relevant member to make introductions
                      with every week.
                    </p>
                    <p>
                      Our members do half the work in sharing more about their
                      professional goals and the current set of needs. The
                      remaining work is done by the match-making algorithm,
                      which keeps improving with time with inputs from our teams
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    Can I get an introduction to a specific member?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We cannot guarantee that you will be matched with the
                      connections for your choice. However, our AI-based
                      algorithm surely takes this into consideration while
                      curating introductions for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    How do introductions happen on CoffeeMug?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Once a week, we send you an email introducing your match
                      so that you can take the conversation ahead and set up the
                      meeting.
                    </p>
                    <p>
                      Our email and chat -based messaging system keeps your
                      contact details private. You may choose to share your
                      contact details with your connection to take the
                      conversation forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
