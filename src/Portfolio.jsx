import React from 'react';
import logo from './logo.svg';
import web from './images/neural.jpg';
import './App.css';
import Card from './Card';
import Pdata from './Pdata';

const Portfolio = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Portfolio</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
              {
                Pdata.map((item, index) => {
                  return <Card 
                    key={index}
                    imgsrc={item.imgsrc}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                })
              }
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
