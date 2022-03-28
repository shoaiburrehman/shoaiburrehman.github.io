import React from 'react';
import web from './images/portfolio.png';
import './App.css';
import { NavLink } from 'react-router-dom';
import profimg from './images/profile.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FaStackOverflow } from 'react-icons/fa';
import file from "./files/shoaibCV.pdf";

const Home = (props) => {
  return (
    <>
      {/* <Common 
        title1="Hello, I am "
        title2="Shoaib"
        title3=" and I am Software Engineer"
        name="This is my "
        name2="portfolio App"
        name3=""
        visit="/contact" 
        imgsrc={web}
        btnName="See my portfolio"         
      /> */}
    
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Hello, I am <strong className="brand-name">Shoaib</strong> and I am Software Engineer</h1>
                            <h2 className="my-3">This is my <strong>Portfolio App</strong></h2>
                            <div className="d-inline div-a">
                              <a href= "mailto:shoaiburrehman249@outlook.com" target="_blank" rel="noopener"><MailIcon className="zoom"/></a>
                              <a href= "https://www.linkedin.com/in/shoaiburrehmankhan/" target="_blank" rel="noopener"><LinkedInIcon className="zoom"/></a>
                              <a href= "https://github.com/shoaiburrehman" target="_blank" rel="noopener"><GitHubIcon className="zoom mb-1"/></a>
                              <a href= "https://stackoverflow.com/users/16950813/shoaib-khan" target="_blank" rel="noopener"><FaStackOverflow className="zoom mb-1" size="1.5em"/></a>
                              <a className="anchor" href= {file} target="_blank" rel="noopener">CV</a>
                            </div>
                            <div className="mt-3 mb-4">
                                <NavLink exact to="/portfolio" className="btn-get-started">See my Portfolio</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img ">
                            <img src={profimg} className="img-fluid rounded-circle" alt="home img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
