// import Login from "./Page/Login"
import Home from "./Page/dashMain"
import Avalaible from "./Page/avalaible"
import EvtolList from "./Page/allEvtol"
import Load from "./Page/evtolLoad"
import "./Stylesheet/Login.css"
import { Route, Routes } from "react-router-dom";
import Requests from "./Page/requests"

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<EvtolList />} />
        <Route path="/load" element={<Load/>}/>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/viewAvailable" element={<Avalaible />} />
    </Routes>
    </>
  );
}

export default App;
