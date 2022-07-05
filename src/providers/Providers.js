import { HomesProvider } from "./Homes/Homes";
import { RentsProvider } from "./Rents/Rents";

function Providers({ children }) {
  return (
    <HomesProvider>
      <RentsProvider>{children}</RentsProvider>
    </HomesProvider>
  );
}

export default Providers;
