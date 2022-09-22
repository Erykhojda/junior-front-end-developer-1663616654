import React from "react";
import "./App.css";
import TasksBar from "./components/TasksBar";
import ContextContainer from "./components/ContextContainer";
import logo from "../src/image/logo.png";
import pic from "../src/image/pic.png";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<img className="logo" src={logo} alt="logo" />
				<img className="pic" src={pic} alt="pic" />
			</header>
			<TasksBar />
			<Routes>
				<Route path="/" element={<div></div>} />
				<Route path="/books" element={<div></div>} />
				<Route path="/admin" element={<div></div>} />
				<Route path="/connect" element={<ContextContainer />} />
				<Route path="/book" element={<div></div>} />
			</Routes>
			<footer>
				<div>
					<span>Terms of service</span>&#x2022;
					<span>Privacy policy</span>&#x2022;
					<span>Copyright</span>
				</div>
				<div>
					<span>nerds.family Version 1.2</span>&#x2022;
					<span>Last update 10/09/2022</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
