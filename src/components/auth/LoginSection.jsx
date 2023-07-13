import style from "@auth/Auth.module.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginSection() {
  return (
    <div className="section">
      <Card className="shadow p-3">
        <Card.Body>
          <h3 className="text-center mb-4">
            <span>Login</span>
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
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}></Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorizontalCheck">
                  <Row>
                    <Col xs={0} sm={0} md={2}></Col>
                    <Col xs={12} sm={6} md={5}>
                      <Form.Check label="Remember me" />
                    </Col>
                    <Col xs={12} sm={6} md={5}>
                      <Link className={style.forgot} to="/password/reset">
                        Forgot Password ?
                      </Link>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
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
