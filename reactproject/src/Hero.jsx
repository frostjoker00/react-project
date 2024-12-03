import React from "react";
import "./bg.css";
import heroImage from "./assets/carousel/hero.png";
import backgroundVideo from "./assets/bg.mp4";

function Hero() {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-12 col-sm-8 col-lg-6 d-flex justify-content-center ps-4">
              <img
                src={heroImage}
                className="rounded d-block mx-lg-auto img-fluid"
                width="300"
                alt="hero"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-secondary lh-1 mb-3">
                Build Your Dream PC with Top-Quality GPUs, RAM, and CPUs
              </h1>
              <p className="lead">
                Power up your performance with the latest in high-performance
                GPUs, RAM, and CPUs — everything you need to build your ultimate
                PC.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4 me-md-2"
                >
                  <a
                    href="/products"
                    className="text-decoration-none text-white"
                  >
                    Products
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
