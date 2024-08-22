import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import RemoveUser from "./components/user/RemoveUser";

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
          <Route />
        </Routes>
      </Router>
    </>
  );
}
export default App;
