import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home.js';
import VerifyEmail from './pages/VerifyEmail.js';
import ResetPassword from './pages/ResetPassword.js';

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/verifyEmail" element={<VerifyEmail />} />
					<Route path="/resetPassword" element={<ResetPassword />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
