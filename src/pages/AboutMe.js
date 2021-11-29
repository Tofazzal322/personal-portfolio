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
              <img class="my-img" src="https://i.ibb.co/tzfP69S/player-4.jpg" alt="" />
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
                I am a junior full stack web developer and graphics designer. I have completed full-stack web development course from Programming Hero and The Complete python Pro Bootcamp from Udemy Academy. 
              </p>
              <p>
                A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.
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
