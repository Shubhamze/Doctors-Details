import React from "react";
import AddDoctor from "./AddDoctor";
import DoctorList from "./DoctorList";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Add Doctor</h1>
      <AddDoctor />
      {/* <DoctorList /> */}
    </div>
  );
}

export default App;
