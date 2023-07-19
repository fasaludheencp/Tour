import React from 'react'
import { Link } from 'react-router-dom'
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa";


function Explore() {
  return (

    <div id="EA">
      <div id="EB">
<div>
<img src="https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop" width={300} height={200}>
</img>
<h5>Great Wall of China</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>


<div>
<img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/02/GettyImages-478125515.jpg" width={300} height={200}>
</img>
<h5>Tokyo Skytree</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>
  
<div>
<img src="https://i0.wp.com/mykyotomachiya.wpengine.com/wp-content/uploads/2014/12/101231_Japan-1235.jpg" width={300} height={200}>
</img>
<h5>Kiyomizu-dera</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>
      
</div>


<div id="EB">
<div>
<img src="https://www.exploreegypttours.com/wp-content/uploads/2022/10/Giza-Necropolis-Explore-Egypt-Tours.jpg" width={300} height={200}>
</img>
<h5>Giza Necropolis</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>


<div>
<img src="https://www.berlin.de/binaries/asset/image_assets/6274092/source/1684826673/1000x500/" width={300} height={200}>
</img>
<h5>Berliner Fernsehturm</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>
  
<div>
<img src="https://navbharattimes.indiatimes.com/photo/msid-86254269,imgsize-232324/pic.jpg" width={300} height={200}>
</img>
<h5>Hawa Mahal</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>
      
</div>



<div id="EB">
<div>
<img src="https://secretdubai.co/wp-content/uploads/2022/06/shutterstock_2119051883.jpg" width={300} height={200}>
</img>
<h5>future museum dubai</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>


<div>
<img src="https://soulofamerica.com/wp-content/uploads/2022/08/Dubai-Burj_Khalifa_view_CSchulz.jpg" width={300} height={200}>
</img>
<h5>Burj Al Arab</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
</div>
  
<div>
<img src="https://lemonacademy.co.uk/wp-content/uploads/2021/10/Adsiz-tasarim-49-1.jpg" width={300} height={200}>
</img>
<h5>Burj Khalifa</h5>
<Link to="/contact" class="btn btn-btn dark">More</Link>
           
</div>

</div>

<div className="footer-section">
        <div className="footer-item">
            <h2>PARTNERS</h2>
            <p><a href="">Booking </a></p>
            <p><a href=""> TripAdvisor</a></p>
            <p><a href=""> HotelWorld</a></p>
            <p><a href=""> Rental car</a></p>
        </div>
        <div className="footer-item">
            <h2>GET HELP </h2>
            <p><a href=""> Services</a></p>
            <p><a href=""> Enquiry </a></p>
            <p><a href="">Insurance</a></p>
            <p><a href=""> Payment Options </a></p>
        </div>
        <div className="footer-item">
            <h2>ONLINE </h2>
            <p><a href=""> Contact </a></p>
            <p><a href=""> Visiting</a></p>
            <p><a href=""> Enquiry</a></p>
            <p><a href=""> booking </a></p>
        </div>
        <div className="footer-item social">
            <h2> Follow Us </h2>
      
         <a><FaTwitter/></a>
         <a><FaFacebookF/></a>
         <a><FaInstagram/></a>
        </div>
    </div>              


    </div>
    
    
  )
}



export default Explore
