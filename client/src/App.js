import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
