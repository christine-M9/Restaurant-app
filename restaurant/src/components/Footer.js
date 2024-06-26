import React from "react";
import {FaEnvelope,FaTwitter,FaLinkedin, FaMobile, FaInstagram} from 'react-icons/fa'



function Footer() {
  return (
    // <div className="main-footer">
      <div className="container">
        <div className="row-footer">
        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">CeeJay Restaurant</h2>
          <ul className="unstyledlist">
          <li>224-3334-809</li>
          <li>Nairobi, Kenya</li>
          <li>00100, Nairobi</li>
          </ul>

        </div>

        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">ChEF</h2>
          <ul className="unstyledlist">
          <li>Christine J</li>
          <li>Mathew J</li>
          <li>Elizabeth J</li>
          </ul>
          
        </div>
        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">Contact Us</h2>
          <ul className="unstyledlist">
          <li><FaTwitter/>Twitter</li>
          <li><FaLinkedin/>LinkedIn</li>
          <li><FaInstagram/>Instagram</li>
          <li><FaEnvelope/> christinejuma22699@gmail</li>
          <li><FaMobile/> +254741925566</li>
          </ul>
          
        </div>

        </div>
        <hr/>
        <div className="row">
          <p className="paragraph">
            &copy;{new Date().getfullYear} CEEJAY RESTAURANT | All rights reserved | Terms of service | Privacy
          </p>

        </div>

      </div>

    // </div>
    
  )
}

export default Footer;