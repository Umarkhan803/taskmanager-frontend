import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import DashBoard from "./Components/DashBoard";
import AddTask from "./Components/AddTask";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Login from "./Components/Login";
import UpdateTask from "./Components/UpdateTask";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashbord" element={<DashBoard />} />
          <Route path="/task" element={<AddTask />} />
          <Route path="/update" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
