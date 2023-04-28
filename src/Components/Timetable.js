import React, { useState } from "react";
import axios from "axios";
import "../Styles/Timetable.css"; // Import the CSS file
import Description1TT from "./Description1TT";

const baseURL = "http://localhost:8091/api/v1/admin/timetable/get/ece/8";

function Timetable() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const [TT, setTT] = useState([{}]);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTT(response.data);
      console.log(TT);
    });
  }, []);

  return (
    <div className="timetable-container">
      {/* {" "}
      <table className="timetable">
        {" "}
        <thead>
          <tr>
            <th></th>
            {periods.map((period) => (
              <th key={period}>Period {period}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekdays.map((weekday, index) => (
            <tr key={index}>
              <td>{weekday}</td>
              {TT[index].map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Description1TT /> */}
    </div>
  );
}

export default Timetable;
