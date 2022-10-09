// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/containers/home/Home";
import { Route, Routes } from "react-router";
import Results from "./components/containers/results/Results";
import TestContainer from "./components/containers/testContainer/TestContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/test/:testId" element={<TestContainer />} />
      </Routes>
    </div>
  );
}

export default App;
