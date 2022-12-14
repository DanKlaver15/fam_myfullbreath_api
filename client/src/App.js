import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home.js';
import VerifyEmail from './pages/VerifyEmail.js';
import ResetPassword from './pages/ResetPassword.js';

function App() {
	useEffect(() => {
		document.body.style.backgroundColor = "#1A2351";
	});
	
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/verifyEmail" element={<VerifyEmail />} />
					<Route path="/resetPassword" element={<ResetPassword />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
