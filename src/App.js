import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Nav/Navbar";
import FeedbackCard from "./Components/service/FeedbackCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import serviceDetails from "./Components/service/serviceDetails";
 function App() {
  return (
    <>

      <Navbars />
      <Router><Routes>

        <Route path="/src/Components/Nav/Navbar.js" Component={Navbars}>
        </Route>
        <Route path="/src/Components/service/serviceDetails" Component={serviceDetails}>
        </Route>
        <Route path="/src/Components/service/FeedbackCard" Component={FeedbackCard}>
        </Route>
      </Routes>
      </Router>
    </>

  );
}

export default App;
