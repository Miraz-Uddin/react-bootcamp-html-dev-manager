import { Card } from "react-bootstrap";
export default function NoMatch() {
  return (
    <div className="section">
      <Card className="shadow p-5">
        <Card.Body>
          <h3 className="text-center">
            <span>OOPS ...</span>
          </h3>
          <h5 className="text-center">
            <span>
              The Page You are Looking for may have been moved, deleted or
              possibly Never Existed
            </span>
          </h5>
        </Card.Body>
      </Card>
    </div>
  );
}
