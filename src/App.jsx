import { Navbar } from "./components";
import { About, Home, Projects, Resume } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
