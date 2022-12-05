import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Footer />
		</div>
	);
}

export default App;
