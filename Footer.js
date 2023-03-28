import "./FooterStyles.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Arifwala Pakistan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
            <a href="tel:+92-315-695-2648"><FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />+92-315-695-2648</a>
            </h4>
          </div>
          <div className="email">
            <h4>
            <a href="https://TajamalHussain122@outlook.com"><FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              /></a>
              TajamalHussain122@outlook.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Little-Bit is a Software Company.
          </p>
          <div className="social">
            <a href="https://mail.google.com/mail/u/0/?tab=mm#inbox">
                <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></a>
            <a href="https://www.instagram.com/ahmad_tajamal157/">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-tajamal-bhatti-198419177/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/GhumNamHero">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004563829159">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.youtube.com/@learnwithtajamal2320">
              <FaYoutube
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
