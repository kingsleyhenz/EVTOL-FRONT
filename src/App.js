import Login from "./Page/Login"
import Home from "./Page/dashMain"
import Avalaible from "./Page/avalaible"
import EvtolList from "./Page/allEvtol"
import "./Stylesheet/Login.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<EvtolList />} />
        <Route path="/viewAvailable" element={<Avalaible />} />
    </Routes>
    </>
  );
}

export default App;
