import "@/App.css";
import Home from "@/components/Home";
import { AddNote, EditNote, Notes, ViewNote } from "@notes";
import Navigation from "@shared/Navigation";
import NoMatch from "@shared/NoMatch";
import { EditUser, Users } from "@users";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/auth/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:id" element={<ViewNote />} />
          <Route path="add/notes" element={<AddNote />} />
          <Route path="edit/notes/:id" element={<EditNote />} />
          <Route path="users" element={<Users />} />
          <Route path="edit/users/:id" element={<EditUser />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
