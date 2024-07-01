import React from 'react'
import './css/mentor.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

const Mentor = () => {
  return (
    <>
      <Navbar />

      <div className='Main_container_mentor'>

        <div className="header_mentor">
          <div className="container_header_mentor">

            <div className="centered_text_header">
              <h2>
                1:1 Mentorship from Industry Leaders
              </h2>
              <div className="title-divider"></div>
            </div>

            <div className="info_header_text">
              <p className="subtitle">Introducing CoffeeMug Mentors for Growth where we help you find your perfect mentor for 1:1 mentorship. Accelerate the path to your next chapter with the right mentor.</p>
            </div>
          </div>
        </div>

        <div className="know_your_mentor">
          <div className="containter_mentor">
            <h3>Know Your Mentors</h3>

            <div className="mentors_info">
              <div className="firstrow_mentor">
                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Prashant Ranade" className="avatar" src="https://salesql.s3.eu-central-1.amazonaws.com:443/person/7944d6aa-ad1d-4bdc-bdd8-ee4778b296dd-prashant-ranade.png" />
                  </div>
                  <h3>Prashant Ranade</h3>
                  <h4>Senior Director of Software Engineering &amp; Site Lead</h4>
                  <p>Groupon</p>
                </Link>

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Hetal Sonpal" className="avatar" src="https://assets.coffeemug.ai/li-files/image-8e04084b-3fb6-4e30-8965-44dc28c0da2a.jpg" />
                  </div>
                  <h3>Hetal Sonpal</h3>
                  <h4>Startup Evangelist, TEDx Speaker, Angel Investor</h4>
                  {/* <p>Groupon</p> */}
                </Link>

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Vineet Arya" className="avatar" src="https://assets.coffeemug.ai/li-files/image-eec282cf-654d-418a-8695-94b9ca0a8eb0.jpg" />
                  </div>
                  <h3>Vineet Arya</h3>
                  <h4>Founder</h4>
                  <p>COHIRE</p>
                </Link>

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Soma Maitra" className="avatar" src="https://assets.coffeemug.ai/li-files/image-0e7e2eff-79ab-4b5e-a095-19baedb87d52.jpg" />
                  </div>
                  <h3>Soma Maitra</h3>
                  <h4>VP &amp; Head, Innovation, Grocery Business</h4>
                  <p>Reliance Retail</p>
                </Link>

              </div>

              <div className="secondrow_mentor">

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Sameer Karulkar" className="avatar" src="https://assets.coffeemug.ai/li-files/image-03206286-dc6b-431f-a43e-4c9f8716fa0a.jpg" />
                  </div>
                  <h3>Sameer Karulkar</h3>
                  <h4>Founder and Partner</h4>
                  <p>Coverpage Ventures Advisory </p>
                </Link>

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Sudhir Mv" className="avatar" src="https://assets.coffeemug.ai/li-files/image-8f229c67-00e4-46e3-b22f-71c845e87ade.jpg" />
                  </div>
                  <h3>Sudhiv Mv</h3>
                  <h4>Partner</h4>
                  <p>Gartner</p>
                </Link>


                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Shruti Aggarwal" className="avatar" src="https://assets.coffeemug.ai/li-files/image-cd12748f-5c72-4bae-a113-52cd412dfa38.jpg" />
                  </div>
                  <h3>Shruti Aggarwal</h3>
                  <h4>CEO</h4>
                  <p>TheStartuplab</p>
                </Link>

                <Link className="mentor_item">
                  <div className="job-user">
                    <img alt="Chandrashekar Kupperi" className="avatar" src="https://assets.coffeemug.ai/li-files/image-f2e57631-91b5-4290-9a8a-250fc5528fdb.jpg" />
                  </div>
                  <h3>Chandrashekar Kupperi</h3>
                  <h4>Founder</h4>
                  <p>ANOVA Corporate Services </p>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="button_mentor-1">
          <button>View All Mentors</button>
        </div>

        <div className="goal-wrap_mentor">
          <div className="container_goal_wrap">
            <h3>Connect with the right Mentor to achieve your Goals</h3>

            <div className="info_item-goalwrap">

              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                    data-inject-svg />
                </div>
                <h6>Design my career path</h6>
              </div>
              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                    data-inject-svg />
                </div>
                <h6>Transition into leadership roles</h6>
              </div>
              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                    data-inject-svg />
                </div>
                <h6>Launch a new product</h6>
              </div>
              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                    data-inject-svg />
                </div>
                <h6>Learn how to raise capital</h6>
              </div>
              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                    data-inject-svg />
                </div>
                <h6>Get better at professional networking</h6>
              </div>
              <div className="key-points">
                <div className="rounded-circle">
                  <img
                    src="https://assets.coffeemug.ai/assets/images/icons/icon-check-points.svg"
                    alt="Coffeemug.ai"
                  />
                </div>
                <h6>Career growth</h6>
              </div>

              <div className="has-text-centered">
                <Link to="/" className="primary-btn-1">Apply for Mentorship</Link>
                <Link to="/" className="mentor-btn-2 ">Become a Mentor</Link>
              </div>

            </div>
          </div>
        </div>

        <div className="button_mentor-1">
          <button>View All Mentors</button>
        </div>

        <div className="member_who_found_mentor">
          <div className="container_member_found_mentor">
            <h3>Hear our members who found Mentors on CoffeeMug</h3>

            <div className="all_cards_mentorfound">

              <div className="card_item">
                <div className="info_card">
                  <p>“As a serial entrepreneur myself ( If I can say so), I am hoping for some great conversations
                    with Dipti on issues where I think we both seem to have a common interest. I am looking at
                    diving into a clear Go-To-Market execution on my idea with Dipti's advice and guidance. Having
                    attended your workshop and listening to Dipti's views on the 5 Types of Mentors inspired me to
                    take this step forward.
                    Also, I am hoping I can be a good "Reverse Mentor" by sharing my observations and views on the
                    coffeemug platform.
                    ”</p>
                </div>
                <div className="card_member">
                  <div className="dp">
                    <img className="" src="https://assets.coffeemug.ai/assets/images/users/pooja_gupta.jpg" alt="pooja gupta" data-demo-src="images/users/pooja_gupta.jpg" />
                  </div>
                  <div className="dp_name">
                    <div className="name"><strong className="color-primary">Pooja Gupta</strong></div>
                    <div className="position">Founding Member, Head Marketing Imagin8ors</div>
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="info_card">
                  <p> “I am Niranjana, founder of The Baker Ninja in Chennai. I have been selected to be mentored by
                    Ms. Kuntal Malia, co-founder of Style Nook. I was able to get this opportunity through a
                    ‘Networking’ webinar conducted by Coffee Mug, with women industry leaders as speakers. I’m
                    looking forward to gaining insights from Ms. Kuntal’s experience, about how I can grow my
                    business and team to the next level.” </p>
                </div>
                <div className="card_member" id='card_mentor-2'>
                  <div className="dp">
                    <img className="" src="https://assets.coffeemug.ai/assets/images/users/niranjana.jpg" alt="Niranjana Selvam" data-demo-src="images/users/pooja_gupta.jpg" />
                  </div>
                  <div className="dp_name">
                    <div className="name"><strong className="color-primary">Niranjana Selvam</strong></div>
                    <div className="position">Founder - The Baker Ninja, Chennai</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="how_it_works_section">
          <div className="container_howworks">
            <h3>How it works?</h3>

            <div className="first_row">

              <div className="first-1">
                <div className="heading-number">1.</div>
                <div className="heading-info">Apply to find a mentor & share your goals</div>
              </div>

              <div className="first-1">
                <div className="heading-number">2.</div>
                <div className="heading-info">Find your mentor & Express Interest</div>
              </div>

            </div>

            <div className="first_row">

              <div className="first-1">
                <div className="heading-number">3.</div>
                <div className="heading-info"> We will introduce you to your Mentor</div>
              </div>

              <div className="first-1">
                <div className="heading-number">4.</div>
                <div className="heading-info">Get a 1:1 Meeting & share your preference for follow up meetings</div>
              </div>

            </div>

          </div>
        </div>

        <div className="has-text-centered">
          <Link to="/" className="primary-btn-1">Apply for Mentorship</Link>
          <Link to="/" className="mentor-btn-2 ">Become a Mentor</Link>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Mentor
