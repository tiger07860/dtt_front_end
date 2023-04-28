import { useState } from "react";

const BatchTTForm = () => {
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // // call onLogin with email and password
    // onLogin(email, password);
  };

  return (
    <div className="container" style={{ marginTop: "-100px" }}>
      <form onSubmit={handleSubmit} className="form">
        <label style={{ fontSize: "1.25rem" }}>Degree:</label>
        <select
          value={degree}
          onChange={(event) => setDegree(event.target.value)}
          style={{
            marginBottom: "20px",
            fontSize: "1rem",
            borderRadius: "2px",
          }}
        >
          <option value="">--Select Degree--</option>
          <option value="option1">B.Tech</option>
          <option value="option2">M.Tech</option>
          <option value="option3">PHD</option>
        </select>
        <br />
        <label style={{ fontSize: "1.25rem" }}>Branch:</label>
        <select
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
          style={{
            marginBottom: "20px",
            fontSize: "1rem",
            borderRadius: "2px",
          }}
        >
          <option value="">--Select Branch--</option>
          <option value="option1">ECE</option>
          <option value="option2">CSE</option>
          <option value="option3">MEC</option>
          <option value="option3">CHE</option>
        </select>
        <label style={{ fontSize: "1.25rem" }}>Year:</label>
        <select
          value={year}
          onChange={(event) => setYear(event.target.value)}
          style={{
            marginBottom: "20px",
            fontSize: "1rem",
            borderRadius: "2px",
          }}
        >
          <option value="">--Select Year--</option>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option3">4</option>
        </select>
        <button
          type="submit"
          style={{ fontSize: "1rem", width: "80px", height: "40px" }}
        >
          View
        </button>
      </form>
    </div>
  );
};

export default BatchTTForm;
