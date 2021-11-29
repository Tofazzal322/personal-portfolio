import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../style/style.css";
// import "../style/font-awesome.min.css";
// import "../style/normalize.min.css";
// import "../../public/style/style.css";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="menu-bg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link className="nav-brand " to="/home">
              Personal Portfolio
              {/* <img src="https://i.ibb.co/DRnw9J5/Untitled-3.png" alt="" /> */}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/home#banner"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/projects"
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/Skills"
            >
              Services
            </Nav.Link>

            <Nav.Link as={HashLink} className="nav-items text-light" to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/AboutMe"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/contact"
            >
              Contact Me
            </Nav.Link>

            {/* <Nav.Link>
              {user?.email ? (
                <div className="d-flex">
                  <Nav.Link
                    as={HashLink}
                    className="nav-items text-light"
                    to="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>
                  <Button
                    className=" nav-items-btn text-dark "
                    onClick={logOut}
                    variant="button"
                  >
                    Logout
                  </Button>
                  <Navbar.Text className="ms-3">
                    Mr .
                    <Link className="ps-2" to="/home">
                      {user?.displayName}
                    </Link>
                  </Navbar.Text>
                </div>
              ) : (
                <Button className="btn" variant="button ">
                  {" "}
                  <Link className="nav-items-btn" to="/login">
                    Login
                  </Link>
                </Button>
              )}
            </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
