import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
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
      
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <h2>About Us</h2>
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;