import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import PageChoiceProvider from "./utils/pageChoiceContext";

function App() {
	return (
		<div className="App">
			<PageChoiceProvider>
				<Home />
				<NavBar />
				<Footer />
			</PageChoiceProvider>
		</div>
	);
}

export default App;
