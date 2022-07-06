import { createContext, useState } from "react";

export const InputContext = createContext([]);

export const InputProvider = ({ children }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState("password");

	function onClickShowPassword(event) {
		event.preventDefault();
		console.log("hi");
		if (showPassword) {
			setShowPassword(false);
			setInputType("password");
		} else {
			setShowPassword(true);
			setInputType("text");
		}
	}

	return (
		<InputContext.Provider
			value={{
				showPassword,
				setShowPassword,
				inputType,
				setInputType,
				onClickShowPassword,
			}}
		>
			{children}
		</InputContext.Provider>
	);
};
