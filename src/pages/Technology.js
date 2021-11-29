import React from "react";
import { Col, Row } from "react-bootstrap";

const Technology = () => {
  return (
    <div className="container">
      <h1 className="technology-title"> Technology Used</h1>
      <Row className="mt-5 mb-2">
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-left"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/G9pQ5wG/html-1.png"
            alt=""
          />
        </Col>
        <Col
          data-aos="fade-down"
          data-aos-duration="2000"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/8K1DcQQ/javascript.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="fade-right"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/f8TryS8/html3.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-left"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/ctjTZsr/react.png"
            alt=""
          />
        </Col>
      </Row>
      <Row>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-left"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/Xbr5mg2/nodejs.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-right"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/5Lxbcvs/firebase.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-left"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/mSvtkYY/mongodb.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="fade-down"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/nbvgqCS/netlify.png"
            alt=""
          />
        </Col>
      </Row>
      <Row className="mt-2 mb-5">
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="fade-down"
          className="technology-icon-body"
        >
          <img
            className="technology-icon w-50"
            src="https://i.ibb.co/YRFZC0F/Git-Hub-logo.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-right"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/RB15ZvF/heroku.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="fade-down"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/CvMwdxg/bootstrap.png"
            alt=""
          />
        </Col>
        <Col
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="flip-right"
          className="technology-icon-body"
        >
          <img
            className="technology-icon"
            src="https://i.ibb.co/wdbtjLP/twitter-square-daf77586b35e90319725e742f6e069f9.jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Technology;
