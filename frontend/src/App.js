import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import AllStudents from "./components/allstudents"
import AddStudent from "./components/addstudent"
import MainList from "./components/mainlist"
import Door from "./components/door"
import Projector from "./components/projector"
import EditStudent from "./components/editstudent"
import YourNumber from "./components/yournumber"
import Home from "./components/home"


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container" >
          <Navbar />
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/mainlist" component={MainList} />
          <Route path="/door" component={Door} />
          <Route path="/projector" component={Projector} />
          <Route exact path="/allstudents" component={AllStudents} />
          <Route exact path="/allstudents/new" component={AddStudent} />
          <Route exact path="/allstudents/edit/:id" component={EditStudent} />
          <Route exact path="/allstudents/yournumber/:id" component={YourNumber} />

        </div>
      </div>
    </Router>
  );
}

export default App;
