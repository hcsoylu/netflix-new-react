import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";

const Footernet = (props) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <footer className="container" style={{ color: "gray" }}>
      <section class="link">
        <div class="logos">
          <a href="backofficeNetflix.html"><i class="fab fa-facebook-square fa-2x logo"></i></a>
          <a href="backofficeNetflix.html"><i class="fab fa-instagram fa-2x logo"></i></a>
          <a href="backofficeNetflix.html"><i class="fab fa-twitter fa-2x logo"></i></a>
          <a href="backofficeNetflix.html"><i class="fab fa-youtube fa-2x logo"></i></a>
        </div>
        <div class="sub-links">
          <ul>
            <li><a href="backofficeNetflix.html">Audio and Subtitles</a></li>
            <li><a href="backofficeNetflix.html">Audio Description</a></li>
            <li><a href="backofficeNetflix.html">Help Center</a></li>
            <li><a href="backofficeNetflix.html">Gift Cards</a></li>
            <li><a href="backofficeNetflix.html">Media Center</a></li>
            <li><a href="backofficeNetflix.html">Investor Relations</a></li>
            <li><a href="backofficeNetflix.html">Jobs</a></li>
            <li><a href="backofficeNetflix.html">Terms of Use</a></li>
            <li><a href="backofficeNetflix.html">Privacy</a></li>
            <li><a href="backofficeNetflix.html">Legal Notices</a></li>
            <li><a href="backofficeNetflix.html">Contact Us</a></li>
            <Link className="nav-link" to={`/${props.link.toLowerCase()}`}>{props.link}</Link>
          </ul>
        </div>
      </section>
      </footer>
    </div>
  );
}

export default withRouter(Footernet);

