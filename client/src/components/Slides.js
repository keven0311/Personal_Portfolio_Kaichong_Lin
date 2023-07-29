import Carousel from "react-bootstrap/Carousel";
import favoritesSearch from "../images/GiVibe/GoVibe-favorites-search.png";
import favorites from "../images/GiVibe/GoVibe-favorites.png";
import home from "../images/GiVibe/GoVibe-Home.png";
import itinerary from "../images/GiVibe/GoVibe-itinerary.png";
import loginpage from "../images/GiVibe/GoVibe-loginpage.png";
import mapstrails from "../images/GiVibe/GoVibe-maps-trails.png";
import profilepage from "../images/GiVibe/GoVibe-profilepage.png";
import singleactivity from "../images/GiVibe/GoVibe-singleactivity.png";
import welcome from "../images/GiVibe/GoVibe-Welcome.png";
import welcomeTwo from "../images/GiVibe/GoVibe-Welcome2.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "bootstrap/dist/css/bootstrap.min.css";

function Slides() {
  const slides = [
    { image: welcome, comment: "Welcome" },
    { image: welcomeTwo, comment: "Welcome" },
    { image: home, comment: "Home" },
    { image: mapstrails, comment: "Trails" },
    { image: singleactivity, comment: "Single Activity" },
    { image: favorites, comment: "Favorite List" },
    { image: favoritesSearch, comment: "Searchable" },
    { image: itinerary, comment: "Today`s Vibe" },
    { image: loginpage, comment: "Log In" },
    { image: profilepage, comment: "Profile" },
  ];
  return (
    <Carousel
      className={styles.Carousel}
      style={{
        width: "50%",
        height: "100%",
        maxWidth: "315px",
        minWidth: "300px",
      }}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img alt="govibeimg" src={slide.image} className="d-block w-100" />
          <Carousel.Caption>
            <h3>{slide.comment}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slides;
