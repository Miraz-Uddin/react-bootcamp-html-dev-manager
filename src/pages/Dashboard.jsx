import DashboardLayout from "@shared/DashboardLayout";
import { Button, Table } from "react-bootstrap";
export default function Dashboard() {
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
              <tr>
                <td>1</td>
                <td>Mark Otto</td>
                <td>mark.otto@gmail.com</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark Otto</td>
                <td>mark.otto@gmail.com</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark Otto</td>
                <td>mark.otto@gmail.com</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark Otto</td>
                <td>mark.otto@gmail.com</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mark Otto</td>
                <td>mark.otto@gmail.com</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
