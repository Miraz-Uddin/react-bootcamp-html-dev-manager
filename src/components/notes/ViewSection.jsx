import style from "@notes/Notes.module.css";
import {
  Badge,
  Card,
  Col,
  Figure,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";
export default function ViewSection() {
  return (
    <div className="section">
      <Card>
        <Row className={`${style.noteCardTop} g-0`}>
          <Col sm={12} md={6}>
            <Card.Body>
              <Figure>
                <Card.Title className="mb-4">Prepare Presentation</Card.Title>
                <Figure.Caption className="blockquote-footer">
                  Task-1:{" "}
                  <cite title="Source Title" className="focused">
                    R & D on the Web
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Task-2:{" "}
                  <cite title="Source Title" className="focused">
                    Gather All Results
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Task-3:{" "}
                  <cite title="Source Title" className="focused">
                    Download Necessary Images
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Task-4:{" "}
                  <cite title="Source Title" className="focused">
                    Make The Slides
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Task-5:{" "}
                  <cite title="Source Title" className="focused">
                    Proof Reading
                  </cite>
                </Figure.Caption>
              </Figure>
            </Card.Body>
          </Col>
          <Col sm={12} md={6} className="pt-3">
            <Row>
              <Col>
                Task Overall Progress:
                <ProgressBar animated now={45} label={"45%"} />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                Task Category:
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="primary">Can be Delayed</Badge>
                  <Badge bg="danger">Urgent</Badge>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card.Body>
              <Card.Subtitle className="mb-1">Note Details</Card.Subtitle>
              <Card.Text>
                Sherlock Holmes, fictional character created by the Scottish
                writer Arthur Conan Doyle.As the world’s first and only
                “consulting detective,” he pursued criminals throughout
                Victorian and Edwardian London, the south of England, and
                continental Europe.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
