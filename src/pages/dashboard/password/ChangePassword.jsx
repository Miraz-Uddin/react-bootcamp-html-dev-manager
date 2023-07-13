import DashboardLayout from "@shared/DashboardLayout";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function ChangePassword() {
  return (
    <DashboardLayout activeKey="profileEdit">
      <div className="section">
        <Card className="shadow p-3">
          <Card.Body>
            <h3 className="text-center mb-4">
              <span>Password Change</span>
            </h3>
            <Row>
              <Col xs={12} sm={12}>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formOldPassword"
                  >
                    <Form.Label column sm={3}>
                      Old Password
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Enter Old Password"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formNewPassword"
                  >
                    <Form.Label column sm={3}>
                      New Password
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Type New Password"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formConfirmPassword"
                  >
                    <Form.Label column sm={3}>
                      Confirm Password
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Enter New Password Again"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Col>
                      <Button type="submit">Change</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </DashboardLayout>
  );
}
