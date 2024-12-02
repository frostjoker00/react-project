import React from "react";
import twitterLogo from "../assets/sociallogo/twitterLogo.png";
import instagramLogo from "../assets/sociallogo/instagramLogo.png";
import facebookLogo from "../assets/sociallogo/facebookLogo.png";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-muted text-white">
            2024-12-7 Capstone Project © R-tech Company, Inc
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                alt="Follow us on Twitter"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Follow us on Instagram"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookLogo}
                alt="Follow us on Facebook"
                width="24"
                height="24"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
