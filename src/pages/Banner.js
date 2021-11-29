import React from 'react';
import Typical from "react-typical";


const Banner = () => {
  return (
    <section className="home_banner_area ">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="banner_content">
                <h3 data-aos="flip-right" class="text-uppercase">Hell0</h3>
                <h1 class="text-uppercase">I am Tofazzal K</h1>
                <h5 class="text-uppercase fw-regular">
                  Junior Certified
                  <Typical
                    steps={["Graphic Designer", 2000, "Web Developer", 1000]}
                    loop={Infinity}
                    wrapper="p"
                  />
                  With 1+ years of experience
                  in this field
                </h5>
                <div
                 
                  class="d-flex align-items-center">
                  <a
                    data-aos="flip-right"
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
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div  class="home_right_img">
                <img data-aos="fade-down-left" class="" src="img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;