import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import Providers from "./providers/Providers.js";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Providers>
					<App />
				</Providers>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
