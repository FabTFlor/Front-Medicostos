import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import Busqueda from "./Busqueda/Busqueda";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <NavBar />
      <Portada />
      <Busqueda />

      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div className="App">
            <h1>Medications Search</h1>
            <SearchBar />
          </div>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}

export default App;
