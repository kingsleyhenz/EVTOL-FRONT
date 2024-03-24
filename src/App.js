// import Login from "./Page/Login"
import "./Stylesheet/Admin/Login.css"
import { Route, Routes } from "react-router-dom";
import Requests from './Page/Admin/requests';
import Home from './Page/Admin/dashMain';
import EvtolList from './Page/Admin/allEvtol';
import Load from './Page/Admin/evtolLoad';
import Avalaible from './Page/Admin/avalaible';
import Landing from './Page/User/land';
import About from './Page/User/about';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Overview" element={<Home />} />
        <Route path="/all" element={<EvtolList />} />
        <Route path="/load" element={<Load/>}/>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/viewAvailable" element={<Avalaible />} />
    </Routes>
    </>
  );
}

export default App;
