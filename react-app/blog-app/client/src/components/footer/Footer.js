import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h6 className="footer-heading text-uppercase text-white">Information</h6>
            <ul className="list-unstyled footer-link mt-4">
              <li><a href="#">Pages</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="footer-heading text-uppercase text-white">Resources</h6>
            <ul className="list-unstyled footer-link mt-4">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
            <p className="contact-info mt-4">Need help? Contact us at</p>
            <p className="contact-info">+91 6300107109</p>
            <p className="contact-info">✉ myawesomeblog@gmail.com</p>

          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="footer-alt mb-0 f-14">2024 © my Awesome blog, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
