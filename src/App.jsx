import "@/App.css";
import Home from "@/components/Home";
import Dashboard from "@pages/Dashboard";
import Notes from "@pages/dashboard/Notes";
import Profile from "@pages/dashboard/Profile";
import AddNote from "@pages/dashboard/note/AddNote";
import EditNote from "@pages/dashboard/note/EditNote";
import ViewNote from "@pages/dashboard/note/ViewNote";
import ChangePassword from "@pages/dashboard/password/ChangePassword";
import EditProfile from "@pages/dashboard/profile/EditProfile";
import Navigation from "@shared/Navigation";
import NoMatch from "@shared/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/LoginSection";
import Register from "./components/auth/RegisterSection";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
