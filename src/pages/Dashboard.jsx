import UserImage from "@assets/noteDummy.jpg";
import style from "@profile/Profile.module.css";
import { DashboardLayout } from "@shared";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Figure,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
export default function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <DashboardLayout activeKey="dashboard">
      <div>
        <h3 className="mt-1">Welcome, Sherlock Holmes !!</h3>
        <div className="pt-2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>Mark Otto</td>
                  <td>mark.otto@gmail.com</td>
                  <td>
                    <Button variant="danger" size="sm" className="me-2">
                      Delete
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleShow}>
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Sherlock Holmes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className={`${style.userCardTop} g-0`}>
                <Col md={4} className="pt-3">
                  <Image src={UserImage} fluid />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Figure className="pt-3">
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
                    <Card.Subtitle className="mb-1 mt-3">
                      Short Bio
                    </Card.Subtitle>
                    <Card.Text>
                      Sherlock Holmes, fictional character created by the
                      Scottish writer Arthur Conan Doyle.As the world’s first
                      and only “consulting detective,” he pursued criminals
                      throughout Victorian and Edwardian London, the south of
                      England, and continental Europe.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </DashboardLayout>
  );
}
