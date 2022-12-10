import { Navbar } from "./components";
import { Home, Projects } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
