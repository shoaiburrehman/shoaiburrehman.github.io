import React from 'react';
import web from './images/portfolio.png';
import './App.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.title1}<strong className="brand-name">{props.title2}</strong>{props.title3}</h1>
                            <h2 className="my-3">{props.name}<strong>{props.name2}</strong>{props.name3}</h2>
                            <div className="mt-3">
                                <NavLink exact to="/portfolio" className="btn-get-started">See my Portfolio</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Common;
