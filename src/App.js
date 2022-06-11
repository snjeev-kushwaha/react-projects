import {Nav} from "react-bootstrap";
import { Route, Routes,Link } from "react-router-dom";
import Employeelist from "./Employeelist";
import Employeesalary from "./Employeesalary";
import Contect from "./contect";
import Gaming from "./gaming";
function App() {
  return (
    <>
      <h1>This is my main page</h1>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/salary">Salary</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link> <Link to="/serveces">serveces</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link> <Link to="/contact us">contact us</Link></Nav.Link>
    </Nav.Item>
  </Nav >
    <Routes>
      <Route path="/" element={<Employeelist />} />
      <Route path="/salary" element={<Employeesalary />} />
      <Route path="/serveces" element={<Gaming />} />
      <Route path="/contect us" element={<Contect />} />
    </Routes>
  </>
  );
}

export default App;
