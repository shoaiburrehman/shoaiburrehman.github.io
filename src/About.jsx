import React from 'react';
import profimg from './images/profile.jpg';
import './App.css';
import { NavLink } from 'react-router-dom';
import web from './images/portfolio.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { ReactComponent as GradIcon } from './assets/graduation.svg';
import file from "./files/shoaibCV.pdf";

const About = (props) => {
  return (
    <>
    {/* <Common 
      title1="I am "
      title2="Shoaib Ur Rehman Khan"
      title3=""
      name=""
      name2="Software Engineer"
      name3=", graduated in 2019, trained in Web and Mobile App Development. Motivated Software developer with over some months of Web and Mobile App Development experience and passion for Data Science & Machine Learning and its Libraries. Actively seeking opportunity to join a renowned organization for the betterment of my skills and knowledge and for the growth of the organization." 
      visit="/contact" 
      imgsrc={profimg}
      btnName="Contact Now"         
    /> */}
    <div className="my-5">
      <h1 className="text-center">About Me</h1>
    </div>
    <div className="header-section">
    {/* <section id="header" className="d-flex align-items-center position custom-container"> */}
    <section id="header" className="align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {/* <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> */}
                        <div className="col-md-6 order-2 order-lg-1">
                          <h1><strong className="brand-name">Software Developer</strong></h1>
                            <h5 className="my-3 text-justify"><strong></strong>Graduated in July 2019, trained in Web and Mobile App Development. Motivated Software developer with over some months of Web and Mobile App Development experience and passion for Data Science & Machine Learning and its Libraries.
                            <br /><br />I am proficient in Data Analysis, Visualization, Machine Learning and Deep Learning. I am passionate about research involving Deep Learning and Artificial Intelligence.</h5>
                            <div className="col-12 mx-auto">
                            <div className="row">
                              <div className="col-md-4 pt-2">
                                <h2><strong>Interests</strong></h2>
                                <ul>
                                  <li>Mobile App Development (React Native)</li>
                                  <li>Artificial Intelligence</li>
                                  <li>Data Science</li>
                                  <li>Machine Learning</li>
                                  <li>Deep Learning</li>
                                  <li>Web Development</li>
                                </ul>
                              </div>
                              <div className="col-md-5 ml-8 pt-2 mb-4">
                                <h2><strong>Education</strong></h2>
                                <ul className="ul-edu">
                                  <li className="mb-4">
                                    <GradIcon className="mt-2"/>
                                    <div className="description d-inline ml-2">
                                      <p className="degree d-inline"><strong>Bachelors of Science in Software Engineering</strong></p>
                                      <p className="institution">Usman Institute of Technology | Sept 2015 – July 2019</p>
                                      <p className="duration text-muted">Karachi, Pakistan</p>
                                      {/* <p className="duration text-muted">KARACHI, PAKISTAN</p> */}
                                    </div>
                                  </li>
                                  <br />
                                  <li className="mt-4 mb-5">
                                    <GradIcon className="mt-2"/>
                                    <div className="description d-inline ml-2">
                                      <p className="degree d-inline"><strong>Higher Secondory Certificate (HSC)</strong></p>
                                      <p className="institution">Govt. Dehli College | 2013 – 2015</p>
                                      <p className="duration text-muted">Karachi, Pakistan</p>
                                      {/* <p className="duration text-muted">KARACHI, PAKISTAN</p> */}
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              {/*<!--E-->*/}
                              <div className="col-12 mx-auto">
                                <div className="row">
                                  <div className="experience col-md-12 mt-3 mb-4">
                                    <h2><strong>Experience</strong></h2>
                                    <div className="card1">
                                      <div className="card-body">
                                        <h5 className="card-title">Mobile Application Developer</h5>
                                        <h6 className = "text-muted">E-Tools Software Pty. Ltd | July 2021 – Till Present</h6>
                                        <p className="duration1 text-muted">Karachi, Pakistan</p>
                                        <p className="card-text">
                                          <li>It is an Australian based Software Company. I work here in React-Native.</li> 
                                          <li>My job is to develop and maintain their own product-based aged care Mobile Applications.</li>
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                      </div>
                                    </div>
                                    <div className="card1">
                                      <div className="card-body">
                                        <h5 className="card-title">Junior Software Engineer</h5>
                                        <h6 className = "text-muted">Vital System Pvt. Ltd. | Nov 2020 – July 2021</h6>
                                        <p className="duration1 text-muted">Karachi, Pakistan</p>
                                        <p className="card-text">
                                        <li>Working in JS Frameworks (React-Native, Redux-Saga).</li> 
                                        <li>My job here is to develop and maintain their own product-based mobile application.</li>
                                        <li>Working on other side project as per requirements with day to day reporting.</li></p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                      </div>
                                    </div>
                                    <div className="card1 mt-3">
                                      <div className="card-body">
                                        <h5 className="card-title">Junior Software Developer</h5>
                                        <h6 className = "text-muted">MITCO Software Company | Oct 2019 – Nov 2020</h6>
                                        <p className="duration1 text-muted">Karachi, Pakistan</p>
                                        <p className="card-text">
                                        <li>Worked in JS Frameworks (React-Redux, React-Native, Node.js) and MySQL.</li> 
                                        <li>Here my job was to develop and maintain web and mobile application.</li>
                                        <li>Worked in Linux platform as per requirements.</li></p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                      </div>
                                    </div>
                                    <div className="card1 mt-3">
                                      <div className="card-body">
                                        <h5 className="card-title">Database Internship</h5>
                                        <h6 className = "text-muted">TCS Logistics Company | Sept 2018 – Oct 2018</h6>
                                        <p className="duration1 text-muted">Karachi, Pakistan</p>
                                        <p className="card-text">
                                          <li>Here I got the opportunity to be in Oracle Development team</li>
                                          <li>Experienced working on Oracle, Apex and their OMS.</li>
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="certification col-md-12 mt-3 mb-4">
                                    <h2><strong>Certifications</strong></h2>
                                    <div className="card1">
                                      <div className="card-body">
                                        <h5 className="card-title">DeepLearning.AI TensorFlow Developer Professional Certificate</h5>
                                        <h6 className = "text-muted">Coursera | June 30, 2020</h6>
                                        <p className="card-text">This is Coursera’s 4 Courses deeplearning.ai Professional Certification.</p>
                                        <a href="https://www.coursera.org/account/accomplishments/specialization/VKPH7PECLNTG" className="card-link" target="_blank" rel="noopener">See Certificate</a>
                                      </div>
                                    </div>
                                    <div className="card1 mt-3">
                                      <div className="card-body">
                                        <h5 className="card-title">IBM Data Science Professional Certificate</h5>
                                        <h6 className = "text-muted">Coursera | Dec 16, 2019</h6>
                                        <p className="card-text">This is Coursera’s 9 Courses IBM Professional Certification.</p>
                                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/KLGS7UELSCHG" className="card-link" target="_blank" rel="noopener">See Certificate</a>
                                      </div>
                                    </div>
                                    <div className="card1 mt-3">
                                      <div className="card-body">
                                        <h5 className="card-title">Artificial Intelligence Certification</h5>
                                        <h6 className = "text-muted">PIAIC | Jan 2019 – Aug 2021</h6>
                                        <p className="card-text">This is 4 Modules Certification started in 2019, currently in 4th Module.</p>
                                        <p className="text-muted">See Certificate</p>
                                      </div>
                                    </div>
                                    <div className="card1 mt-3">
                                      <div className="card-body">
                                        <h5 className="card-title">For More Certifications</h5>
                                        <a href="https://www.linkedin.com/in/shoaiburrehmankhan/" className="card-link" target="_blank" rel="noopener">Click Here</a>
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-inline mt-3 div-a ml-3">
                              <a href= "mailto:shoaiburrehman249@outlook.com" target="_blank" rel="noopener"><MailIcon className="zoom"/></a>
                              <a href= "https://www.linkedin.com/in/shoaiburrehmankhan/" target="_blank" rel="noopener"><LinkedInIcon className="zoom"/></a>
                              <a href= "https://github.com/shoaiburrehman" target="_blank" rel="noopener"><GitHubIcon className="zoom mb-1"/></a>
                              <a className="anchor" href= {file} target="_blank" rel="noopener">CV</a>
                            </div>
                            <div className="mt-3 div-a ml-3">
                              <p className="color-para"><PhoneIcon className="mr-1" />+92 307 2522920</p>
                              <a className="card-link" href="https://www.google.com/maps/place/Block+13+B+Gulshan-e-Iqbal,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9075809,67.0777066,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33f267abdd59f:0x415e9404face66cf!8m2!3d24.90751!4d67.0799702" target="_blank" rel="noopener"><LocationOnIcon className="mb-1" /> 75300 Khi, Pakistan</a>
                            </div>
                            <div className="mt-3 mb-4 ml-3">
                              <NavLink exact to="/portfolio" className="btn-get-started">See my Portfolio</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img mb-3">
                            <img src={profimg} className="img-fluid rounded-circle" alt="home img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  );
}

export default About;
