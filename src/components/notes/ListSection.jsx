import NotePlaceholder from "@/assets/note.svg";
import NoteDummy from "@/assets/noteDummy.jpg";
import { Button, Card, Col, Placeholder, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListSection() {
  return (
    <div className="section">
      <Row>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={NoteDummy} />
            <Card.Body>
              <Card.Title>Note 1</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit consectetur amet adipisicing elit.
                Consequatur blanditiis.
              </Card.Text>
              <Link to="/dashboard/notes/1">
                <Button variant="primary" className="me-2 mb-2">
                  View
                </Button>
              </Link>
              <Link to="/dashboard/notes-edit/1">
                <Button variant="success" className="me-2 mb-2">
                  Edit
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={NoteDummy} />
            <Card.Body>
              <Card.Title>Note 2</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit consectetur amet adipisicing elit.
                Consequatur blanditiis.
              </Card.Text>
              <Link to="/dashboard/notes/2">
                <Button variant="primary" className="me-2 mb-2">
                  View
                </Button>
              </Link>
              <Link to="/dashboard/notes-edit/2">
                <Button variant="success" className="me-2 mb-2">
                  Edit
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} sm={9} md={6} lg={4}>
          <Card>
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
              <Placeholder.Button variant="primary" className="me-2" xs={3} />
              <Placeholder.Button variant="success" xs={3} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
