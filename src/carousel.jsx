import React, { useEffect } from "react";
import vid1 from "./assets/carousel/1.mp4";
import vid2 from "./assets/carousel/2.mp4";
import vid3 from "./assets/carousel/3.mp4";

function VideoCarousel() {
  useEffect(() => {
    const carouselElement = document.getElementById("videoCarousel");
    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
    });
  }, []);

  return (
    <div
      id="videoCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      style={{ maxWidth: "60%", margin: "auto", paddingTop: "40px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="rounded d-block w-100" autoPlay muted loop>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>

        <div className="carousel-item">
          <video className="rounded d-block w-100" autoPlay muted loop>
            <source src={vid2} type="video/mp4" />
          </video>
        </div>

        <div className="carousel-item">
          <video className="rounded d-block w-100" autoPlay muted loop>
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default VideoCarousel;
