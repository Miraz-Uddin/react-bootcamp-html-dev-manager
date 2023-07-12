import UserImage from "@assets/noteDummy.jpg";
import style from "@users/Users.module.css";
import { Card, Col, Figure, Image, Row } from "react-bootstrap";
export default function AddNote() {
  return (
    <Card className={style.userCard}>
      <Row className={`${style.userCardTop} g-0`}>
        <Col md={4} className="pt-3">
          <Image src={UserImage} fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Figure>
              <Card.Title className="mb-4">Sherlock Holmes</Card.Title>
              <Figure.Caption className="blockquote-footer">
                Date Of Birth:{" "}
                <cite title="Source Title" className="text-success">
                  May 22, 1859
                </cite>
              </Figure.Caption>
              <Figure.Caption className="blockquote-footer">
                Email:{" "}
                <cite title="Source Title" className="text-success">
                  holmes.sherlock@gmail.com
                </cite>
              </Figure.Caption>
              <Figure.Caption className="blockquote-footer">
                Phone:{" "}
                <cite title="Source Title" className="text-success">
                  +880 18 11 66 11 66
                </cite>
              </Figure.Caption>
              <Figure.Caption className="blockquote-footer">
                Address:{" "}
                <cite title="Source Title" className="text-success">
                  221B Baker St., London
                </cite>
              </Figure.Caption>
            </Figure>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card.Body>
            <Card.Subtitle className="mb-1 mt-3">Short Bio</Card.Subtitle>
            <Card.Text>
              Sherlock Holmes, fictional character created by the Scottish
              writer Arthur Conan Doyle.As the world’s first and only
              “consulting detective,” he pursued criminals throughout Victorian
              and Edwardian London, the south of England, and continental
              Europe.
            </Card.Text>
            <Card.Text>
              <span>
                <small className="text-body-secondary">
                  User Registered 3 Hrs ago
                </small>
              </span>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
