import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div className="App">
			<PageChoiceProvider>
				<NavBar />
				<Footer />
			</PageChoiceProvider>
		</div>
	);
}

export default App;
