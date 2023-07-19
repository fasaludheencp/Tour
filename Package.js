import React from 'react'
import { Link } from 'react-router-dom'
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa";

function Package() {
  return (
  <>
  <div id="PA">
   

    <div id="PB">
   
    <div className="card">
  <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/28/04/4f.jpg" class="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Christ the Redeemer</h5>
    <p className="card-text">Christ The Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face.  </p>
     <br></br> <br></br> 
     <Link to="/explore" class="btn btn-btn Dark">More</Link>
  </div>
</div>


    <div className="card">
  <img src="https://housing.com/news/wp-content/uploads/2023/05/TOWER-compressed.jpg" class="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Tower Bridge</h5>
    <p className="card-text">Tower Bridge is a Grade I listed combined bascule and suspension bridge in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry with the help of Henry Marc Brunel.</p>
     <br></br> <br></br> <br></br> <br></br> <Link to="/explore" class="btn btn-btn dark">More</Link>
  </div>
</div>

  
    
    <div className="card">
  <img src="https://cdn.britannica.com/02/129702-050-0CA305A9/American-Falls-Niagara-Frontier-New-York.jpg" class="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Niagara falls</h5>
    <p className="card-text">Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries.</p>
    <br></br> <br></br> <Link to="/explore" class="btn btn-btn dark">More</Link>
  </div>
</div>


 
<div className="card">
  <img src="https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Taj Hahal</h5>
    <p class="card-text">The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</p>
     <br></br> <br></br><Link to="/explore" class="btn btn-btn dark">More</Link>
     </div>
</div>


<div className="card">
  <img src="https://media.istockphoto.com/id/667138246/photo/argentina-buenos-aires-dawn-at-center-with-rush-hour.jpg?s=612x612&w=0&k=20&c=7hTjMbmr_2QngDOOy882JT141EDkrAOH4jtog2ErG4k=" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Obelisco</h5>
    <p class="card-text">The Obelisco de Buenos Aires is a national historic monument and icon of Buenos Aires. Located in the Plaza de la República in the intersection of avenues Corrientes and 9 de Julio, it was erected in 1936 to commemorate the quadricentennial of the first foundation of the city.</p>
     <br></br> <br></br> <br></br><Link to="/explore" class="btn btn-btn dark">More</Link>
  </div>
</div>


<div className="card">
  <img src="https://static.toiimg.com/photo/77757963.cms" class="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">State Liberty</h5>
    <p class="card-text">The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. Wikipedia
Address: New York, NY 10004, United States</p>
<Link to="/explore"class="btn btn-btn dark">More</Link>
  </div>
</div>


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

export default Package
