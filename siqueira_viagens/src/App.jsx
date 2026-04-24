import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Escocia from "./components/Escocia";
import Aruba from "./components/Aruba";
import Muralha from "./components/Muralha";
import Canyon from "./components/Canyon";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Escocia />
      <Aruba />
      <Muralha />
      <Canyon />
      <Footer />
    </main>
  );
}

export default App;
