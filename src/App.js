import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user/:userId" element={<RetrieveUser />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}
export default App;
