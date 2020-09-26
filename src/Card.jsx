import React from 'react';
import web from './images/neural.jpg'
import './App.css';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="Detail Image" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    {/* <NavLink exact to={props.href} className="btn btn-primary">Click for Details</NavLink> */}
                    <a href={props.href} className="btn btn-primary" target="_blank" rel="noopener">Click for Details</a>
                </div>
            </div>
        </div>
        {/* <a class="card2" href="#">
          <h3>This is option 2</h3>
          <p class="small">Card description with lots of great facts and interesting details.</p>
          
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a> */}
    </>
  );
}

export default Card;
