import "@/App.css";
import {
  AddNote,
  ChangePassword,
  Dashboard,
  EditNote,
  EditProfile,
  Home,
  Login,
  Notes,
  PasswordReset,
  Profile,
  Register,
  ViewNote,
} from "@pages";
import { Navigation, NoMatch } from "@shared";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password/reset" element={<PasswordReset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="dashboard/profile" element={<Profile />} />
          <Route path="dashboard/profile/edit" element={<EditProfile />} />
          <Route
            path="dashboard/password/change"
            element={<ChangePassword />}
          />
          <Route path="dashboard/notes" element={<Notes />} />
          <Route path="dashboard/notes/:id" element={<ViewNote />} />
          <Route path="dashboard/notes-add" element={<AddNote />} />
          <Route path="dashboard/notes-edit/:id" element={<EditNote />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
