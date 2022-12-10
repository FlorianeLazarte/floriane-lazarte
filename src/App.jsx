import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Resume } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
