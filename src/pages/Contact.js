import { Col, Row } from "react-bootstrap";
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
    // <div classNameName="mt-5 mb-5 container border  ">
    //   <h1 classNameName="text-primary"> Contact Me </h1>
    //   <Row classNameName="mt-3 mb-3">
    //     <Col classNameName="mt-3" sm={12} md={6}>
    //       <Row>
    //         <h4 classNameName="text-success fw-bold "> Address</h4>
    //         <p> Muscat, Oman</p>
    //       </Row>
    //       <Row>
    //         <h4 classNameName="text-success fw-bold ">Phone</h4>
    //         <p> +968 94554255 <br /> +968 94526429</p>
    //         {/* <p> +968 94554255</p> */}
    //       </Row>
    //       <Row>
    //         <h4 classNameName="text-success fw-bold "> Email</h4>
    //         <p> tofazzal.tk3222@gmail.com <br /> topuahammed322@gmail.com</p>
    //         {/* <p> tofazzal.tk3222@gmail.com</p> */}
    //       </Row>
    //     </Col>
    //     <Col sm={12} md={6}>
    //       <h4 classNameName="text-success fw-bold ">Quick Message </h4>
    //       <form classNameName="d-block w-100" ref={form} onSubmit={sendEmail}>
    //         <div classNameName="half left cf">
    //           <input
    //             classNameName="d-block w-100 mt-2"
    //             type="text"
    //             name="name"
    //             id="input-name"
    //             placeholder="Name"
    //           />
    //           <input
    //             classNameName="d-block w-100 mt-2"
    //             type="email"
    //             name="email"
    //             id="input-email"
    //             placeholder="Email address"
    //           />
    //           <input
    //             classNameName="d-block w-100 mt-2"
    //             type="text"
    //             id="input-subject"
    //             placeholder="Subject"
    //             name="subject"
    //           />
    //         </div>
    //         <div classNameName="d-block w-100">
    //           <textarea
    //             classNameName="d-block w-100 text-area mt-2"
    //             name="message"
    //             type="text"
    //             id="input-message"
    //             placeholder="Message"
    //           ></textarea>
    //         </div>
    //         <input
    //           classNameName="d-block w-100 mt-2"
    //           type="submit"
    //           value="Send"
    //           id="input-submit"
    //         />
    //       </form>
    //     </Col>
    //   </Row>
    // </div>
    <section className="contact_area section_gap">
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

              {/* <input
                classNameName="d-block w-50 mt-2"
                type="submit"
                value="Send"
                id="input-submit"
              /> */}
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
