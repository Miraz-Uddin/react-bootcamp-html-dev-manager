import DashboardLayout from "@shared/DashboardLayout";
import { Col, Row } from "react-bootstrap";

export default function ChangePassword() {
  return (
    <DashboardLayout activeKey="profileEdit">
      <div className="section">
        <Row>
          <Col>Password Change Form</Col>
        </Row>
      </div>
    </DashboardLayout>
  );
}
