import { Navbar } from "./components";
import { About, Home, Projects } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
