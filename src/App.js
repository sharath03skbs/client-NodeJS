import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsersList from "./pages/user/UsersList";
import CreateUser from "./pages/user/CreateUser";
import RetrieveUser from "./pages/user/RetrieveUser";
import EditUser from "./pages/user/EditUser";
import RemoveUser from "./pages/user/RemoveUser";
import Contact from "./pages/static/Contact";
import About from "./pages/static/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/get/:userId" element={<RetrieveUser />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/delete/:userId" element={<RemoveUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}
export default App;
