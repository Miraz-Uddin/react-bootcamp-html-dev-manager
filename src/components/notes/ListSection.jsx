import {
  Badge,
  Button,
  Card,
  Col,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListSection() {
  return (
    <div className="section">
      <Row>
        <Col xs={10} sm={9} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Note 1</Card.Title>
              <Stack className="mt-3" direction="horizontal" gap={2}>
                <Badge bg="primary">Can be Delayed</Badge>
                <Badge bg="danger">Urgent</Badge>
              </Stack>
              <ProgressBar className="my-3" animated now={45} label={"45%"} />

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
            <Card.Body>
              <Card.Title>Note 1</Card.Title>
              <Stack className="mt-3" direction="horizontal" gap={2}>
                <Badge bg="primary">Can be Delayed</Badge>
                <Badge bg="danger">Urgent</Badge>
              </Stack>
              <ProgressBar className="my-3" animated now={45} label={"45%"} />

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
            <Card.Body>
              <Card.Title>Note 1</Card.Title>
              <Stack className="mt-3" direction="horizontal" gap={2}>
                <Badge bg="primary">Can be Delayed</Badge>
                <Badge bg="danger">Urgent</Badge>
              </Stack>
              <ProgressBar className="my-3" animated now={45} label={"45%"} />

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
      </Row>
    </div>
  );
}
