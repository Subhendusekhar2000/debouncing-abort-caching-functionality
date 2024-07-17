import "./App.css";
import Navfun from "./components/Navfun";
// import Mobilenav from "./components/Mobilenav";
// import Navbar from "./components/Navbar";
import Otpfunctionality from "./components/Otpfunctionality";
import Cashingtech from "./components/Cashingtech";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <Mobilenav />
      </div> */}
      <Navfun />
      <Routes>
        <Route path="/otpfunctionality" element={<Otpfunctionality />} />
        <Route path="/search" element={<Cashingtech />} />
      </Routes>
    </div>
  );
}

export default App;
