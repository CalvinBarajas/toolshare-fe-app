import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Tools } from "react-bootstrap-icons";

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            ToolShare <Tools className="logoNavbar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">How It Works</Nav.Link>
              <Nav.Link href="#pricing">Inventory</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Woodworking
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Plumbing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Welding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Electrical
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Automotive
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">General</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.7">
                  All Categories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
};

export default NavigationBar;
