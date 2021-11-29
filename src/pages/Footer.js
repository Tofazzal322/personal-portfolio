import React from "react";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <a href="#">
                  <img src="https://i.ibb.co/DRnw9J5/Untitled-3.png" alt="" />
                </a>
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
