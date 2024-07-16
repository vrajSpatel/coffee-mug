import React, { useContext, useState, useEffect } from "react";
import "./css/feed.css";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import apiContext from "../Context/apiContext";

const Feed = () => {
  const { fetchFeedApi, auth_token } = useContext(apiContext);

  const [feedData, setfeedData] = useState();
  useEffect(() => {
    const func1 = async function () {
      setfeedData(await fetchFeedApi());

      console.log(await fetchFeedApi());
    };
    func1();
  }, [auth_token]);

  return (
    <>
      <Navbar className='navbar_feed' / >
      <div className="container_feed">
        <div className="allsection">
          <div className="nav_menu">
            <ul>
              <li>
                <Link to="/feed" className="active">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/home-color.svg"
                    alt=""
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/careers.svg"
                    alt=""
                  />
                  Jobs <span className="badge">new</span>
                </Link>
              </li>
              <li>
                <Link to="/members">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/member.svg"
                    alt=""
                  />
                  Members
                </Link>
              </li>

              <li>
                <Link to="/mentors">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/mentorship.svg"
                    alt=""
                  />
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/startups">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/invest.svg"
                    alt=""
                  />
                  Startup
                </Link>
              </li>
              <li>
                <Link to="/startup-investors">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/invest.svg"
                    alt=""
                  />
                  Investor List
                </Link>
              </li>

              <li>
                <Link to="/my-matches">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/connection.svg"
                    alt=""
                  />{" "}
                  My Connections
                </Link>
              </li>

              <li>
                <Link to="/inbox">
                  <img
                    src="https://assets.coffeemug.ai/assets/v2/img/svg/chat.svg"
                    alt=""
                  />
                  My Chats
                </Link>
              </li>
            </ul>
          </div>

          <div className="mid_feed">
            {feedData?.map((element) => {
              console.log(element)
              return (
                <div className="card_investor">
                  <div className="container_card">
                    <div className="header_name">
                      <h3>
                        Would you like to meet
                        <span>
                          <Link>{element?.firstName}</Link>
                        </span>
                        ?
                      </h3>
                    </div>

                    <div className="info_person">
                      <div className="cont_person">
                        <div className="head_cont_p">
                          <div className="na_image">
                            <div className="image_na">
                              <Link>
                                <img
                                  src={element?.profileImage}
                                  alt=""
                                />
                              </Link>
                            </div>

                            <div className="na_na">
                              <Link>{element.firstName} {element.lastName}</Link>
                              <Link>Founder</Link>
                            </div>
                          </div>

                          <div className="mt_cont">
                            <div className="mt_item">
                              <img
                                src="https://assets.coffeemug.ai/assets/v2/img/svg/meetings.svg"
                                alt=""
                              />
                              <p>1 Meetings</p>
                            </div>
                            <div className="mt_item">
                              <img
                                src="https://assets.coffeemug.ai/assets/v2/img/svg/handshape.svg"
                                alt=""
                              />
                              <p>10+ Want to meet</p>
                            </div>
                            <div className="mt_item">
                              <img
                                src="https://assets.coffeemug.ai/assets/v2/img/svg/tumbsup.svg"
                                alt=""
                              />
                              <p> Endorsements</p>
                            </div>
                          </div>
                        </div>

                        <div className="bio_post">
                          <p>
                            {element?.description}
                          </p>
                        </div>

                        <div className="gole_container">
                          <p>
                            <img
                              src="https://assets.coffeemug.ai/assets/v2/img/svg/goal.svg"
                              alt=""
                            />
                            Goals
                          </p>
                          <div className="gole_list ">
                            <ul>
                              {element.objectives.map((obj) => {
                                return (
                                  <li>
                                    <div className="check_text">
                                      <i
                                        className="fa-solid fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      <p>{obj}</p>
                                    </div>
                                  </li>
                                )
                              }
                              )}

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="int_button">
                      <Link>Express Interest</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sidebar">
            <div className="mentor_area">
              <h4 className="sidebar_title">
                Achieve your goals by connecting with right &ensp;
                <span className="primary-text">Founder</span> &amp;{" "}
                <span className="primary-text">Investor/VC</span> experts
              </h4>
              <div className="mentor_group">
                <div className="mentor_img">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/default-user.png"
                    alt=""
                  />
                </div>
                <div className="mentor_img">?</div>
              </div>
              <div className="custom_btn">
                <Link to="/" className="border_btn">
                  View matching members
                </Link>
              </div>
            </div>

            <div className="role_area">
              <h4 className="sidebar_title">Find members by Roles</h4>
              <ul className="roles_list">
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/technology">
                    <div className="list">
                      <h5 className="list_item">Technology</h5>
                      <p className="small_text">112000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/operations">
                    <div className="list">
                      <h5 className="list_item">Business operations</h5>
                      <p className="small_text">94000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/sales-revenue">
                    <div className="list">
                      <h5 className="list_item">Sales/Revenue/BD</h5>
                      <p className="small_text">89000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/founder">
                    <div className="list">
                      <h5 className="list_item">Founder</h5>
                      <p className="small_text">51000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/finance">
                    <div className="list">
                      <h5 className="list_item">Finance</h5>
                      <p className="small_text">43000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/marketing">
                    <div className="list">
                      <h5 className="list_item">Advertising/Marketing</h5>
                      <p className="small_text">34000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members">
                    <div className="list">
                      <h5 className="list_item">More</h5>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="role_area js-industries-members-div">
              <h4 className="sidebar_title">Find members by Industries</h4>
              <ul className="roles_list js-industries-members">
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/software-development">
                    <div className="list">
                      <h5 className="list_item">IT/software dev</h5>
                      <p className="small_text">125000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/b2b-tech">
                    <div className="list">
                      <h5 className="list_item">B2B Tech/SAAS</h5>
                      <p className="small_text">86000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/consumer-internet">
                    <div className="list">
                      <h5 className="list_item">consumer internet</h5>
                      <p className="small_text">58000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/financial-services">
                    <div className="list">
                      <h5 className="list_item">Finance/Banking</h5>
                      <p className="small_text">54000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/consulting">
                    <div className="list">
                      <h5 className="list_item">Consulting</h5>
                      <p className="small_text">49000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members/industry/big-data-ai-iot-robotics">
                    <div className="list">
                      <h5 className="list_item">
                        Automation/AI/ML/IOT/data tech/robots
                      </h5>
                      <p className="small_text">44000+ professionals</p>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://coffeemug.ai/suggested-members">
                    <div className="list">
                      <h5 className="list_item">More</h5>
                    </div>
                    <div className="arrow">
                      <i
                        className="fa-solid fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feed;
