import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row" id="footer">
        <div className="twelve columns">
           <ul className="social-links">
               <li><a href="/"><i className="fa fa-facebook"></i></a></li>
               <li><a href="https://www.linkedin.com/in/achyut-singh-4b01681a7/"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="/"><i className="fa fa-instagram"></i></a></li>
               <li><a href="/"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://github.com/Rookie768"><i className="fa fa-github"></i></a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2024 <a title="Adyasha" href="!#">Achyut Singh</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
