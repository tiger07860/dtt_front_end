import React from "react";
import StudentLoggedIn from "./StudentLoggedIn";
import TeacherLoggedIn from "./TeacherLoggedIn";

function LoggedInContent({ isTeacher }) {
  return <div>{isTeacher ? <TeacherLoggedIn /> : <StudentLoggedIn />}</div>;
}

export default LoggedInContent;
