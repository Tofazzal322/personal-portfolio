import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
// import { Card } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    fetch("./testingData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Row className="container projects-card">
      <div
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-duration="2000"
        class="main_title text-left"
      >
        <h2>
          quality work <br />
          Recently done
          <span
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-duration="3000"
            className="text-warning"
          >
            projects
          </span>
        </h2>
      </div>
      <Row className="mb-5">
        <Col className="">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px", height: "300px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p1.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Abeer Healthcare</Card.Title>
                  <Card.Text>Hospitality Website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://abeer-healthcare.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://abeer-healthcare.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/abeer-healthcare"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/abeer-healthcare"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>

        <Col>
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px", height: "300px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p2.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Zahara Tours </Card.Title>
                  <Card.Text>Tourism Service Website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://zahara-tours.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://zahara-tours.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/zahara-tours-cliect-side"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/zahara-tours-interactive-website-server"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>

        <Col>
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px", height: "300px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p3.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Honda CVR</Card.Title>
                  <Card.Text>E-commerce website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-ui"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-server"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px", height: "300px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p4.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Az Security System</Card.Title>
                  <Card.Text>E-commerce website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-ui"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-server"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>

        <Col>
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p9.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Az Security System</Card.Title>
                  <Card.Text>E-commerce website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-ui"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-server"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>

        <Col>
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: "250px", height: "300px" }}
          >
            <Card style={{ width: "18rem" }}>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
                <Card.Img variant="top" src="img/portfolio/p6.jpg" />
              </FrontSide>
              <BackSide>
                <Card.Body className="flippy-backSide">
                  <Card.Title>Az Security System</Card.Title>
                  <Card.Text>E-commerce website</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      View Details
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://az-security-system.web.app/"
                  >
                    <Button variant="primary">Live Site</Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-ui"
                  >
                    <Button className="mb-2 m-2" variant="primary">
                      Client Code
                    </Button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Tofazzal322/az-security-system-server"
                  >
                    <Button variant="primary">Server Code</Button>
                  </a>
                </Card.Body>
              </BackSide>
            </Card>
          </Flippy>
        </Col>
      </Row>
    </Row>

    // <section class="portfolio_area section_gap_top" id="portfolio">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-lg-12">
    //         <div
    //           data-aos="flip-left"
    //           data-aos-offset="200"
    //           data-aos-duration="2000"
    //           class="main_title text-left"
    //         >
    //           <h2>
    //             quality work <br />
    //             Recently done
    //             <span
    //               data-aos="flip-right"
    //               data-aos-offset="200"
    //               data-aos-duration="3000"
    //               className="text-warning"
    //             >
    //               projects
    //             </span>
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       data-aos="zoom-in"
    //       data-aos-offset="200"
    //       data-aos-duration="1000"
    //       class="filters portfolio-filter"
    //     >
    //       <ul>
    //         <li class="active" data-filter="*">
    //           all
    //         </li>
    //         <li data-filter=".popular">popular</li>
    //         <li data-filter=".latest"> latest</li>
    //         <li data-filter=".following">following</li>
    //         <li data-filter=".upcoming">upcoming</li>
    //       </ul>
    //     </div>

    //     <div class="filters-content">
    //       <div class="row portfolio-grid justify-content-center">
    //         <div class="col-lg-4 col-md-6 all latest">
    //           <div

    //             class="portfolio_box">

    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all popular">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p2.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p2.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">Az Security system</a>
    //               </h4>
    //               <p>E-Commerce website</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all latest">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p3.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p3.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">Zahara Tours & Travel</a>
    //               </h4>
    //               <p>Tourism Services</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all popular">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p4.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p4.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">Honda CRV</a>
    //               </h4>
    //               <p>Business Website</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all following">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p6.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p5.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">AZ Shopping center </a>
    //               </h4>
    //               <p>E-commerce website</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all upcoming">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p5.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p6.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">Honda CRV</a>
    //               </h4>
    //               <p>Business website</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all upcoming following">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p7.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p7.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">green heaven</a>
    //               </h4>
    //               <p>Animated, portfolio</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all following">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p8.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p8.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>fly male</h4>
    //               <p>Animated, portfolio</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-4 col-md-6 all upcoming">
    //           <div class="portfolio_box">
    //             <div class="single_portfolio">
    //               <img
    //                 class="img-fluid w-100"
    //                 src="img/portfolio/p9.jpg"
    //                 alt=""
    //               />
    //               <div class="overlay"></div>
    //               <a href="img/portfolio/p9.jpg" class="img-gal">
    //                 <div class="icon">
    //                   <span class="lnr lnr-cross"></span>
    //                 </div>
    //               </a>
    //             </div>
    //             <div data-aos="zoom-out-down" class="short_info">
    //               <h4>
    //                 <a href="portfolio-details.html">season face</a>
    //               </h4>
    //               <p>Animated, portfolio</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;
