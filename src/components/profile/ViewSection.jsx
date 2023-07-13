import UserImage from "@assets/noteDummy.jpg";
import style from "@profile/Profile.module.css";
import { Card, Col, Figure, Image, Row } from "react-bootstrap";
export default function ViewSection() {
  return (
    <div className="section">
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
                  Email:{" "}
                  <cite title="Source Title" className="focused">
                    holmes.sherlock@gmail.com
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Phone:{" "}
                  <cite title="Source Title" className="focused">
                    +880 181 166 1166
                  </cite>
                </Figure.Caption>

                <Figure.Caption className="blockquote-footer">
                  Date Of Birth:{" "}
                  <cite title="Source Title" className="focused">
                    May 22, 1859
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Gender:{" "}
                  <cite title="Source Title" className="focused">
                    Male
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Profession:{" "}
                  <cite title="Source Title" className="focused">
                    Engineer
                  </cite>
                </Figure.Caption>
                <Figure.Caption className="blockquote-footer">
                  Address:{" "}
                  <cite title="Source Title" className="focused">
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
                “consulting detective,” he pursued criminals throughout
                Victorian and Edwardian London, the south of England, and
                continental Europe.
              </Card.Text>
              <Card.Text>
                <span>
                  <small className="text-body-secondary">
                    You Registered to this Website 3 Hrs ago
                  </small>
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
