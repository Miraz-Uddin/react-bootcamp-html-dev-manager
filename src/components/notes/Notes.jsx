import NotePlaceholder from "@/assets/note.svg";
import NoteDummy from "@/assets/noteDummy.jpg";
import { Button, Card, Col, Placeholder, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <div className="section">
      <Row>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={NoteDummy} />
            <Card.Body>
              <Card.Title>Dummy Note</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit consectetur amet adipisicing elit.
                Consequatur blanditiis ratione ratione ratione.
              </Card.Text>
              <Link to="/notes/1">
                <Button variant="primary" size="sm" className="me-2 mb-2">
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={NotePlaceholder} />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={NoteDummy} />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Button>View Note</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
