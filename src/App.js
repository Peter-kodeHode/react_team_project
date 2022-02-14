import './App-mobile.css';
import "./App.css";
import GoogleMaps from "./components/GoogleMaps";
import EpicHeader from "./components/EpicHeader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EpicHeader/>
      <GoogleMaps/>
    </div>
  );
}

export default App;
