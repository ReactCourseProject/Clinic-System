import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Nav/Navbar";
import FeedbackCard from "./Components/service/FeedbackCard";
import serviceDetails from "./Components/service/serviceDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import AboutUs from "./Components/AboutPage/About";
import OurTeams from "./Components/OurTeam/OurTeam";
function App() {
  return (
    <>
      <Navbars />
      <Router>
        <Routes>
          <Route
            path="/src/Components/AboutPage/About.js"
            Component={AboutUs}
          ></Route>

          <Route
            path="/src/Components/service/serviceDetails"
            Component={serviceDetails}
          ></Route>
          <Route
            path="/src/Components/service/FeedbackCard"
            Component={FeedbackCard}
          ></Route>

          <Route
            path="/src/Components/OurTeam/OurTeam.js"
            Component={OurTeams}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
