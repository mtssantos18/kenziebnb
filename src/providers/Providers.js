import { HomesProvider } from "./Homes/Homes";
import { InputProvider } from "./Input/Input";
import { RentsProvider } from "./Rents/Rents";

function Providers({ children }) {
	return (
		<InputProvider>
			<HomesProvider>
				<RentsProvider>{children}</RentsProvider>
			</HomesProvider>
		</InputProvider>
	);
}

export default Providers;
