import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Section_Um from "./components/Section_Um";
import Section_Dois from "./components/Section_Dois";
import Section_Tres from "./components/Section_Tres";
import Section_Quatro from "./components/Section_Quatro";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Section_Um />} />
          <Route path="/Section_Dois" element={<Section_Dois />} />
          <Route path="/Section_Tres" element={<Section_Tres />} />
          <Route path="/Section_Quatro" element={<Section_Quatro />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
