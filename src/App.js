import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes/index.jsx";

function App() {
	return (
		<>
			<GlobalStyle />
			<ToastContainer
				position="top-right"
				autoClose={2200}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes />
		</>
	);
}

export default App;
