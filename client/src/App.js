import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home.js';
import VerifyEmail from './pages/VerifyEmail.js';

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/verifyEmail" element={<VerifyEmail />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
