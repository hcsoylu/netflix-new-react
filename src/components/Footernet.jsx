import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footernet() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <footer className="container" style={{ color: "gray" }}>
        <div className="row d-flex">
          <div className="col">
            <ul>
              <li>Audio/Subtitles</li>
              <li>Media Centre</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
              <li>Audio Description</li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <li>Service Code</li>
              <li>Investor Relations</li>
              <li>Audio Description</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <li>Legal Notices</li>
              <li>Investor Relations</li>
              <li>Contact Us</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footernet;
