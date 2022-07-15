// imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Woodworking from "./img/woodworking.png";
import Plumbing from "./img/plumbing.png";
import Welding from "./img/welding.png";
import Electrical from "./img/electrical.png";
import Automotive from "./img/automotive.png";
import General from "./img/general.png";

import { Badge } from "react-bootstrap";

// component
const Homepage = () => {
  return (
    <>
      <h1 className="mb-5">
        Equipment Categories <Badge bg="secondary">New</Badge>
      </h1>
      <Container>
        <Row className="mb-3">
          <Col sm={4}>
            Woodworking
            <img
              src={Woodworking}
              alt="Woodworking"
              className="d-block w-100"
            />
          </Col>
          <Col sm={4}>
            Plumbing
            <img src={Plumbing} alt="Plumbing" className="d-block w-100" />
          </Col>
          <Col sm={4}>
            Welding
            <img src={Welding} alt="Welding" className="d-block w-100" />
          </Col>
        </Row>
        <Row>
          <Row>
            <Col sm={4}>
              Electrical
              <img
                src={Electrical}
                alt="Electrical"
                className="d-block w-100"
              />
            </Col>
            <Col sm={4}>
              Automotive
              <img
                src={Automotive}
                alt="Automotive"
                className="d-block w-100"
              />
            </Col>
            <Col sm={4}>
              General
              <img src={General} alt="General" className="d-block w-100" />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

// export
export default Homepage;
