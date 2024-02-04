import './App.css';
import Navbar from './component/navbar/navbar';
import Schedules from './pages/schedules-class-routine/schedules-class-routine';
import ClassSectionB from './pages/schedules-class-routine/class-section-b/class-section-b';
import ClassSectionC from './pages/schedules-class-routine/class-section-c/class-section-c';
import AttendanceStudents from './pages/attendance-students/attendance-students';
import Classrooms from './pages/classrooms/classrooms';
import StudentsRegister from './pages/user-students/students-new/students-register';
import UserAdmins from './pages/user-admins/user-admins';
import UserStudents from './pages/user-students/user-students';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<UserAdmins />}/>
          <Route path="/user-students" exact element={<UserStudents />}/>
          <Route path="/students-register" exact element={<StudentsRegister />}/>
          <Route path="/schedules-class-routine" exact element={<Schedules />}/>
          <Route path="/class-section-b" exact element={<ClassSectionB />}/>
          <Route path="/class-section-c" exact element={<ClassSectionC />}/>
          <Route path="/attendance-students" exact element={<AttendanceStudents />}/>
          <Route path="/classrooms" exact element={<Classrooms />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
