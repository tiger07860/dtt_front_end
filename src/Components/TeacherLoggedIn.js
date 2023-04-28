import React from "react";
import Timetable_demo from "./Timetable_demo";
import { useState } from "react";
import BatchTTForm from "./BatchTTForm";
import "../Styles/TeacherLoggedIn.css";
function TeacherLoggedIn() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="loggedin-div">
      <div style={{ textAlign: "center" }}>
        <h1>Welcome Dr. Indu Saini</h1>
        {selectedOption == "Personal" ? (
          <div>
            <button className="time_table_toggle_button_temp">Personal</button>
            <button className="time_table_toggle_button">Batch</button>
            <Timetable_demo />
          </div>
        ) : (
          <div>
            <button className="time_table_toggle_button">Personal</button>
            <button className="time_table_toggle_button_temp">Batch</button>
            <BatchTTForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherLoggedIn;
