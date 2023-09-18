import "./App.css";
// import Nav from "./components/Header/Nav";
import Navbar from "./components/Header/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Nav></Nav> */}
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
