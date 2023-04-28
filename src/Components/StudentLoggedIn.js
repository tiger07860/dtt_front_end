import React from "react";
import Timetable from "./Timetable";

function StudentLoggedIn() {
  return (
    <div className="loggedin-div">
      <div className="loggedin-Student-div">
        <h1>
          Welcome <i>John David</i>
        </h1>
        <h1>B. Tech - ECE - 4th Year</h1>
        <Timetable />
      </div>
    </div>
  );
}

export default StudentLoggedIn;
