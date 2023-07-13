import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function RegisterSection() {
  return (
    <div className="section">
      <Card className="shadow p-3">
        <Card.Body>
          <h3 className="text-center mb-4">
            <span>Registration</span>
          </h3>
          <Form>
            <Row>
              <Col xs={12} sm={11} md={6}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                  <Form.Text className="text-danger">
                    First Name Validation
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProfession">
                  <Form.Label>Profession</Form.Label>
                  <Form.Select>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>Web Architect</option>
                    <option>Graphic Designer</option>
                    <option>Support Engineer</option>
                    <option>DevOPS Engineer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="me-3">Gender</Form.Label>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type={"radio"}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type={"radio"}
                  />
                  <Form.Check
                    inline
                    label="Others"
                    name="gender"
                    type={"radio"}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="formShortBio"
                    className="mb-3"
                    label="Short Bio"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Say Something About You"
                      style={{ height: "106px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col xs={12} sm={11} md={6}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                  <Form.Text className="text-danger">
                    Last Name Validation
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDOB">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProfilePicture">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="formAddress"
                    className="mb-3"
                    label="Address"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Home Address"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register Now
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
