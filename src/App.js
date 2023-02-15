import Login from "./Page/Login"
import Home from "./Page/dashMain"
import Avalaible from "./Page/avalaible"
import EvtolList from "./Page/allEvtol"
import Load from "./Page/evtolLoad"
import "./Stylesheet/Login.css"
import { Route, Routes } from "react-router-dom";
import Meds from "./Page/allMeds"

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<EvtolList />} />
        <Route path="/load" element={<Load/>}/>
        <Route path="/viewmeds" element={<Meds/>}/>
        <Route path="/viewAvailable" element={<Avalaible />} />
    </Routes>
    </>
  );
}

export default App;
