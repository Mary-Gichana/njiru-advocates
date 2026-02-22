import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import {Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Legalservices from "./components/Legalservices";
import Ourpeople from "./components/Ourpeople";
import Genderviolence from "./components/genderviolence";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/legalservices" element={<Legalservices />} />
        <Route path="/ourpeople" element={<Ourpeople />} />
        <Route path="/genderviolence" element={<Genderviolence />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
