import React from "react";
import "../Styles/Timetable.css"; // Import the CSS file
import DescriptionTT from "./DescriptionTT";

function Timetable() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const timetableData = [
    [
      "BT-1(ACS)",
      "BT-2(DE)",
      "MT-1(DE)",
      "-",
      "BT-1(G1)(ACS Tut)",
      "",
      "BT-3(G3)(DSP Lab)",
      "BT-3(G3)(DSP Lab)",
    ],
    ["-", "BT-1(ACS)", "-", "BT-2(DE)", "-", "-", "BT-2(G2)(DE Tut)", "-"],
    ["BT-4(DSP)", "-", "BT-1(ACS)", "BT-2(DE)", "", "", "", ""],
    [
      "MT-1(DE)",
      "-",
      "BT-4(DSP)",
      "-",
      "MT-1(ASP Lab)",
      "MT-1(ASP Lab)",
      "-",
      "-",
    ],
    ["-", "BT-4(DSP)", "MT-1(DE)", "-", "-", "BT-4(G4)(DSP Tut)", "-", "-"],
  ];

  return (
    <div className="timetable-container">
      {" "}
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
              {timetableData[index].map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <DescriptionTT />
    </div>
  );
}

export default Timetable;
