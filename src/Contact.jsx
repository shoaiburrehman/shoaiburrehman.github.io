import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]:value,
      };
    });
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}, my phone Number is ${data.phone}, my email is ${data.email}, my message is ${data.message}`);
  };
  return (
    <>
    <div className="my-5">
      <h1 className="text-center"> Contact Us </h1>
    </div>
    <div className="container contact-div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1">Full Name</label>
              <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1">Email Address</label>
              <input name="email" value={data.email} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1">Phone No.</label>
              <input name="phone" value={data.phone} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile number" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea name="message" value={data.message} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div clasName="col-12">
              <button className="btn btn-outline-primary" type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
