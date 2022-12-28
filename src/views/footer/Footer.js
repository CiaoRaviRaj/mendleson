import React from "react";

import "./Footer.css";

import facebook from "../../assets/images/footer/facebook.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import google from "../../assets/images/footer/search.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container section_wrapper">
        <div className="footer_wrapper">
          <div className="row footer_contexts">
            <div className="col-md-3 col-sm-12 footer_socials">
              <p className="footer_socials_title">Social</p>
              <div className="footer_socials_logos">
                <span>
                  <img src={facebook} alt="facebook" />{" "}
                </span>
                <p>Facebook</p>
              </div>
              <div className="footer_socials_logos">
                <span>
                  <img src={linkedin} alt="linkedin" />
                </span>
                <p>LinkedIn</p>
              </div>
              <div className="footer_socials_logos">
                <span>
                  <img src={google} alt="Google" />
                </span>
                <p>Google</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-12  footer_explores">
              <p className="footer_explores_title">Explore</p>
              <div className="footer_explores_items">
                <p>Service</p>
              </div>
              <div className="footer_explores_items">
                <p>Team</p>
              </div>
              <div className="footer_explores_items">
                <p>Clients</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-12  footer_contacts">
              <p className="footer_contacts_title">Contact</p>
              <div className="footer_contacts_items">
                <p>Lorem Ipsum dummy address</p>
              </div>
              <div className="footer_contacts_items">
                <p>used for display </p>
              </div>
              <div className="footer_contacts_items">
                <p>1234567890</p>
              </div>
            </div>

            <div className="col-xl-3 col-12 user_details">
              <div className="user_email_label">
                <p>Email</p>
              </div>
              <div className="user_email">
                <p>mendlesoncommunication@email.com</p>
              </div>
            </div>
          </div>

          <div className="footer_copyright">
            <p>© Copyright 2018 Mendleson Communication Pty Ltd </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
