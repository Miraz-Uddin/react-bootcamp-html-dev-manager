import style from "@notes/Notes.module.css";
import { useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
export default function EditSection() {
  const [clicks, setClicks] = useState(0);
  const [inputFields, setInputFields] = useState([]);
  const handleAddField = (e) => {
    e.preventDefault();
    const newFields = [...inputFields];
    newFields.push(
      <Form.Group key={clicks} className="mb-3" controlId="formLastName">
        <Form.Control type="text" placeholder="Enter New Task" />
      </Form.Group>
    );
    setInputFields(newFields);
    setClicks(clicks + 1);
  };
  return (
    <div className="section">
      <Card className="shadow p-3">
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} sm={11} md={6}>
                <Form.Group className="mb-3" controlId="formProfession">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option>Urgent</option>
                    <option>Can Be Delayed</option>
                    <option>Work Later</option>
                    <option>Expired</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  key={clicks}
                  className="mb-3"
                  controlId="formLastName"
                >
                  <Form.Control type="text" placeholder="Enter New Task" />
                </Form.Group>
                {inputFields}

                <Button
                  className={style.addTask}
                  variant="link"
                  onClick={handleAddField}
                >
                  Add Task
                </Button>
              </Col>
              <Col xs={12} sm={11} md={6}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Short Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Short title" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="formShortBio"
                    className="mb-3"
                    label="Note Details"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Note Details"
                      style={{ height: "106px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Task Overall Progress</Form.Label>
                  <Form.Range />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update New Note
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
