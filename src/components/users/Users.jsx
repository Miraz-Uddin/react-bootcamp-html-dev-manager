import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div className="section">
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
              <Link to="/edit/users/12133e34ssd">
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
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
              <Link to="/edit/users/12133e34ssd">
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
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
              <Link to="/edit/users/12133e34ssd">
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
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
              <Link to="/edit/users/12133e34ssd">
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
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
              <Link to="/edit/users/12133e34ssd">
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
              <Button variant="danger" size="sm" className="me-2">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
