import { FilterProvider } from "./Filter/Filter";
import { HomesProvider } from "./Homes/Homes";
import { InputProvider } from "./Input/Input";
import { RentsProvider } from "./Rents/Rents";
import { UserProvider } from "./User/User";

function Providers({ children }) {
	return (
		<InputProvider>
			<UserProvider>
				<HomesProvider>
					<FilterProvider>
						<RentsProvider>{children}</RentsProvider>
					</FilterProvider>
				</HomesProvider>
			</UserProvider>
		</InputProvider>
	);
}

export default Providers;
