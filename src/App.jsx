import "./App.css";
// import Nav from "./components/Header/Nav";
import Navbar from "./components/Header/Navbar";
import NewLineChart from "./components/LineChart/NewLineChart";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Nav></Nav> */}
      <PriceOptions></PriceOptions>
      <NewLineChart></NewLineChart>
    </>
  );
}

export default App;
