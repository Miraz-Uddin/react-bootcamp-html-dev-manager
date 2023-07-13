import { Button, Card, Col, Form, Row } from "react-bootstrap";
export default function PasswordReset() {
  return (
    <div className="section">
      <Card className="shadow p-3">
        <Card.Body>
          <h3 className="text-center mb-4">
            <span>Password Reset</span>
          </h3>
          <Row>
            <Col xs={12} sm={8} className="m-auto">
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email to Reset Password"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Send Password Reset Email</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
