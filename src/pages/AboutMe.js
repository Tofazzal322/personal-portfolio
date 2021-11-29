import React from "react";
// import { Col, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    // <div className="container mt-5 mb-5">
    //     <h1 className="text-danger"> About Me section</h1>
    //     <Row>
    //         <Col>
    //             <h4 className="text-primary"> About Me</h4>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium expedita incidunt repellat repellendus alias explicabo minima asperiores iusto cupiditate blanditiis illo aliquam vero quaerat perspiciatis fugiat numquam culpa, ea, ab in consectetur atque commodi libero quos. Obcaecati ad exercitationem eum corporis possimus omnis asperiores, quasi eveniet, eaque saepe totam.</p>
    //         </Col>
    //         <Col>
    //             <img className=" aboutMe-img" src="https://i.ibb.co/tzfP69S/player-4.jpg" alt="" />
    //         </Col>
    //     </Row>
    // </div>

    <section class="about_area section_gap">
      <div class="container">
        <div class="row justify-content-start align-items-center">
          <div class="col-lg-5">
            <div class="about_img">
              <img class="" src="img/about-us.png" alt="" />
            </div>
          </div>

          <div class="offset-lg-1 col-lg-5">
            <div class="main_title text-left">
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
                Whose given. Were gathered. There first subdue greater. Bearing
                you Whales heaven midst their. Beast creepeth. Fish days.
              </p>
              <p>
                Is give may shall likeness made yielding spirit a itself
                together created after sea is in beast beginning signs open god
                you're gathering whose gathered cattle let. Creature whales
                fruit unto meat the life beginning all in under give two.
              </p>
              <a
                target="_blank"
                alt="resume"
                rel="noreferrer"
                className="primary_btn"
                href="https://drive.google.com/file/d/1alCbtHqHfpzEjEo0JxP1p7hL95B3ZawO/view?usp=sharing"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
