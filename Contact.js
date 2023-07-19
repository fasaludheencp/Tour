import React from 'react'
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa";

function Contact() {
  return (
    <>
    <div id="CA">
      <div id="CB">
      <h1><b>Contact Us</b></h1>
      <div className="CC">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email"/>
</div>
<div className="CC">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Enter text"/>
</div>
<div className="CC">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="Enter Phone Number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Number"/>
</div>
<div className="CC">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="enter number" className="form-control" id="exampleFormControlInput1" placeholder="mm/dd/yyyy"/>
</div>
<div className="CC">
  <label for="exampleFormControlTextarea1" className="form-label">Enter your experience</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
</div>

<button type="button" class="btn btn-success">Booking</button>

      </div>
     
    
    </div>
    <div class="footer-section">
        <div class="footer-item">
            <h2>PARTNERS</h2>
            <p><a href="">Booking </a></p>
            <p><a href=""> TripAdvisor</a></p>
            <p><a href=""> HotelWorld</a></p>
            <p><a href=""> Rental car</a></p>
        </div>
        <div class="footer-item">
            <h2>GET HELP </h2>
            <p><a href=""> Services</a></p>
            <p><a href=""> Enquiry </a></p>
            <p><a href="">Insurance</a></p>
            <p><a href=""> Payment Options </a></p>
        </div>
        <div class="footer-item">
            <h2>ONLINE </h2>
            <p><a href=""> Contact </a></p>
            <p><a href=""> Visiting</a></p>
            <p><a href=""> Enquiry</a></p>
            <p><a href=""> booking </a></p>
        </div>
        <div class="footer-item social">
            <h2> Follow Us </h2>
            <a><FaTwitter/></a>
         <a><FaFacebookF/></a>
         <a><FaInstagram/></a>
        </div>
    </div>              
    </>
  )
}

export default Contact
