import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes/index.jsx";

import GlobalStyle from "./styles/global";

function App() {
	return (
		<>
			<GlobalStyle />
			<ToastContainer />
			<Routes />
		</>
	);
}

export default App;
