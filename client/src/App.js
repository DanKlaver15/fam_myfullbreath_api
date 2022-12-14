import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home.js';
import VerifyEmail from './pages/VerifyEmail.js';

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/verifyEmail" element={<VerifyEmail />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
