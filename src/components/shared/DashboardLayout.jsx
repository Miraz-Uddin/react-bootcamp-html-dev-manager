import { Col, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function DashboardLayout({ children, activeKey }) {
  return (
    <Row>
      <Col sm={3}>
        <Nav className="tabNavParent flex-column">
          <Nav.Item>
            <NavLink
              className={`tabNav ${
                activeKey === "dashboard" ? "tabActive" : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={`tabNav ${
                activeKey === "notesView" ? "tabActive" : ""
              }`}
              to="/dashboard/notes"
            >
              View All Notes
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={`tabNav ${
                activeKey === "notesAdd" ? "tabActive" : ""
              }`}
              to="/dashboard/notes-add"
            >
              Add Note
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={`tabNav ${
                activeKey === "profileView" ? "tabActive" : ""
              }`}
              to="/dashboard/profile"
            >
              Profile
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={`tabNav ${
                activeKey === "profileEdit" ? "tabActive" : ""
              }`}
              to="/dashboard/profile/edit"
            >
              Update Profile
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={`tabNav ${activeKey === "logout" ? "tabActive" : ""}`}
              to="/login"
            >
              Logout
            </NavLink>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>{children}</Col>
    </Row>
  );
}

export default DashboardLayout;
