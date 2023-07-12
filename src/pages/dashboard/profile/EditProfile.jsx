import DashboardLayout from "@shared/DashboardLayout";
import { Col, Row } from "react-bootstrap";

export default function EditProfile() {
  return (
    <DashboardLayout activeKey="profileEdit">
      <div className="section">
        <Row>
          <Col>Edit Profile Form</Col>
        </Row>
      </div>
    </DashboardLayout>
  );
}
