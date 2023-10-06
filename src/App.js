import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
      
    </div>
  );
}

export default App;
