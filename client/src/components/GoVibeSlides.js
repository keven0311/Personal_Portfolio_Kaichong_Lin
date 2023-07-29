import React, { useState } from "react";
import "./GoVibeSlides.css";
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

function GoVibeSlides() {
  const [slideIdx, setSlideIdx] = useState(0);

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

  const handleSlides = (n) => {
    console.log(slideIdx);
    setSlideIdx((prevIdx) => (prevIdx + n + slides.length) % slides.length);
  };

  const currentSlide = (n) => {
    setSlideIdx(n);
  };

  return (
    <>
      <div className="slides-container">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slides fade ${idx === slideIdx ? "show" : "hide"}`}
          >
            <div className="numbers text-red ">
              {idx + 1} / {slides.length}
            </div>
            <img src={slide.image} alt="GoVibeImage" className="" />
            <div className="text">{slide.comment}</div>
          </div>
        ))}
        <button
          className="prev dark:text-white dark:hover:bg-slate-500"
          onClick={() => handleSlides(-1)}
        >
          ❮
        </button>
        <button
          className="next dark:text-white dark:hover:bg-slate-500"
          onClick={() => handleSlides(1)}
        >
          ❯
        </button>
        <div className="dots-container">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === slideIdx ? "show" : "hide"}`}
              onClick={() => currentSlide(idx)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default GoVibeSlides;
