// imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// images
import Woodworking from "./img/woodworking.png";
import Plumbing from "./img/plumbing.png";
import Welding from "./img/welding.png";
import Electrical from "./img/electrical.png";
import Automotive from "./img/automotive.png";
import General from "./img/general.png";

// component
const Homepage = () => {
  return (
    <>
      <h1 className="mb-5 homePageHeader">
        Share Tools &amp; Equipment With Friends, Family, Neighbors
      </h1>
      <Container>
        <Row className="mb-3">
          <Col sm={4}>
            WOODWORKING
            <Link to="/inventory">
              <img
                src={Woodworking}
                alt="Woodworking"
                className="d-block w-100 homeGridImg"
              />
            </Link>
          </Col>
          <Col sm={4}>
            PLUMBING
            <Link to="/inventory">
              <img
                src={Plumbing}
                alt="Plumbing"
                className="d-block w-100 homeGridImg"
              />
            </Link>
          </Col>
          <Col sm={4}>
            WELDING
            <Link to="/inventory">
              <img
                src={Welding}
                alt="Welding"
                className="d-block w-100 homeGridImg"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col sm={4}>
              ELECTRICAL
              <Link to="/inventory">
                <img
                  src={Electrical}
                  alt="Electrical"
                  className="d-block w-100 homeGridImg"
                />
              </Link>
            </Col>
            <Col sm={4}>
              AUTOMOTIVE
              <Link to="/inventory">
                <img
                  src={Automotive}
                  alt="Automotive"
                  className="d-block w-100 homeGridImg"
                />
              </Link>
            </Col>
            <Col sm={4}>
              GENERAL
              <Link to="/inventory">
                <img
                  src={General}
                  alt="General"
                  className="d-block w-100 homeGridImg"
                />
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

// export
export default Homepage;
