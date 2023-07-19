

import React from 'react'
import { Link } from 'react-router-dom'
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa";

function Home() {
  return (
    <div>
    
      <div id="HA">
      <h3>ADVENTRUE</h3>
      <div id="HB">
      <h4>Explore The Colorful Wrold</h4>
      <h1> <b>A WONDERFUL GIFT</b></h1>
      <Link to="/Package" class="btn btn-dark">More</Link>

  
    </div>
      </div>
     <div id="AA"> 
        
      <div className="container" >
        <div className="row pt-5">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div>
              <img src="https://www.oyorooms.com/blog/wp-content/uploads/2017/12/pexels-photo-755401.jpeg" className='w-100' width={500} height={300}></img>
            </div>
            <div>
              <h5>Everest camp trek</h5>
              <Link to="/Package" class="btn btn-dark">More</Link>
            </div>

          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div>
            <img src="https://walkinghikingireland.com/wp-content/uploads/2022/09/image-e1662578530619.jpeg" className='w-100' width={500}  height={300}></img>
            </div>
            <div>
              <h5>Walking Forest</h5>
              <Link to="/Package" class="btn btn-dark">More</Link>

            </div>

          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div>
  
            <img src="https://villa-flora.si/imagecache/bigthumbnail/05-02-19/dd8809a7-4044-4054-ba53-e308b9400103.jpg" className='w-100' width={500} height={300}></img>
            </div>
            <div>
              <h5>Walking camp</h5>
              <Link to="/Package" class="btn btn-dark">More</Link>
              </div>
            </div>
            </div>
        </div> 
        </div>
   
    <div id="HD">
      <div><h1><b>EXPLORE THE WORLD</b></h1></div>
      <h6>“A journey is best measured in friends, not in miles,” by Tim Cahill reminds us that experiences and connections matter more than distances traveled.</h6>
      <Link to="/Package" class="btn btn-dark">More</Link>

      </div>
   
      <div id="HE">
        <div id="HF">
         <h1><b>UPCOMING TOURS&
          DESTINATIONS</b></h1>
         <br></br>
         <p>“A journey is best measured in friends, not in miles,” by Tim Cahill reminds us that experiences and connections matter more than distances traveled.</p>
         <Link to="/Package" class="btn btn-dark">More</Link>

         </div>

        <div id="HG">
        <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fHww&w=1000&q=80" width={280} height={200}></img>
        </div>
        

        <div id="HG">
        <img src="https://www.iwmbuzz.com/wp-content/uploads/2021/07/adventure-travel-top-10-best-adventurous-places-in-the-world-see-below-2-920x518.jpeg" width={280} height={200}></img>
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

  
    </div>
  )
}

export default Home


  
  


