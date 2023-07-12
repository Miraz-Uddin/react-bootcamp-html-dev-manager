import { Card, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className="section">
      <Card className="shadow p-5">
        <Card.Body>
          <h3 className="text-center">
            <span>Welcome to</span>
          </h3>
          <h3 className="text-center">
            <span>to</span>
          </h3>
          <h1 className="text-center">
            <span>Dev Manager</span>
          </h1>
          <Row className="mt-4">
            <Col xs={12} sm={10} md={7} className="m-auto">
              <Row>
                <Col xs={12} sm={12} md={6} className="mb-3">
                  <Card
                    style={{ width: "18rem", display: "block", margin: "auto" }}
                  >
                    <Card.Body>
                      <h1 className="text-center">5</h1>
                      <p className="text-center">Total Users</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={6} className="mb-3">
                  <Card
                    style={{ width: "18rem", display: "block", margin: "auto" }}
                  >
                    <Card.Body>
                      <h1 className="text-center">15</h1>
                      <p className="text-center">Total Notes</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
