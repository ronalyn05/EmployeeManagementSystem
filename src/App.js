import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './components/landingpage';
import LoginPage from './components/login';
import NewHireUpload from './components/newHireUpload';
import ExitClearance from './components/exitclearance';
import Movement from './components/movement';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import AdminModule from './components/adminModule';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path="/" element={<LoginPage/>} />
          <Route path="/landingpage" element={<LandingPage/>} />
          <Route path="/newHireUpload" element={<NewHireUpload/>} />
          <Route path="/exitclearance" element={<ExitClearance/>} />
          <Route path="/movement" element={<Movement/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/adminModule" element={<AdminModule/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
