import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Nav/Navbar";
import FeedbackCard from "./Components/service/FeedbackCard";
import serviceDetails from "./Components/service/serviceDetails";
import AboutUs from "./Components/AboutPage/About";
import OurTeams from "./Components/OurTeam/OurTeam";
import DashBoard from "./Components/SideBar/Dashboard";
import PatientSec from "./Components/SideBar/PatientSec";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Link, useHistory } from "react-router-dom"; // Import useHistory and Link
import Appointment from "./Components/SideBar/Appointments";
import DaySheet_ from "./Components/SideBar/DaySheet";
import PatientDashboard_ from "./Components/SideBar/PatientDashboard/PatientDashboard";
import AppointmentsPatient_ from "./Components/SideBar/PatientDashboard/AppointmentsPatient";

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

          <Route
            path="/src/Components/SideBar/Dashboard.js"
            Component={DashBoard}
          ></Route>

          <Route
            path="/src/Components/SideBar/PatientSec.js"
            Component={PatientSec}
          ></Route>

          <Route
            path="/src/Components/SideBar/Appointments.js"
            Component={Appointment}
          ></Route>

          <Route
            path="/src/Components/SideBar/DaySheet.js"
            Component={DaySheet_}
          ></Route>

          <Route
            path="/src/Components/SideBar/PatientDashboard/PatientDashboard.js"
            Component={PatientDashboard_}
          ></Route>

          <Route
            path="/src/Components/SideBar/PatientDashboard/AppointmentsPatient.js"
            Component={AppointmentsPatient_}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
