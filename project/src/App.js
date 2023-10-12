
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import flag from './New folder/flag.png'
import slider from './New folder/slider.jpeg'
import img1 from './New folder/img1.jpg'
import img2 from "./New folder/img2.jpg"
import img3 from "./New folder/img3.jpg"
import img4 from "./New folder/img4.webp"
import logo from "./icons/logo.svg"
function App() {
  return (
    <div className="App">
      {/* Header start */}
      <div className="header">
        <div className="blank"></div>
        <div className="info">
        <div className="booking">Booking.com</div>
          <ul>
            <li><a href="#">INR</a></li>
            <li><a href="#"><img src={flag} alt="flag" height="30px" /></a></li>
            <li><a href="#"><i className="fa-regular fa-circle-question"></i></a></li>
            <li><a href="#">List your property</a></li>
            <li><button><a href="#">Register</a></button></li>
            <li><button><a href="#">Sign in</a></button></li>
          </ul>
          <span className="bars"><i className="fa-solid fa-bars"></i></span>
        </div>
        {/* <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}
      </div>
      {/* Header end */}
      {/* Navbar start */}
      <div className="navbar">
        <ul>
          <li><a href="#" className="active"><i className="fa-solid fa-bed"></i> Stays</a></li>
          <li><a href="#"><i className="fa-solid fa-plane"></i> Flights</a></li>
          <li><a href="#"><i className="fa-solid fa-business-time"></i> Flight + Hotel</a></li>
          <li><a href="#"><i className="fa-solid fa-business-time"></i> Car rentals</a></li>
          <li><a href="#"><i className="fa-solid fa-tree"></i> Attractions</a></li>
          <li><a href="#"><i className="fa-solid fa-taxi"></i> Airport taxis</a></li>
        </ul>
      </div>
      {/* Navbar end */}
      {/* Slider start */}
      <div className="slider" style={{background:`url(${slider})`,backgroundSize:"cover",backgroundPosition:"-100px -30px",backgroundRepeat:"no-repeat"}}>
        <div className="sliderContent">
        <h1>Howzat for a perfect stay</h1>
        <p>Search hotels, homes and much more</p>
        <button><a href="#">Discover more</a></button>
        </div>
        <div className="details">
          <div className="place">
         <span> <i className="fa-solid fa-bed"></i></span>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="date">
          <span><i className="fa-solid fa-calendar"></i></span>
          <a href="#">Check-in Date - Check-out Date</a>
          </div>
          <div className="person">
         <span> <i className="fa-solid fa-user"></i></span><a href="#">2 adults . 0 children . 1 room</a>
          </div>
          <button><a href="#">Search</a></button>
        </div>
      </div>
      {/* slider end */}
      {/* content start */}
      <div className="content">
        <div className="results">
          <li><a href="#">Home </a></li>
          <li><i className="fa-solid fa-angle-right"></i></li>
          <li><a href="#">India</a></li>
          <li><i className="fa-solid fa-angle-right"></i></li>
          <li><a href="#">Goa</a></li>
          <li><i className="fa-solid fa-angle-right"></i></li>
          <li>Search results</li>
        </div>
        <div className="properties">
          <div className="map">
          </div>
          <div className="trip">
            <h4>Goa: 1,907 properties found</h4>
            <p>Get inspiration for your next trip</p>
            <div className="beaches">
              <li className="active"><a href="#"><i className="fa-solid fa-umbrella-beach"></i> Beaches</a></li>
              <li><a href="#"><i className="fa-solid fa-heart-pulse"></i> Romantic</a></li>
              <li><a href="#"><i className="fa-solid fa-people-roof"></i> Family-Friendly</a></li>
              <li><a href="#"><i className="fa-solid fa-moon"></i> Nightlife</a></li>
            </div>
            <div className="sliding">
              <div className="sliding1">
                <img src={img1} alt="" height="60%" width="30%"/>
                <div className="write">
                <h5>Agonda</h5>
                <p>Relax in nature .beaches .Family-friendly</p>
                </div>
              </div>
              <div className="sliding1">
                <img src={img2} alt="" height="60%" width="30%" />
                <div className="write">
                <h5>Arambol</h5>
                <p>Relax in nature .beaches .Family-friendly</p>
                </div>
              </div>
              <div className="sliding1">
              <img src={img3} alt="" height="60%" width="30%" />
              <div className="write">
                <h5>Benaulim</h5>
                <p>Relax in nature .beaches .Family-friendly</p>
                </div>
              </div>
            </div>
            <div className="hotels">
                <div className="hotel_photo">
                  <img src={img4} alt="" height="100%" width="100%"/>
                  <span><i className="fa-regular fa-heart"></i></span>
                </div>
                <div className="hotel_details">
                  <div className="hotel_name">
                    <div className="hotel_title"><a href="#">Hotel Halcyon, Near Candolim Beach</a><span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span></div>
                    <div className="hotel_review"><span>Good</span> 6reviews</div>
                    <div className="hotel_rating">7.2</div>
                  </div>
                  <div className="places_nearby"><a href="#"><span>Candolim Beach, Candolim</span> <span>Show on map</span></a></div>
                  <button><a href="#">Limited-time deal</a></button>
                  <div className="room_type">
                    <div className="room_details">
                      <p>Deluxe Double Room</p>
                      <p>1 queen bed</p>
                      <p>Only 3 rooms left at this price on our site</p>
                    </div>
                    <div className="room_price">
                      <p>1night, 2adults</p>
                      <p><span>$3182 </span>$1909</p>
                      <p>+$229 taxes and charges</p>
                      <button className="available"><a href="#">See availability <i className="fa-solid fa-angle-right"></i></a></button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* content end */}
     </div>
  );
}

export default App;
