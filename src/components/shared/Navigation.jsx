import Logo from "@/assets/dev-logo.png";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <Image src={Logo} alt="Dev Logo" fluid />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
              <NavLink className="nav-link" to="dashboard">
                <strong className="text-purple">Sherlock Holmes</strong>
              </NavLink>
              <NavDropdown.Divider />
              <NavLink className="nav-link" to="dashboard/password/change">
                Change Password
              </NavLink>
              <NavLink className="nav-link" to="login">
                Logout
              </NavLink>
            </NavDropdown>
            <NavLink className="nav-link" to="register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
