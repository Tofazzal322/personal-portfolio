import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Contact from './Contact';

const Banner = () => {
    return (
      // <div>
      //     <Row>
      //         <Col className="bg-success ms-4">
      //            <Nav.Link
      //       as={HashLink}
      //       className="nav-items text-light"
      //       to="/home#banner"
      //     >
      //       Home
      //     </Nav.Link>

      //     <Nav.Link
      //       as={HashLink}
      //       className="nav-items text-light"
      //       to="/projects"
      //     >
      //       Projects
      //     </Nav.Link>
      //     <Nav.Link
      //       as={HashLink}
      //       className="nav-items text-light"
      //       to="/AboutMe"
      //     >
      //       About Me
      //     </Nav.Link>
      //     <Nav.Link
      //       as={HashLink}
      //       className="nav-items text-light"
      //       to="/contact"
      //     >
      //       Contact Me
      //     </Nav.Link>
      //         </Col>

      //         <Col><img alt="bannerImg" className="banner-img " src="https://i.ibb.co/tzfP69S/player-4.jpg" />
      //         </Col>

      //         <Col>
      //             <Contact></Contact>
      //     </Col>

      //     </Row>

      // </div>

      //   <section class="banner_area">
      //     <div class="banner_inner d-flex align-items-center">
      //         <div class="container">
      //             <div class="banner_content text-center">
      //                 <h2>About Us</h2>
      //                 <div class="page_link">
      //                     <a href="index.html">Home</a>
      //                     <a href="about.html">About</a>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // </section>

      <section class="home_banner_area">
        <div class="banner_inner">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="banner_content">
                  <h3 class="text-uppercase">Hell0</h3>
                  <h1 class="text-uppercase">I am Tofazzal K</h1>
                  <h5 class="text-uppercase fw-regular">
                    Junior Certified Graphic Designer & Web Developer. With 1+
                    years of experience in this field
                  </h5>
                  <div class="d-flex align-items-center">
                    <a
                      class="primary_btn"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/tofazzal-k-829241227/"
                    >
                      <span>Hire Me</span>
                    </a>
                    <a
                      className="primary_btn tr-bg "
                      target="_blank"
                      rel="noreferrer"
                     href="https://drive.google.com/file/d/1alCbtHqHfpzEjEo0JxP1p7hL95B3ZawO/view?usp=sharing"
                    >
                      <span >Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="home_right_img">
                  <img class="" src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;