// import { Col, Row } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oc2mhz7",
        "template_3xwdyow",
        form.current,
        "user_zaxZNjWfoiEa5IhqSE7Yi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    
    <section data-aos="flip-left"
              data-aos-offset="200"
              data-aos-duration="2000" className="contact_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home"></i>
                <h6>Muscat, Oman</h6>
                <p>Madinath,Sultan Qaboos</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset"></i>
                <h6>
                  <a href="#">+968 93554255</a>
                </h6>
                <p>Sun to Thursday 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope"></i>
                <h6>
                  <a href="#">support@gmail.com</a>
                </h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form
              ref={form}
              className="row contact_form"
              onSubmit={sendEmail}
              action="contact_process.php"
              method="post"
              id="contactForm"
              novalidate="novalidate"
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="primary_btn">
                                <span>Send Message</span>
                            </button>
                        </div>

             
            </form>
          </div>
        </div>
        <div
          id="mapBox"
          className="mapBox"
          data-lat="40.701083"
          data-lon="-74.1522848"
          data-zoom="13"
          data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
          data-mlat="40.701083"
          data-mlon="-74.1522848"
        ></div>
      </div>
    </section>
  );
};

export default Contact;
